// 1st problem solving starts from here
function anaToVori(ana) {
    // input validation starts 
    if(typeof ana != "number"){
        return "please give a number"
    }
    // input validation ends here 
    const vori = ana / 16;
    return vori;
}
let inputAna = 42;
var vori = anaToVori(inputAna);
console.log(vori)
// 1st problem solving ends from here


// 2nd problem solving starts from here
function pandaCost(singaraQuantity,shomuchaQuantity,jelabiQuantity) {
      // input validation starts 
      if(typeof singaraQuantity != "number"){
        return "please give a number"
    }
    // input validation ends here 
    const perSingara = 7;
    const perShomucha = 10;
    const perJelabi = 15;
    // calculation of khabar
    const singaraAllCost = singaraQuantity * perSingara;
    const shomuchaAllCost = shomuchaQuantity * perShomucha;
    const jelabiAllCost = jelabiQuantity * perJelabi;
    // plusing all calculation of khabar
    const totalCost = singaraAllCost + shomuchaAllCost + jelabiAllCost;
    return totalCost;
    
}
let firstBill = pandaCost(1,2,3);
console.log(firstBill)
// 2nd problem solving ends from here


// 3rd problem solving starts from here
function picnicBudget(personNums) {
        // input validation starts 
    if(typeof personNums != "number"){
        return "please give a number"
    }
    // input validation ends here 

    const first100PersonsBill = 5000;
    const second100PersonsBill = 4000;
    const lastRestPersonsBill = 3000;
    

    if (personNums <= 100) {
        const count = personNums * first100PersonsBill;
        return count;
    }

    else if (personNums <= 200) {
        const firstDensePersons = 100 * first100PersonsBill;
        const restPersons = personNums - 100;
        const secondDensePersons = restPersons * second100PersonsBill;
        const totalPrice = firstDensePersons + secondDensePersons;
        return totalPrice;
    }

    else{
        const firstDensePersons = 100 * first100PersonsBill;
        const secondDensePersons = 100 * second100PersonsBill;
        const restPersons = personNums - 200;
        const restDensePersons = restPersons * lastRestPersonsBill;
        const totalPrice = firstDensePersons + secondDensePersons + restDensePersons;
        return totalPrice;

    }
}
let totalBill = picnicBudget(199);
console.log(totalBill)
// 3rd problem solving ends from here



// 4rth problem solving starts from here
let namesOfFriends = ["akash","tamanna","ahu","himu","sabina","hamid"];
 
function oddFriend(namesOfFriends) {
// input validation starts 
if(typeof namesOfFriends[0] != "string"){
    return "please give a string"
}
// input validation ends here 
    let oddContainer = [] ;
    for (let i = 0; i < namesOfFriends.length; i++) {
       
        const element = namesOfFriends[i];
        if (namesOfFriends[i].length % 2 != 0) {
            oddContainer.push(element)
        }
    }
    return oddContainer;
}
const oddContainerNames = oddFriend(namesOfFriends)
console.log(oddContainerNames);
// 4rth problem solving ends from here