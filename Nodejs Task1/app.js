const one = 1;
const two = 2;

let args = process.argv.slice(two);
// args = args.slice(2,args.length)
let arr=args.slice(two,args.length).map(Number);

function calculate()
{
    checkValidInput();
    let operation = args.at(one);
    switch(operation)
    {
        case 'addition':
            add();
            break; 
        case 'subtraction':
            sub();
            break;
        case 'multiply':
            mult();
            break;     
        case 'division':
            div();
            break;   
        default:
            console.log("Invalid operation chosen"); 
    }
}

function checkValidInput() {
    if (arr.length>0) {
        arr.forEach((value) => {
        
        if (isNaN(value)) {
          console.log("Error: Please provide valid number to perform the given operation");
          return
        }
      });
    }
    else
    {
        console.log("Error: Please provide at least 2 arguments");
        return
    }
}

function add()
{
    console.log("Performing addition");
    let sum =  arr.reduce((a, b) => (a + b));
    setTimeout(() => {console.log(sum);}, 1000);
}
function mult()
{
    console.log("Performing Multiplication");
    let prod =  arr.reduce((a, b) => (a * b));
    setTimeout(() => {console.log(prod);}, 1000);
}
function sub()
{
    if(arr.length!=2)
    {
        console.error(
        `Error in input!!\nEnter only two numbers for subtraction\n`);
    }
    else
    {
    console.log("Performing Subtraction");
    let diff = arr.reduce((a,b) => (a-b));
    setTimeout(() => {console.log(diff);}, 1000);
    }
}
function div()
{
    if(arr.length!=2)
    {
        console.error(
        `Error in input!!\nEnter only two numbers for Division\n`);
    }
    else
    {
    console.log("Performing Divison");
    let quotient = arr.reduce((a,b) => (a/b));
    setTimeout(() => {console.log(quotient);}, 1000);
    }
}

calculate();
