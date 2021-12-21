//  Create an email pattern 

const email = 'masudurrtr542.!@#$%^&*-+_@gmail-_.trss.com';

const pattern = /^[a-z0-9!-@#$%^&*_\.\+]*@[a-z-_\.]*\.[a-z]{2,3}$/;

console.log(pattern.test(email));
