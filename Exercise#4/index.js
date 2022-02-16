// [1] Promise
// [a]

function helloWorld() {
    return new Promise((resolve)=>{
        resolve("Hello World!")
        setTimeout(helloWorld,2000);
    })
}
// [b]
const message = async () => {
    const msg =  await helloWorld();
    console.log(msg);  
}
// [c]
message();

// [2] Fetch
// [a] , [b], [c], [d], [e]
function ambilDataUser(){
    fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(users => console.log(users.data))
}
ambilDataUser();

// [3] Async Await
const ambilDataUser2 = async () => {
    try{
        const response = await fetch('https://reqres.in/api/users')
        const pengguna = await response.json();
        console.log(pengguna.data)
    }catch(error){
        console.log(error)
    }
}
ambilDataUser2();

// [4] Class
class Orang {
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }
    bekerja(){
        return `${this.nama} sedang bekerja seperti biasa`
    }
}

const user1 = new Orang ("Matthew Muju",21);
console.log(user1.bekerja());

// [5] Inheritance
class Orang1 {
    constructor(nama, umur){
        this.nama = nama;
        this.umur = umur;
    }
    tidur(){
        return `${this.nama} sedang tidur`
    }
    makan(){
        return `${this.nama} sedang makan`
    }
}

class Pelajar extends Orang1{
    constructor(nama, umur, namaSekolah){
        super(nama, umur);
        this.namaSekolah = namaSekolah;
    }
    belajar(){
        return `${this.nama} belajar di ${this.namaSekolah}`
    }
}

const user = new Pelajar ("John",17,"Universitas Klabat");
console.log(user);