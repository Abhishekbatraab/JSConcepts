// let arr = ["Abhishek", "Rahul"];
let object = {
    name: "Abhishek",
    city: "Delhi",
    getIntro: function(){
        console.log(this.name + " from " + this.city);
    }
}

let object2 = {
    name: "Aditya"
}

object2.__proto__= object;
// function fun(){
//     //
// }