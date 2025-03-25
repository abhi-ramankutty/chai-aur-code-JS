const user = {
    name: "Kira",
    age: 17,

    welcomeMsg: function () {
        console.log(`Hello ${this.name}, Welcome!`);
        console.log(this);
    },
};

const user2 = {
    name: "Shinigami",
};

user.welcomeMsg();
// user.name = "Light Yagami";
// user.welcomeMsg();

console.log(this); // this referes to a empty object in node-env. In browser, this refers to Window-obj

console.log("******************* arrow fun *******************");
function chaiOne() {
    let userName = "Shinigami";
    console.log("chaiOne", this);
}

const chaiTwo = function() {
    console.log("chaiTwo", this);
}

const chaiThree = () => {
    console.log("chaiThree", this);
}



chaiOne();
chaiTwo();
chaiThree();
