import { Component } from '@angular/core';
import { Post } from './post';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private postsService: PostsService) {  }
  loadedPosts: Post[] = [];
  onFetchPosts() {
    this.postsService.getPosts().subscribe({
      next: (data: any) => {
        this.loadedPosts = data;
      },
      error: (error: Error) => {
        console.log('check error!');
        console.log(error);
      }
    })
  }

  onClearPosts() {
    this.postsService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  onCreatePost(data: Post) {
    this.postsService.create(data.title, data.content).subscribe(() => {
      console.log('complete!');
    });
  }
}
