let peoples = ["Greg", "Mary", "Devon", "James"];

// for(let i = 0; i < people.length; i++){
//     console.log(people[i]);
// }

// peoples.forEach(function (people) {
//     console.log(people)
//   });

peoples.shift();
// console.log(peoples);

peoples.pop();
// console.log(peoples);

peoples.unshift("Matt");
// console.log(peoples);

peoples.push("Jeje");
// console.log(peoples);

// for(let i = 0; i < peoples.length; i++){
//         console.log(peoples[i]);
//         if (peoples[i] === "Mary"){
//             break
//         }
//     }

// let newPeople = peoples.slice(1);
// console.log(newPeople);

peoples.splice(2,1,"Elizabeth","Artie");
// console.log(peoples);

let withBob = peoples.concat("Bob");
console.log(withBob);

let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

programming.languages.push("Go");
// console.log(programming);

programming["difficulty"] = 7;
// console.log(programming);

delete programming.jokes;

programming.isFun = true;
// console.log(programming);



programming.languages.map(function(item,index) {
    console.log(`${index}-${item}`);
});
