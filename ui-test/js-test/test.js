const king = {
    name: '이성계',
    tombName: '태조',
    birth: '1335-11-04',
    death: '1408-06-27'
};

const {birth, name, tombName, death} = king;

console.log(king.tombName);

console.log('============================');

const users = [
    {id:1, name: '이성계'},
    {id:2, name: '이방과'},
    {id:3, name: '이방원'}
];

const userMap = users.map(user=>{
    return user.id * 2;
});

console.log(userMap);
console.log(users);