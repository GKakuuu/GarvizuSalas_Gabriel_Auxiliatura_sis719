function createUser(name: string, ci: string, email: string) {
    return {
        name: name,
        ci: ci,
        email: email
    };
}

const user = createUser("Gabriel Garvizu", "8638297", "gabu.garvi@gmail.com");
console.log(user);