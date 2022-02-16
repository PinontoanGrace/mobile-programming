// ARRAY DESTRUCTURING

//[1,2]
//before destructuring
// let perkenalan = ["Halo", "Nama" , "Saya", "Matt"];
// let sapaan = perkenalan[0];
// let nama = perkenalan[3];

// console.log(sapaan);//Output "Halo"
// console.log(nama);//Output "Matt"

//after destructuring
// let [sapaan, nama] = ["Halo", "Nama" , "Saya", "Matt"];

// console.log(sapaan);//Output "Halo"
// console.log(nama);//Output "Nama"

//[2]
//skipping items in array
// let [sapaan,,,nama] = ["Halo", "Nama" , "Saya", "Matt"];

// console.log(sapaan);//Output "Halo"
// console.log(nama);//Output "Matt"

// let [,sapaan,,nama] = ["Halo", "Nama" , "Saya", "Matt"];

// console.log(sapaan);//Output "Nama"
// console.log(nama);//Output "Matt"


//[3]
//using default values
// let [sapaan = "Haloo", nama= "Matt"] = ["Hay"];

// console.log(sapaan); //Output "Hay"
// console.log(nama); //Output "Matt"

//BONUS -> Swapping values
// let alpha = "Charlie";
// let beta = "Delta";

// [alpha,beta] = [beta,alpha];

// console.log(alpha); //Output "Delta"
// console.log(beta); //Output "Charlie"

//[4]
//REST operator
// let [sapaan,...intro] = ["Halo", "Nama" , "Saya", "Matt"];

// console.log(sapaan);//Output "Halo"
// console.log(intro);//Output "["Nama" , "Saya", "Matt"]"

// OBJECT DESTRUCTURING
//[1]
//before destructuring
// let person = {nama: "Syalom", kelas: "Mobile Dev", hobby: "Coding"};

// let nama = person.nama;
// let kelas = person.kelas;
// let hobby = person.hobby;

// console.log(nama);//"Syalom"
// console.log(kelas);//"Mobile Dev"
// console.log(hobby);//"Coding"

//after destructuring
// let person = {nama: "Syalom", kelas: "Mobile Dev", hobby: "Coding"};

// let {nama, kelas, hobby} = person;

// console.log(nama);//"Syalom"
// console.log(kelas);//"Mobile Dev"
// console.log(hobby);//"Coding"

//[2]
//mengambil sebagian item
// let person = {nama: "Syalom", kelas: "Mobile Dev", hobby: "Coding", umur: 19, cita_cita: "Ingin Kaya"};

// let {nama, umur, cita_cita} = person;

// console.log(nama);//"Syalom"
// console.log(umur);//"19"
// console.log(cita_cita);//"Ingin Kaya"

//[3]
//using default value
// let person = {nama: "Syalom", kelas: "Mobile Dev", hobby: "Coding", umur: 19, cita_cita: "Ingin Kaya"};

// let {nama = "Grace", agama = "Kristen", cita_cita = "Programmer"} = person;

// console.log(nama);//"Syalom"
// console.log(agama); //"Kristen"
// console.log(cita_cita);//"Ingin Kaya"

//[4]
//REST OPERATOR
let person = {nama: "Syalom", kelas: "Mobile Dev", hobby: "Coding", umur: 19, cita_cita: "Ingin Kaya"};

let {nama , kelas , ...lainnya} = person;

console.log(nama);//"Syalom"
console.log(kelas);//"Mobile Dev"
console.log(lainnya); //"{hobby: "Coding", umur: 19, cita_cita: "Ingin Kaya"}"