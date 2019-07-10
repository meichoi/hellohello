import { Component } from '@angular/core';
import {User} from '../model/User';/* 임포트도 시켜줌 모듈을 임포트하여 사용*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '컴퍼넌트 분리 연습';
  /*myHobby = 'swimming';*/
  choi: User = {/*이런 표기법이 JSON*/ /*유저 클래스 타입 정의 , 가져온 모듈을 사용*/
    id: 1, /*넘버*/
    name: 'Motnane', /*스트링*/
    age: 20, /*넘버*/
    hobby: ['Fishing', 'Gamble', 'Golf', '', undefined], /*배열*/
    address: '수원'
  };
}
