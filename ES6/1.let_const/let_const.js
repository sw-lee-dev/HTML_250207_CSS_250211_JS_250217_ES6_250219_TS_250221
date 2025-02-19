/*
    let
*/

/*
    블록 레벨 스코프 : 
    - 코드 블럭 내부에서 선언되어서 해당 코드 블럭 내에서만 사용 가능
*/
{
    var x = 10;
}
console.log(x);

// {
//     let y = 10;
// }
// console.log(y); >> ReferenceError: y is not defined

/*
    변수 중복 선언 불가 : 
    - 변수를 동일한 이름으로 여러개 선언 불가능
*/
var x = 1;
var x = 2;

// let y = 1;
// let y = 2; >> SyntaxError: Identifier 'y' has already been declared

/*
    호이스팅 : var, function 선언문으로 선언된 변수 혹은 함수에 대해서 최상단에 선언한 것과 같은 동작을 하는 것
    - let 키워드로 선언된 변수는 최상단에 선언은 되지만 실제 코드상 선언한 위치 이전까지는 일시적 사각지대에 빠트림
*/
console.log(z);
var z = 10;

// console.log(y); >> ReferenceError: Cannot access 'y' before initialization
// let y = 10;

/*
    const
*/

/*
    선언과 초기화 : 
    - 
    - 
*/



/*
    상수와 객체 : 
    - 
    - 
    - 
*/



/*
    var, let, const
    - 
    - 
    - 
*/