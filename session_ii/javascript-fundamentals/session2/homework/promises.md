- write a function that receives an array of promises and returns a new promise that
  is fulfilled if any of the promises in the array is fulfilled and rejected if all the promises
  in the array are rejected. The fulfillment value of the resulted promise must be the fulfillment
  value of the first promise in the array that is fulfilled (the quickest fulfillment value).
  The rejection value must be an array that contains all the rejections of the promises in the array,
  in the same original order of their corresponding promises in the original array.
