// -- MODULE --
// [1] Export & Import
import {welcome, goodbye} from '/Module/module.js';

welcome('Matthew'); // output : Welcome to Mobile Application Development class, Matthew!
goodbye('Matthew'); // output : Goodbye, Matthew! See You Next Week :)

// [2] Export as & Import as
import {welcome as hi, goodbye as bye} from '/Module/module.js';

hi('Matthew'); // output : Welcome to Mobile Application Development class, Matthew!
bye('Matthew'); // output : Goodbye, Matthew! See You Next Week :)

// [3] Export Default
import newPets from '/Module/module.js';
console.log(newPets);

// -- ASYNCRONOUS JAVASCRIPT --
// [1] Example Asyncronous using setTimeout();
function hello() {
    console.log("Hello Matthew");
}
let myHello = setTimeout(hello, 3000); //output : Hello Matthew --> setelah 3detik baru ditampilkan

// [2] Example using "Promise"
let done = true

const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'Selesai'
    resolve(workDone) //ketika done = true , maka resolve yang akan ditampilkan
  } else {
    const why = 'Belum Selesai'
    reject(why) //ketika done=false , maka reject yang akan ditampilkan
  }
})

console.log(isItDoneYet);

// [3] Example Promise using "then()"
// returns a promise
let testValue = new Promise(function (resolve, reject) {
    resolve("Promise Resolved");
  });
  
  // dieksekusi ketika promise berhasil di resolve
  
  testValue
    .then(function successValue(result) {
      console.log(result);
    })
  
    .then(function successValue1() {
      console.log("Promise Resolved 2"); 

      // dapat menggunakan then berulang-ulang untuk mengeksekusi promise dan dapat assign value promise yang baru
    });

// [4] Example Promise using Async/ Await
// [4.1] async adalah fungsi yang selalu mengembalikan promise , penempatan sebelum fungsi
async function testAsync() {
  return 1;
}
console.log(testAsync());
// [4.2] await membuat javascript menunggu sampai promise diselesaikan , lalu mengembalikan hasilnya
// await harus berada dalam await function

async function testAwait() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Berhasil"), 4000) // akan dieksekusi ketika 4detik berlalu
  });

  let result = await promise; // menunggu sampai promise diselesaikan

  console.log(result); // "Berhasil"
}

testAwait();

// -- CLASS JAVASCRIPT
// Example [1]
class Subject {

  constructor(name) {
    this.name = name;
  }
  subjectValue() {
    console.log(this.name);
  }

}
// Penggunaan
let subject = new Subject("Mobile Development Application");
subject.subjectValue();

// Example [2]
// pembuatan class
class Music {
  constructor(genre, title, artist) {
    this.genre = genre;
    this.title = title;
    this.artist = artist;
  }
}

// pembuatan object
const music1 = new Music("EDM", "Fotress", "Illenium");
const music2 = new Music("Pop", "Let Me Go", "Avril Lavigne");
const music3 = new Music("Metal", "Breaking Down", "I Prevail");

console.log(music1); // Music {genre: 'EDM', title: 'Fotress', artist: 'Illenium'}
console.log(music2); // Music {genre: 'Pop', title: 'Let Me Go', artist: 'Avril Lavigne'}
console.log(music3); // Music {genre: 'Metal', title: 'Breaking Down', artist: 'I Prevail'}