const emailList = [
    "javascript@gmail.com", 
    "abc.com",
    "mydomain.com",
    "Python@hotmail.com",
    "test",
    "anotherEmail@kenkoo.com",
    "typescript@gmail.com",
    "mailOfPikachu@@@@@",
    "elta@kkk.co",
    "user123.....",
    "wrongEmail@gmail.com",
    "kattis.go",
    "java@gamil.com",
  ];

function isValidEmail(email: string): boolean {
    return email.includes('@') && email.endsWith('.com');
}
  
const validEmails = emailList.filter(isValidEmail);
  
console.log(validEmails);