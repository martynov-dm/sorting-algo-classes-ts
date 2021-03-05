import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

// const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

const charctersCollection = new CharactersCollection("Xaaayb");
const sorter = new Sorter(charctersCollection);
sorter.sort();
console.log(charctersCollection.data);
