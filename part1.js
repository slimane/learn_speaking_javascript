/*
 * difference between undefined and null
 *  undefined is uninitialized variable
 *      * var foo; -> undefined
 *      * function f(x) {return x}; f() -> undefined
 *      * var obj = {};obj.foo -> undefined
 *  null means no object
 *
 * null and undefined check
 * if (variable === null || variable === undefined)
*/

/* falsely
 * false
 * 0
 * Nan
 * undefined
 * null
 * ''
*/


// object type check
// typeof :: a -> String
var a1 = typeof 'a'; //-> String
var a2 = typeof 1; //-> Number
var a3 = typeof true; //-> Boolean
var a4 = typeof null; // -> object コレはバグだけど後方互換性のため直さない

/* instanceof
 * instanceof :: a -> Constr -> Bool
 */
var b1 = 'A' instanceof String; // -> true
var b2 = 1 instanceof Number; // -> true
var b3 = 'a' instanceof Number; // -> false
var b4 = null instanceof Object; // -> false(上記のtypeofの理由でfalse)




/* Boolean
Boolean :: a ->  Bool
*/
var c1 = Boolean(undefined); // false
var c2 = Boolean(NaN); // false
var c3 = Boolean(0); // false
var c4 = Boolean(null); // false
var c5 = Boolean(''); // false
var c6 = Boolean('a'); // true

/* Binallly Logical Operator */
/* a && b = if !a then a else b;
 * a || b = if a then a else b;
*/
var d0 = function(){return 'called';};
var d1 = false && d0(); // false
var d2 = true && d0(); // called
var d3 = true || 'a'; // true
var d3 = false || 'a'; // 'a'

// Boolean Operator
//  ==, != ゆるい
//   ===, !== きびしい




// Number
// all number in javascript are floating-point
var e1 = 1 === 1.0; // -> true
// NaN : 'not a number'
// Number :: String -> Number
var e2 = Number('5'); // -> 5
var e3 = Number('x'); // -> NaN
// Infinity is large then any other numbers;
// -Infinity is smaller then any other numbers;
var e4 = +'5'; // -> 5

// Math module
// Math.abs :: Number -> Number
Math.abs(-5); // -> 5
// Math.pow :: Number -> Number -> Number
Math.pow(3, 2); // 3**2 -> 9
// Math.max :: [Number] -> Number
Math.max(5, 2, 3, 4, 100); // -> 100
// Math.round :: Integral a => Number -> Number -> a
Math.round(1.9); // -> 2
// Math.PI :: Number
Math.PI(); // -> 3.1415..
// Math.cos :: Number -> Number
Math.cos(Math.Pi); // -> -1




// String
var f1 = 'abc'[-1]; // -> ehundefined
var f1 = 'abc'[1]; // -> b

//method
// slice :: [a] -> Number -> Number -> [a]
'abc'.slice(1, 2); // -> 'b'
'abc'.slice(1, 3); // -> 'bc'
'abc'.slice(0, 2); // -> 'ab'
// indexOf :: [a] -> Number
'abc'.indexOf('b'); // -> 2
// toUpperCase :: String -> String
'abc'.toUpperCase(); // -> 'ABC'
// trim :: String -> String
'  abc  \t'.trim(); // -> 'abc'




// Array like object
// convert to Array
var _A = (function toArray(x){
    return Array.prototype.slice.call(x);
} /* ArrayLike a => a -> [b]*/)




// Arrays
// in :: a -> [a] -> Bool
var j1 = [1, 2, 3, 4, 5]
5 in j1; // -> true
6 in j1; // -> false
// push :: [a] -> a -> [a]
j1.push(10); //-> [1, 2, 3, 4, 5, 10]
// push :: [a] -> a
j1.pop(); //-> [1, 2, 3, 4]
// shift :: [a] -> [a]
j1.shift(); //-> [2, 3, 4, 5]
// unshift :: [a] -> [a] -> [a]
j1.unshift(500, 600, 7000); //-> [500, 600, 700, 1, 2, 3, 4, 5]
// join :: [a] -> String -> String
// join s c = foldl' (++ c) "" s
j1.join(); // -> "1,2,3,4,5"
j1.join('-'); // -> "1-2-3-4-5"

