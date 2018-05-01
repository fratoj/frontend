import { Component, OnInit } from '@angular/core';
import { ICollection } from 'ngx-jsonapi';
import { Post, PostService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  public posts: ICollection<Post>;

  constructor(private postService: PostService) {
    this.postService.all()
      .subscribe(
        aPosts => {
          this.posts = aPosts;
          // tslint:disable-next-line:no-console TODO: add logger
          console.info('Got posts', aPosts);
        },
        error => console.error('Could not load posts:', error)
      );
  }
  getType(val) { return typeof val; }

}
