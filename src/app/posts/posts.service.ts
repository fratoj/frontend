import { Injectable } from '@angular/core';
import { Service, ISchema, Resource } from 'ngx-jsonapi';

@Injectable()
export class PostService extends Service<Post> {
  public resource = Post;
  public type = 'post';
  public schema: ISchema = {
  };
}
export class Post extends Resource {
  public attributes: {
    title: string,
    published: boolean
  };
}
