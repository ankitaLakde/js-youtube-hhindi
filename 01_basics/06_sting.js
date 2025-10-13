const name="ankita"
const repoCount=20
// old sysntax
console.log(name + repoCount + " value");
// string interpolution
// console.log(`Hi my name is ${name} and my repo count is ${repoCount}`);

// another way to decleared string
const names=new String('ankiaaa');
// console.log(names);
// console.log(names[0]);
// console.log(names[3]);

// console.log(names.__proto__);

// console.log(names.length);
// console.log(names.toUpperCases);

// console.log(names.charAt(3));

// console.log(names.indexOf('i'));

const newString=names.substring(0,3)
// console.log(newString);

// negative value we can add
const anotherSting= names.slice(-9,2)
// console.log(anotherSting);

// space value removed using trim
const NewOnestring= "   ankita.  "
// console.log(NewOnestring);
// console.log(NewOnestring.trim());


// url replace
const demourl="https:anks.com/ankita%20lakde"
// console.log(demourl.replace('%20','-'))
// console.log(demourl.includes('sunder'));
// console.log(demourl.length);

const gameoft="ssadads-dsdsdsds-ddcxcc"
// console.log(gameoft.split('-'))


let text="heloo mrs Bin";
console.log(text.lastIndexOf(text));

let str2 ="Javascript"
console.log(str2.startsWith("demo"));
console.log(str2.endsWith("pt"));


let str="Javascript";
console.log(str.slice(0,4));
console.log("JavaScript".substr(4, 6));

let strr="ookkokkoddd";
console.log(strr.toUpperCase());
console.log(strr.toLowerCase());

let texst="  dasdas    d xcsds";
console.log(texst.trim());
let textn = "  dasdas    d xcsds";
let result = textn.trim().replace(/\s+/g, " ");
console.log(result); // "dasdas d xcsds"

let stra="i like apple"
console.log(stra.replace("apple","mangos"));

let a="sdsds"
let b="dscxzcfc"
console.log(a.concat(" ",b));

console.log("hi ".repeat(4));
console.log("klak008ss".at(-3));

let you="i m very good girl"
console.log(you.lastIndexOf("r"));


let r="r rabbit"
console.log(r.startsWith("kii"));//true or false
let i="babyhug"
console.log(i.endsWith("hug"));

let o=" qwertyui ytrc ppp"
console.log(o.trimStart());

let pads="a222"
console.log(pads.padStart(7,'rr'));
console.log(pads.padEnd(9,'QQ'));

let cstr=3444
console.log(cstr.toString());

console.log(typeof(cstr.toString()));




