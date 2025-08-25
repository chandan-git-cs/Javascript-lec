const massMark = 78;
const heightMark = 1.69;
const massJoin = 92;
const heightJohn = 1.95;

// massMark = 78  / heightMark = 1.69**2
// 78 /  2.8560999999999996 = 27.309968138370508
const BMIMark = massMark / heightMark ** 2;

// massJoin = 92 / (heightJohn = 1.95 * heightJohn = 1.95 )
//  92 / (3.8024999999999998) = 24.194608809993426
const BMIJohn = massJoin / (heightJohn * heightJohn)

// true
const markHigherBMI = BMIMark > BMIJohn; 

// 27.309968138370508 ,  24.194608809993426 , true
console.log( BMIMark , BMIJohn , markHigherBMI );

if(BMIMark > BMIJohn){
    console.log(`Mark's BMi ${BMIMark} is higher then John's ${BMIJohn} !`);
}else{
    console.log(`John's BMi ${BMIJohn} is higher then mark's ${BMIMark} !`);
    {mark}
}