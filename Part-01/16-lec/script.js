// Logical operator



const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);
console.log(!hasGoodVision);

const shouldDrive = hasDriversLicense && hasGoodVision;

if(shouldDrive){
    console.log("Sarah is able to driver!");
}else{
    console.log("Someone else should drive...");
}

const isTired = true;
console.log(hasDriversLicense || hasGoodVision || isTired);