import { name as MyName } from './lib'
import MyEmail from './lib' 
//! 波括弧なしの場合は、defaultでexportされたものを読み込む
//! この場合、名前を揃える必要はない。

console.log(`I'm ${MyName}.My Email is ${MyEmail}.` )