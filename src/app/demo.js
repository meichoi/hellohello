let a = 3; /*var를 안써도 됨, 6에서는 let를 사용*/
const b ='hello'; /* const 값이 재할당 안됨, 이뮤터블한 값*/
/*클로저 지원*/

const c = `
a
b
${b}
`; /*백틱 기호를 활용하여 갑을 받게 처리할 수 있다 (변수를 추가할 수 있다.)/  멀티라인도 지원*/
console.log(a);
function hellof(a,b) {
  return a + b;
}
function hellof2(a) {
  return a();
}
// function aaa(a) { /*파라미터에 넣은 함수 예제*/
//   return 'HELLO';
// }
//console.log(hellof2(aaa));
console.log(hellof2(function () { /*함수를 바로 넣은 예제/ 람다식 /이것을 화살표 함식으로 바꿀수 있음 /익명함수를 문법적 숏컷이 화살표 함수*/
  return 'hello';
}));
console.log(hellof2(() => { /*function () 문법적 숏컷 () => */
  return 'hello';
}));
console.log(hellof2(() => 'hello')); /*문법적으로 리턴 생략 가능*/
function bbb(a,b) {
  return a +b;
}
console.log(bbb(3,4));
console.log(bbb()); /*파라미터 없이 함수 호출 가능 기본값으로 넣어서 실행은 됨(정의되지 않음 값으로 UNDEFINED ) NAN 을 발생*/
/* => 화살표 함수 지원
* 기본적 함수 지향
* 함수가 파라미터로 넘어 갈 수 있음
* 함수를 넘겨 실행도 가능/ 하이오더 펑션
* 함수를 바로 넣어도 됨
* 람다식?
*
* */

const a = 1;
const b= 2;
/*객체 리터럴 */
const ccc ={
  a: a,
  b: b
};
const ccc2 ={a,b};/*이와 같이 단축된 표현이 가능*/
//메소드 축약 표현 가능
const ccc3 ={
  a: a,
  b: b,
  c: function () {
    console.log('hello'); /* 함수도 타입으로 옴*/
  }
};
/* 단축 표현 예제*/
const ccc4 ={
  a,
  b,
  c () {
    console.log('hello');
  }
};

/*디스트럭쳐링  / 객체 구조분해*/
/*클래스 개념이 생김*/
