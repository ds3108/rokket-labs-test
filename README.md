# rokket-labs-test

### Testing the cases 

For test the functions,we require [Node.js](https://nodejs.org/) v4+ to run.

#### 1) Composite function

Write a function called "rokket" which produces the following output when called:

```sh
const rokket = (x) => (y) => (z) => x * y * z;
console.log(rokket(2)(5)(3)); // should return 30
console.log(rokket(4)(2)(2)); // should return 16
console.log(rokket(8)(2)(1)); // should return 16
```

#### 2) Longest string

Write a function called "rokket" which receives an array with several strings. It must output the longest (character length) string in the array

```sh
const rokket = (arr) => arr.reduce((a, b) =>a.length > b.length ? a : b);
const list = ['best', 'company', 'ever'];
console.log(rokket(list)) // this outputs 'company'
```

#### 3) String repetition

Write a function called "rokket" which receives a string A and an integer N and returns a new string with A repeated N times.

```sh
const rokket =(string='',repeats=0) =>string.repeat(repeats);
console.log(rokket('node',5)) // this outputs 'nodenodenodenodenode'
console.log(rokket('abc', 2)) // this outputs 'abcabc'
```

#### 4) Only Last Names

Write a function called "rokket" which receives a list of names from a contact book. Each name is an object consisting of a first name and last name. Return a list that
shows only the last names.

```sh
const rokket = (contacts =[]) => contacts.map(x=>x.lastName || 'Not found');
const contacts = [
    { firstName: 'Juanito', lastName: 'Rokket' },
    { firstName: 'James', lastName: 'Bond' },
    { firstName: 'Harry', lastName: 'Potter' }
    ]
    console.log(rokket([contacts])) // this outputs ['Rokket', 'Bond', 'Potter']
```

#### 5) Unique numbers

Write a function called "rokket" which receives two number arrays of any size. Return a list containing the intersection of the two arrays (all unique numbers in both
arrays).

```sh
const rokket = (array1=[],array2=[]) =>{
    const combinatedArray = array1.concat(array2);
    return combinatedArray.filter((v, i, a) => a.indexOf(v) === i);
}
console.log(rokket([1, 2, 5], [2, 1, 6])) // this outputs [1, 2, 5, 6]
console.log(rokket([1, 2, 3], [4, 5, 6])) // this outputs [1, 2, 3, 4, 5, 6]
```