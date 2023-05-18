

let log = function(a, b, ...rest){
    console.log(a, b, rest);
}

log("basic", "base", "usage", "useful");

function calcOrDouble(num, basis = 3){
    //basis = basis || 2;
    console.log(num * basis);
}

//calcOrDouble(4, 5);
calcOrDouble(4);