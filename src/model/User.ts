export class User { //외부에서 사용가능 하게 쓸려면  export 를 붙이고 내부는 삭제해도 됨
  id: number;
  name: string;
  age: number;
  hobby: Array<string>; /*스트링 배열 / or []*/
  address: string;
}
/*클래스의 타입을 정의 해놓음*/
/* 구조적 변화 95페이지 확인*/