j1.forEach(
    function (value, index){
        //console.log('value: ' + value);
        //console.log('index: ' + index);
    });
j1.map(function(x){return x * x;}); // -> [1, 4, 9, 16, 25]




// Regular Expression
var k1 = /^\w+$/
// test :: RegExp -> String -> Bool
k1.test('abc'); // -> true
k1.test('1abc'); // -> true
k1.test('"abc'); // -> false
// exec :: RegExp -> String -> [String]
k1.exec('abc-def') // -> ['abc', 'def']
// replace :: String -> RegExp -> String -> String
'-123-456'.replace(/\D+(\d+)/g, '($1)'); // (123)(456)







// Statement
// if
if (1 === 1){
    // do something
}else if(1){
    //do something
}

// switch
// fall throug
switch('A'){
    case 'A':
        break;
    case 'B':
        console.log('B');
    default:
        console.log('default');
}




// Function
var g1 = function() {return arguments;};// has no named argument
var g2 = function(n) {return arguments;}; // has one named argument
g1(1, 2, 3, 4, 5).length; //  -> 5
g2(1, 2, 3, 4, 5).length; //  -> 5

var g3 = function(x, y) { return x * y;};
g3(3, 4, 5); //  addtional parameters will be ignored
g3(3); // missing parameter will get the value the undefined

// tips
// optional parameters
var g4 = function(x, y){
    x = x || 0; // if x then x else 0
    y = y || 0;
    return [x, y];
}
//  endforcing an Arirty
var g5 = function(x, y){
    if ( arguments.length !== 2 ){
        throw new Error('Arguments Error');
    }
};

// function inside a method
// bind method
var g6 = {
    name: 'john'
  , details: function(){
        return 'name: ' + this.name;
    }
}
var g6_1 = g6.details();
/*
    console.log(g6_1()); // -> details内のNameが未定義でerror
    */
var g6_2 = g6.details.bind(g6); // -> g6_2にg6のメンバであるnameとdetailsが適用される
var g6_3_0 = {name: 'kay', details: (function(){})};
var g6_3 = g6.details.bind(g6_3_0); // -> g6_3にg6_3_0に適用する(function(){return 'name: kay'})


/* thisの動作 */
var g7_1 = {
        name: 'Jhon'
      , friends: ['bob', 'george']
      , pair: (function() {
            this.friends.forEach(function(friend){
                    /* this.nameは参照できない
                       thisの範囲の一つ上のブロックへの参照を提供しているため、さらに上のブロックであるnameは参照できない
                    */
                    console.log(friend + " is " + this.name + "'s friend");})})};
//console.log(g7_1.pair.bind(g7_1)());

// 一時変数に参照を保存する
var g7_2 = {
        name: 'Jhon'
      , friends: ['bob', 'george']
      , pair: (function() {
            // thisでnameに参照出来るタイミングでthatに参照を束縛
            var that = this;
            this.name
            this.friends.forEach(function(friend){
                    console.log(friend + " is " + that.name + "'s friend");})})};
// console.log(g7_2.pair.bind(g7_2)());

// forEachメソッドにthisを第2引数として適用
var g7_3 = {
        name: 'Jhon'
      , friends: ['bob', 'george']
      , pair: (function() {
            // thisでnameに参照出来るタイミングでthatに参照を束縛
            this.friends.forEach(function(friend){
                    console.log(friend + " is " + this.name + "'s friend");}, this)
                })};
//console.log(g7_3.pair.bind(g7_3)());


// inheritance
function Point(x, y){
    this.x = x;
    this.y = y;
}
// method
Point.prototype.dist = function(){
    return Math.sqrt(this.x * this.x + this.y + this.y);
}
var g8_1 = new Point(5, 4);
//console.log(g8_1.dist());







// error handling
var h = function(){
    try {
        throw new Error('raise error ');
    }catch(e){
        console.log(e);
    }
}







// Options
// strict mode
// enable more warnings and mistakes javascript a cleaner language
// 'use strict';
