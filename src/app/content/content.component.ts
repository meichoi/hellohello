import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../user.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input() choi; /*1.서버에서 값을 가져옴 : 부모에서 값을 받아 오겠다*/
  constructor(private userService: UserService) { }
  //생성자 : 메모리상 올릴때 생성자를 호출 서비스를 주입 받음
  //private or public 정의해서 서비스 호출
  //생성자의 파라미너 타입은 서비스 클래스 타입으로  / 서비스 주입
  ngOnInit() { //초기화
  }
  btnClicked(){
    // const result = UserService.addTwoNumber(3,5);
    // console.log(result);
    this.userService.getAllUsers(); // http: 서버데이터 호출
  }
}
