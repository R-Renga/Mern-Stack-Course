function z (){
    let a = 200
    function y(){
        let b = 10;
        function x(){
            let c = 56;
            console.log(a,b,c);
        }
        x()
    }
    y()
}

z()


//error
function outer(){
    function inner(){
        console.log(a);
    }
    var c = 90;
    return inner();
}

// var close = outer();
// close()


function outside(){
    function inside(){
        console.log(a);
    }
    let a = 90;
    inside();
}

outside()


let c = 100;

function outest(){
    function innerr(){
        console.log(c);
    }
    innerr()
}
c = 1000;
outest()

function counter(){
    let count = 0;
    return function (){
        count++
        return count;
    }
}

const conting = counter();
conting()


function outest(){
  let a = 100;
  function outer(){
    let b = 50;
      function child(){
        let c = 30;
        return a+b+c
      }
      return child()
  }
  return outer()

}

console.log(outest())


function createCounter() {
  let count = 0; // private variable

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3



