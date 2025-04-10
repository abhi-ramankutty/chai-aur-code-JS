function setUserName(userName) {
    this.userName = userName;
    console.log('setUserName called');
}

function createUser(userName, email, password){
    // setUserName(userName) // setUserName is called, but createUser does not have this.userName
    setUserName.call(this, userName)
    this.email = email;
    this.password = password;
}

const kira = new createUser('Kira', 'kira@deathnote.com', '123')

console.log(kira)