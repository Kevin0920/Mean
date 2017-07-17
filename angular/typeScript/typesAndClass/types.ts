
MyNode = (function () {
    function MyNode(val) {
        this.val = 0;
        this.val = val;
    }
    MyNode.prototype.doSomething = function () {
        this._priv = 10;
    };
    return MyNode;
}());
myNodeInstnace = new MyNode(1);
console.log(myNodeInstnace.val);

function myFunction() {
    console.log("Hello World");
    return;
}


let myNum: number = 5;
let myString: string = "Hello Universe";
let myArr: number[]=[1,2,3,4];
let myObj: {name: string;} = {name: "Bill"};
let anythingVariable: any = 'Hey';
let anythingVaraible: any = 25;
let arrayOne: Array<boolean> = [true, false, true, true];
let arrayTwo: any = [1, 'abc', true, 2];
const myObj = {
    x:5,
    y:10
};
function sendingErrors(): never{
    throw new Error('Error message');
}

function myFunction(): void{
    console.log('Hello World');
    return;
}



class MyNode {
    val: number;

    constructor(valueP: number, ){
        this.val = 0;
    }
    doSomethingFun(){
        this._priv = 10;
    }
}
let firstSLNode = new MyNode(1)
console.log(myNodeinstace.val);


