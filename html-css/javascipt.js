/*var myName = 'punit';  // String Variable
var myAge  = 18;       // Number Variable

// Array Variable
var NameArray = ['punit', 'manish', 'Ajit bhaiya'];
var AgeArray = [ '18', '20', '50'];

// Object variable
var object = {
    user1 : 'punit',
    user2 : 'manish',
    user3 : 'Ajit bhaiya'
}

// Operator  is a mathematical symbol that produces a result based on two values (or variables).
var Add = 6 + 9 ;
var sub = 110 - 23.5 ;
var div = 99 / 22 ;
var multi = 55 * 345 ;





var a;

if(a==10)
{
    console.log("barabar");
}

else{
    console.log("nhi h");
}
*/

var number1 = 9;
var number2 = 10;
var total = 8;
if (total < 10) {
    console.log(total >10);
}else{
    console.log(total <10);
}


var age;
function age(age1, age2) {
    return age1 * age2 + 10;
}
console.log(age(4, 3));


var select = "3";
var user1 = 'punit';
var user2 = 'manish';
var user3 = 'pravin bhaiya';
var user4 = 'Ajit bhaiya';

switch (select) {
    case "1":
        console.log(user4);
        break;

    case "2":
        console.log(user3);
        break;

    case "3":
        console.log(user2);
        break;

    case "4":
        console.log(user1);

        break;

    default:
        console.log("wrong selection");
        break;
}
const colours = [
    {
        name: "red",
        code: "366"
    },
    {
        name: "blue",
        code: "453"
    },
    {
        name: "green",
        code: "200"
    },
    {
        name: "yellow",
        code: "487"
    },
];
colours.forEach(colou =>{
    console.log(colou.name);
});

colours.forEach(colour => {
    console.log(`${colour.name}: ${colour['code']}`);
});

var colors = ["red", "yellow", "blue", "green", "black", "white"];

var [col1, col2, col3] = colors;
console.log(col1);


var marksheet = {
    name: 'punit',
    roll: 53,
    div: 'A',
    };
var subject= [
        {
            name: 'english',
            marks: 40/100
        },
        {
            name: 'maths',
            marks: 70/100
        },
        {
            name: 'marathi',
            marks: 30/100
        },
        {
            name: 'hindi',
            marks: 77/100
        }
    ];
console.log(marksheet);
subject.forEach(total => {
    console.log("The Marks of Sem1 is")
    console.log(total.name +" : "+total.marks);
});

//let name1 = "Ilya";

//alert( `hello ${1}` ); // hello 1

//alert( `hello ${"name"}` ); // hello name

//alert( `hello ${name1}` ); // hello Ilya

var fruits= Object.fromEntries([
    ['chiku', 20],
    ['apple', 30],
    ['mango', 100]
]);
console.log(fruits);