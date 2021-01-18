const compositeFunction = (x) => (y) => (z) => x * y * z;

console.log(compositeFunction(2)(5)(3)); // should return 30
console.log(compositeFunction(4)(2)(2)); // should return 16
console.log(compositeFunction(8)(2)(1)); // should return 16

const longestString = (arr) => arr.reduce((a, b) =>a.length > b.length ? a : b);

const list = ['best', 'company', 'ever'];
console.log(longestString(list)) // this outputs 'company'


const stringRepetition =(string='',repeats=0) =>string.repeat(repeats);

console.log(stringRepetition('node',5)) // this outputs 'nodenodenodenodenode'
console.log(stringRepetition('abc', 2)) // this outputs 'abcabc'


const onlyLastNames = (contacts =[]) => contacts.map(x=>x.lastName || 'Not found');
const contacts = [
    { firstName: 'Juanito', lastName: 'Rokket' },
    { firstName: 'James', lastName: 'Bond' },
    { firstName: 'Harry', lastName: 'Potter' }
    ]
    console.log(onlyLastNames([contacts])) // this outputs ['Rokket', 'Bond', 'Potter']



    const uniqueNumbers = (array1=[],array2=[]) =>{
        const combinatedArray = array1.concat(array2);
        return combinatedArray.filter((v, i, a) => a.indexOf(v) === i);
    }

    console.log(uniqueNumbers([1, 2, 5], [2, 1, 6])) // this outputs [1, 2, 5, 6]
    console.log(uniqueNumbers([1, 2, 3], [4, 5, 6])) // this outputs [1, 2, 3, 4, 5, 6]