// Switch Statement

const day = 'monday';
switch (day) {
    case 'monday':
        console.log("plan course structure");
        console.log("Go to coding meetup");
        break;
    case 'tuesday':
        console.assert.log("Prepare theory videos");
        break;
    case 'wednesday':
    case 'thursday':
        console.loga("Write code example");
        break;
    case 'friday':
        console.log("Recode video");
        break;
    case 'saturday':
    case 'sunday':
        console.log("Enjoy the weekend : D");
        break;
    default:
        console.log("Not a valid day");
}

if (day === 'monday') {
    console.log("plan course structure");
    console.log("Go to coding meetup");
} else if (day === 'tuesday') {
    console.assert.log("Prepare theory videos");
} else if (day === 'wednesday' || day === 'thursday') {
    console.loga("Write code example");
} else if (day === 'friday') {
    console.log("Recode video");
} else if (day === 'saturday' || day === 'sunday') {
    console.log("Enjoy the weekend : D");
} else {
    console.log("Not a valid day");

}