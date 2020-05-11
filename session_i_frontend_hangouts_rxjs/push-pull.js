// Push Pull Mechanisms

// Pull

// Iterable Collections - collections that want to expose data

// Arrays
// TypedArrays
// Strings
// Map
// Sets

const iterable = {
    [Symbol.iterator](){
        let i = 0;
        return {
            next(){
                i++;
                switch(i){
                    case 1:
                        return { value: i, done: false }
                    case 2:
                        return { value: i, done: false }
                    default:
                        return { value: undefined, done: true };
                }
            }
        }
    }
}

const iterator = iterable[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

const arr = ['a', 'b', 'c', 'd', 'e'];

const iter = arr[Symbol.iterator]();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());


// Push Mechanism

// Producer is in control

// Examples

// DOM Events
// Web Sockets
// Node Streams
// JQuery Events
// XmlHttpRequest


// Observer


// Subscription to event
document.addEventListener('mousemove', (e) => {
    console.log(e);
});

document.removeEventListener('mousemove', () => {
    
})


