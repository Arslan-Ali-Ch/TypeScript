var user = {
    name: "Alpha",
    age: 33,
    marks: 88
};
console.log(user.marks + " " + user.name);
var user2 = {
    name: "gemma",
    age: 33,
    checkability: function (alph, beta) {
        return "hello " + alph + " " + beta;
    }
};
console.log(user2.checkability("work well ", " well done"));
