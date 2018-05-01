import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxJsonapiModule } from 'ngx-jsonapi';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './posts/posts.service';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    NgxJsonapiModule.forRoot({
      url: '//localhost:4200/api/v1/'
    })
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
