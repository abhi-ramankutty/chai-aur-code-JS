let myName = 'Shinigami     ';

console.log(myName.length);
console.log(myName.trim().length);

console.log('-----------------------------');

let myHeros = ['Thor', 'Spiderman'];
let herosPower = {
    Thor: 'Hammer',
    Spiderman: 'Sling web',

    getSpiderPower: function () {
        console.log(`Spidey power is ${this.Spiderman}`);
    },
};

herosPower.getSpiderPower();

Object.prototype.shinigami = function (str) {
    console.log('Shinigami is present everywhere :', str);
};

// herosPower.shinigami('herosPower')
// myHeros.shinigami('myHeros')

console.log('-----------------------------');

Array.prototype.kira = function (str) {
    console.log(`${str} is a KIRA`)
}
myHeros.kira('myHeros');

/** 
 * This does not work since this is an object and the function injected is in the prototype of an Array
 */
// herosPower.kira('herosPower');

console.log('-----------------------------');

String.prototype.trueLength = function () {
    console.log(`${this}`)
    console.log(`True length of ${this} is ${this.trim().length}`)
}
myName.trueLength()
'LightYagami'.trueLength()


console.log('-----------------------------');

/** Inheritance */

const user= {
    name: 'Shinigami',
    email: 'Shinigami@google.com'
}
const teacher = {
    teacherMakeVideo: true
}

const teachingSupport = {
    isTeachingSupportAvailable: false
}

const TASupport = {
    makeAssignment: 'Make JS assignment',
    fullTime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = user;

console.log(teacher.name)

console.log('-----------------------------');

Object.setPrototypeOf(teachingSupport, teacher) // teachingSupport will inherit everything from teacher
console.log(teachingSupport.teacherMakeVideo)
