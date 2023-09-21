const firstName = 'John'; // camelCase, PascalCase, snake_case, kebab-case
const lastName = 'Doe';

const fullName = lastName + " " + firstName;
console.log('fullName: ', fullName);

const send = "send";
const gasoline = "gasoline glass mysterious";
const random = "make personal bad left suddenly"
// const longDescription = "salt send greater escape metal play fierce bread solve gasoline glass mysterious entire method make personal bad left suddenly carbon lay said leather forth"

const longDescription = "salt " + send + " greater escape metal play fierce bread solve " + gasoline + " entire method " + random + " carbon lay said leather forth";
console.log('longDescription: ', longDescription);

console.log('----- String Template Literals -----')
const longDescription02 = `salt ${send} greater escape metal play fierce bread solve ${gasoline} entire method ${random} carbon lay said leather forth`; // backtick, dollar sign, curly braces
console.log('longDescription02: ', longDescription02);

