import { Component, OnInit } from '@angular/core';
import { POSTS } from '../all-posts';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
   posts = POSTS;
  constructor() { }

  ngOnInit() {
  }

}
