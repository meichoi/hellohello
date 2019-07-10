import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule //http 클라이언트 모듈 임포트
  ],
  providers: [], //서비스를 등록 해줘야 함 그러나 파일내에서 등록할 수 있음
  bootstrap: [AppComponent]
})
export class AppModule { }
