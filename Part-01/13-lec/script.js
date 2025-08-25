console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Johan'));
console.log(Boolean({}));
console.log(Boolean(''));


const money = 0;
if(money){
    console.log("Don't spend it all : ");
}else{
    console.log('You should get a job!');
}


let height = 10;
if(height){
    console.log('YAY! height is defined');
}else{
    console.log('Height is UNDEFINDE');
}