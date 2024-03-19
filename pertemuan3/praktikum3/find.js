const users = [
    {
        name: "Azka",
        age: 18,
    },
    {
        name: "Fikri",
        age: 25,
    },
    {
        name: "Mamad",
        age: 30,
    },
    
    
];

const foundUser = users.find(function(user) {
    return user.age > 21;
});

console.log (foundUser);