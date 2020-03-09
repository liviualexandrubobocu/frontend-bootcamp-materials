import {arrayOfObjects} from './modules-objects-and-functions.js';

arrayOfObjects.map((obj, i) => {
    console.log(`x-${i}:`, obj.getX());
})