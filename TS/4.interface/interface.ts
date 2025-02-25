/*
    인터페이스 : 
    - 클래스 및 객체의 타입으로 사용됨
    - 인터페이스에 선언된 속성 또는 메서드의 구현을 강제
    - interface 키워드로 선언
*/

/*
    변수(객체)의 타입으로써 인터페이스 : 타입스크립트에서 90% 이상 사용되는 용도
*/
interface King {
    name: string;
    ho: string;
    age: number;
}

interface Human {
    name: string;
    age: number;
    address: string;
}

const taejo: King = {
    name: '이성계',
    ho: '태조',
    age: 74
};

const jeongjong: Human = {
    name: '이방과',
    age: 63,
    address: '고려'
};

interface King2 extends Human {
    name: string;
    ho: string;
    age: number;
}

interface Human2 extends King {
    name: string;
    age: number;
    address: string;
}

interface KingHuman extends King, Human {
    // 자바에서나 쓰는 완벽한 객체지향적인 방법 >> 타임스크립트에서는 완벽하게 X
}

// & : intersection(교집함)으로 기본 타입에는 사용 불가
const taejong: King & Human = {
    name: '이방원',
    ho: '태종',
    age: 58,
    address: '고려'
};


console.log('==================================================');

/*
    클래스의 타입으로써 인터페이스
*/
interface IMath {
    add: (x: number, y: number) => number; // 함수의 타입
}

class CMath implements IMath {

    add(x: number, y: number) {
        return x + y;
    };
}

console.log('==================================================');

/*
    선택적 속성 :
    - ? 키워드로 클래스나 인터페이스(객체)의 속성을 선택적으로 구현하도록 할 수 있음
*/
interface King3 {
    name: string;
    ho?: string;
    birth: string;
    death?: string;
}

const saejong: King3 = {
    name: '이도',
    birth: '1397-05-15'
}

saejong.ho = '세종';
saejong.death = '1450-04-08';

// saejong.address = '조선'; >> 인터페이스에 없는 속성은 값을 넣을 수 없음

console.log('==================================================');