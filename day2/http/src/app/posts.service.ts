import {
  Injectable
} from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpEventType
} from '@angular/common/http';
import {
  Post
} from './post';

import { map, throwError, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) {}
  postsEndpoint: string = 'https://angular-posts-8eb3d.firebaseio.com/posts/.json';

  create(title: string, content: string) {
    console.log('firing??');
    const postData: Post = { title, content };
    return this.http.post<null>(
      this.postsEndpoint,
      postData
      )
  }

  getPosts() {
    return this.http.get<{[key: string]: Post}>
      (this.postsEndpoint, {
        headers: new HttpHeaders({
          'Custom-Header': 'this is a custom header value!'
        }),
        responseType: 'json'
      })
      .pipe(
        map(responseData => {
          const myPosts: Post[] = [];
          Object.keys(responseData).forEach(key => {
            myPosts.push({ ...responseData[key], id: key })
          })
          // if (myPosts.length !== 3) {
          //   throw new Error('wow that was a lot!');
          // }
          return myPosts;
        }),
        catchError(errorData => {
          console.log('within catch error');
          return throwError(() => new Error(errorData));
        })
      )
  }

  deletePosts() {
    console.log('firing?');
    return this.http.delete(this.postsEndpoint, {
      observe: 'events',
      responseType: 'text'
    })
    .pipe(
      tap(event => {
        if (event.type === HttpEventType.Sent) {
          console.log('request sent!');
        }
        if (event.type === HttpEventType.Response) {
          console.log('got a response!');
        }
      }),
      catchError((err: Error) => {
        console.log('any error?');
        console.log(err);
        return 'test';
      })
    )
  }
}
