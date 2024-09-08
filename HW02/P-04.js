function createUser(name, ci, email) {
    return {
        name: name,
        ci: ci,
        email: email
    };
}
var user = createUser("Gabriel Garvizu", "8638297", "gabu.garvi@gmail.com");
console.log(user);
