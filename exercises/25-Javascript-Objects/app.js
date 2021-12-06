var person = {
    name: "John",                //String
    lastname: "Doe",
    age: 35,                     //Number
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17], //Array
    significant_other: person2   //Object, yes the same variable/object defined after
};

var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};

var family = {
    lastname: "Doe",
    members: [person, person2]   //Array of objects, don't forget to add Jimmy
};

var person3 = {
  firstname: "Jimmy",
   lastname: "Doe",
     age: 13,
    gender: "male",
    lucky_numbers: [ 1, 2, 3, 4],
   significant_other: null
 }


 function addAllFamilyLuckyNumbers() {
  var sumOfAllLuckyNumbers = 0
  for (let i = 0; i < family.members.length; i++) {
     for (let j = 0; j < family.members[i].lucky_numbers.length; j++) {
         sumOfAllLuckyNumbers+=family.members[i].lucky_numbers[j]
      }
  }
  return sumOfAllLuckyNumbers;
 }

 
// function addAllFamilyLuckyNumbers(anArray) {
//     var sumOfAllLuckyNumbers = 0
//     for (let member of anArray) {
//         console.log(member)
//     for (let number of member.lucky_numbers) {
//         console.log(number)
//         sumOfAllLuckyNumbers+= number
//     }
//     }
//     return sumOfAllLuckyNumbers;
//    }
 
//Enter all your code here:
family.members.push(person3)
person.lucky_numbers[3] = 33
family["name"] = "jimmy"
family["age"] = 13
family["gender"] = 13
family["lucky_numbers"] = [1,2,3,4]
family["significant other"] = null
family.members
console.log(person.lucky_numbers)
console.log(family.name)
//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members)); 