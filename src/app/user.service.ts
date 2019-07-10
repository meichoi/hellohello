import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({ //관리되어 짐
  providedIn: 'root'
  //루트 컴퍼넌트에서 사용가능함 모든 하위에서 사용가능하다는 것 ,
  // 모듈에서 등록하는거와 같은 역할 이걸사용하면 프로바이드 등록 생략가능
})
export class UserService {

  constructor(private http: HttpClient) {}
  static addTwoNumber(a: number = 0, b: number = 0): number { //끝에 타입은 리턴값의 타입을 정의 한 것
    return a + b;
  }
  //   사용자 전체 보기 ,
  getAllUsers(){
    //가상서버 만들어서 사용
    //https://jsonplaceholder.typicode.com/users
    //const response = this.http.get('https://jsonplaceholder.typicode.com/users') //동기식;
    //비동기방식
    this.http.get('https://jsonplaceholder.typicode.com/users')
      .subscribe(function (res) { //체이닝 서브스크라이브에 있는 함수를 콜백
        console.log(res);
      });

    //데이터를 받아서 어떻게 바인딩하냐가 중요하다
  }
  //   상용자 상세보기,
  //   사용자 등록,
  //   사용자 수정,
  //   사용자 삭제

}
//서비스는 컴퍼넌트에 종속 됨 //엡 컴퍼넌의 서비스로 하위 모두에 사용 가능
