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




{
const massMark = 95;
const heightMark = 1.88;
const massJoin = 85;
const heightJohn = 1.76;

// massMark = 95  / heightMark = 1.88**2
// 95 /  3.5343999999999998 = 26.87867813490267
const BMIMark = massMark / heightMark ** 2;

// massJoin = 85 / (heightJohn = 1.76 * heightJohn = 1.76 )
//  85 / (3.0976) = 27.44059917355372
const BMIJohn = massJoin / (heightJohn * heightJohn)

// false
const markHigherBMI = BMIMark > BMIJohn; 

//26.87867813490267,  27.44059917355372 , false
console.log( BMIMark , BMIJohn , markHigherBMI );
}