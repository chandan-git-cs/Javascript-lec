const age = 18;
if(age === 18 ){
    console.log('You just become an adult D: (strict)');
}
if(age == 18 ){
    console.log('You just become an adult D: (loose)');
}

const favourite = Number(prompt("What your favourite number..? : "));
console.log(favourite);
console.log(typeof  favourite);

if(favourite === 23 ){
    console.log('Cool! 23 is amazaing number');
}else if(favourite === 7){
    console.log("7 is also a cool number");
}else if (favourite === 9){
    console.log("9 is also a cool number");
}else{
    console.log('Number is not 23 or 7 or 9')
}

if(favourite !== 23){
    console.log('Why not 23..?');
}