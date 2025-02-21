/*
    타입선언 : 
    - 변수 및 함수에 타입을 지정하여 타입에 대한 제한을 추가할 수 있음
*/
let variable: number;
variable = 10;
// variable = '10';

let number = 10;
// number = '10';

function func1(arg: string, arg2: number): string {
    return '문자열';
}

const func2 = (arg: string): void => {
    
};

/*
    typescript의 타입
    - string : 문자열
    - number : 숫자
    - boolean : 논리
    - null : null 타입
    - undefined : 정의되지 않음
    - object : 객체
    - array : 배열
    - enum : 열거형
    - void : 반환값 없음
    - any : 모든 타입을 다 받음
*/
const numbers: number[] = [1, 2, 3];
const numbers2: Array<number> = [1, 2, 3];

let str1: string = 'string';
let str2: String = 'String'; // object에 있는 참조형 객체

str2 = str1;
// str1 = str2; 기본형에 참조형을 담을 수 없음

enum Color {
    RED = '#ff0000',
    GREEN = '#00ff00',
    BLUE = '#0000ff'
}
const color: Color = Color.RED;

let anyType: any = 10;
anyType = '10';

const funcType: (arg: string) => string = (arg: string): string => {
    return '';
}

/*
    타입추론 :
    - 
*/



/*
    타입 변환 :
    - 
*/



/*
    유니온 타입
    - 
*/



/*
    리터럴 타입
    - 
*/

