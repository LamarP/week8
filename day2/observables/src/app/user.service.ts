import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  eventData: EventEmitter<boolean> = new EventEmitter<boolean>();
  subjectData: Subject<boolean> = new Subject<boolean>();
}
