const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

console.log(descriptor);
console.log('------------------');

const chai = {
    name: 'Ginger chai',
    price: 250,
    isAvailable: true,
};

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, 'price'));
Object.defineProperty(chai, 'price', {
    value: 250,
    writable: false,
    configurable: false,
    enumerable: false,
});

chai.price = 1;

console.log(chai);
console.log(chai.price);

/**
 * In JavaScript, object properties have certain attributes that define their behavior.
 * These attributes are writable, configurable, and enumerable, and they play a crucial role in how you interact with and modify object properties.
 * 
 * Writable:
 * - This attribute determines whether the value of a property can be changed after the object is created.
 * 
 * Configurable:
 * - This attribute controls whether you can delete the property or change its other attributes (writable, enumerable) after the object is created.
 * 
 * Enumerable:
 * - This attribute determines whether a property is included when you iterate over an object using a for...in loop or methods like Object.keys.
 */