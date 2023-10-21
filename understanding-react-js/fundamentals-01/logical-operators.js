console.log('Logical Operators');
console.log('----------------- AND OPERATOR ----------------')
const isAdult = false;
const hasLicense = true;

const canDrive = isAdult && hasLicense;
console.log('canDrive:', canDrive);


console.log('----------------- OR OPERATOR ----------------')
const isStudent = false;
const hasJob = false;

const canApplyForLoan = isStudent || hasJob || canDrive;

console.log('canApplyForLoan:', canApplyForLoan);

console.log('----------------- NOT OPERATOR ----------------')
const isNotAdult = !isAdult;
console.log('isNotAdult:', isNotAdult);