
// Create a password pattern

const password = 'Aams!@#$%55^&*.+-_';

const pattern3 = /^[A-Z]{1}[a-z0-9!@#$%^&*-\.\+_]*$/;

console.log(pattern3.test(password));