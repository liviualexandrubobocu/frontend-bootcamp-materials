const { Observable, interval } = require('rxjs');
const { map, take, mergeAll, concatAll, switchAll } = require('rxjs/operators');


// const stream1 = Observable.create(observer => {
//     setInterval(() => observer.next(1), 100);
// });

// const subscription = stream1.subscribe(console.log);

// setTimeout(() => subscription.unsubscribe(), 4000);

const stream2 = interval(100).pipe(
    map(a => 1),
    take(10)
);
const subscription2 = stream2.subscribe(console.log);

const stream3 = interval(100).pipe(
    map(a => 2),
    take(10)
)
const subscription3 = stream3.subscribe(console.log);

const mergedStream = interval(100).pipe(
    take(2),
    map(i => [stream2, stream3][i])
)

mergedStream.pipe(
    // concatAll(),
    // mergeAll(),
    switchAll()
).subscribe(val => console.log(`Merged Stream: ${val}`));



