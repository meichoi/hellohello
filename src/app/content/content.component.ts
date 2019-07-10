import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Todo} from '../../model/Todo';
import {TodoService} from './todo.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input() choi; /*1.서버에서 값을 가져옴 : 부모에서 값을 받아 오겠다*/

  userFromServer: object;

  todos: Array<Todo>;

  constructor(
    private userService: UserService,
    private todoService: TodoService
  ) { }
  //생성자 : 메모리상 올릴때 생성자를 호출 서비스를 주입 받음
  //private or public 정의해서 서비스 호출
  //생성자의 파라미너 타입은 서비스 클래스 타입으로  / 서비스 주입
  ngOnInit() { //초기화
    /*this.userService.getUserByUserid()
      .subscribe((res) => { //옵저버블을 사용하면 여기서 체이닝 가능
        this.userFromServer = res; //함수내부의 스콥이기 때문에 전역 변수를 바라보지 못함
        //바라보게 하려면 화살표 함수를 써라 function 대신
      });*/
    this.todoService.getAllTodos()
      .subscribe((res) => { // 응답
          this.todos = res;
      });
  }
  btnClicked(){
    // const result = UserService.addTwoNumber(3,5);
    // console.log(result);
    //this.userService.getAllUsers(); // http: 서버데이터 호출
  }
}
