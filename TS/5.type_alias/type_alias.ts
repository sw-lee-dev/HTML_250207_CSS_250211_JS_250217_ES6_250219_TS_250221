/*
    타입 앨리어스 :
    - 커스텀 타입을 지정하는 방법 (타입의 별칭 지정, 어딘가에 저장해 놓는 것)
    - type 키워드를 사용
*/
// let day: 'am' | 'pm';
type Day = 'am' | 'pm' | null;
let day1: Day = 'am';

type int = number;
let number: int = 10;

console.log('==================================================');

// 객체 타입 정의하는 방법
// 1. interface 이용
interface IKing {
    name: string;
    ho: string;
    age: number;
}

const iking: IKing = {
    name: '이성계',
    ho: '태종',
    age: 74
};

// 2. type (타입 앨리어스) 이용
type TKing = {
    name: string;
    ho: string;
    age: number;
}

const tking: TKing = {
    name: '이방과',
    ho: '정종',
    age: 63
}

// 3. class 이용 (무결성 검사나 클래스 내의 메서드가 필요한 경우에 사용)
class CKing {
    constructor(
        public name: string,
        public ho: string,
        public age: number
    ) {}
}

const cking1: CKing = {
    name: '이방원',
    ho: '태조',
    age: 56
}

const cking2: CKing = new CKing('이도', '세종', 54);

const king: IKing = tking;

class C1 {
    constructor(
        public a: number,
        public b: number
    ) {}
}

class C2 {
    constructor(
        public a: number,
        public b: number
    ) {}
}

const ins1: C1 = new C1(10, 20);
const ins2: C2 = ins1;