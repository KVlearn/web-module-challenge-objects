///////////////Menu Items (MVP)///////////////////

const latte = {name: "Cafe Latte", price: 4, category: "Drinks"};
const burger = {name: "Burger", price: 18, category: "Lunch"};
const breakfastBurrito = {name: "Breakfast Burrito", price: 16, category:"Breakfast"};

/* Task 1a: write a function to return more menu items with the same format as the items above. */

function createMenuItem(name, price, category){
 return ({name,price,category});   /* return as object */
}

/* Task 1b: use your function to create 3 more menu items. You may add any items to the menu that you'd like */
const Pasta= createMenuItem("Pesto Pasta",18,"Dinner");
createMenuItem("Macha tea",5,"Drink");
createMenuItem("Mushroom fry",15,"Starter");
console.log('Tas1b:');
console.log (Pasta);
console.log(latte);


/* Task 2: You're having a lunch special! 25% off for teachers and students, 10% off for everyone else. Add a method to your burger object that automatically calculates price given a string as a parameter. 

Your method should accept: 

(1) A string (teacher, student, or public)

and should return a number. 

For example, burger.discount("teacher") would return 13.5 and burger.discount("public") would return 16.2*/
/* Adding a new method 'discount' to the burger object*/
/* Note discount method is actually the price after discount */
burger.discount = function(customerType){
if ((customerType === "teacher") ||(customerType === "students")){
 return (this.price - this.price * (25/100));
} else if (customerType === "public"){
  return this.price - this.price * (10/100);
} else {return(burger.price);
}
}
console.log('Task#2:')
console.log(`Price after Discount for teacher: ${burger.discount("teacher")}`);
console.log(`Price after Discount for students: ${burger.discount("students")}`);
console.log(`Price after Discount for public: ${burger.discount("public")}`);
// console.log(burger.discount("none"));
// console.log(burger.price); 

///////////////Reviews (MVP)///////////////////

const reviews = [{name: "Daniela", rating: 5, feedback:"Beautiful atmosphere and wonderful vegan options!"},
    {name: "Jack", rating: 3, feedback:"A little too hipster for my taste, but the burger was decent, if overpriced"},
    {name: "Miranda", rating: 4, feedback:"fun trivia and cool vibes"},
    {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
    {name: "Brett", rating: 3, feedback: "great selection of snacks and a nice cafe area to get work done during the day."},
    {name: "Julius", rating: 2, feedback: "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it." },
    {name:"Lauren", rating: 4, feedback: "Absolutely love that they have karaoke Fridays! Food and drink selection is okay."},
    {name:"Reyna", rating: 3.5, feedback: ""},
]

/* Task 3: Console.log just Julius' feedback */
console.log("Task#3: ");
function getFeedback(inputArray,inName){
for(i=0;i<inputArray.length;i++){
  /*if name in the parameter matches the array then pick respective feedback*/
  if(inputArray[i].name === inName){
    return(inputArray[i].feedback)
  }
}
}
console.log(getFeedback(reviews,"Julius"));
/* OR */

console.log(reviews[5].feedback);
/* Task 4: Add a new rating with your (fictitious) opinions of the restaurant in the same format as the reviews above. */
/*Note for me ! reviews is an array, so use push to add an item to the end,the 
item has to be an object, so use {} */
console.log('Task#4:');
reviews.push({name:"Kavya", rating: 5.0, feedback: "Fantabulous!"});
console.log(reviews[reviews.length-1]);

/* Task 5: Add the following feedback to Reyna's rating - "this place is chill with really cool people, great for getting work done on weekdays" */

const fbValue="his place is chill with really cool people, great for getting work done on weekdays";
  /* Invoke below function to add feedback to any name in the array */
  function addFeedback(yourArray,inName,yourFeedback){
   for(i=0;i<yourArray.length;i++){
     if(yourArray[i].name === inName){
      /*when array name matches the input name then assign feeback value */
       yourArray[i].feedback = yourFeedback;
     }
   }
 }
 addFeedback(reviews,'Reyna',fbValue);
 console.log('Task5:');
 console.log(reviews);
/*  Task 6: Write a function to return a review based on the index of the review in the array.

  Your function should take two arguments:

(1) an array which holds all of the reviews
(2) a number which is the desired index in the array.

and should return a string in the format `{name} gave the restaurant a {rating}, and their feedback was: {feedback}`
 * 
 * For example, if getReviewByIndex is invoked with reviews and the number 0
 * it will return `Daniela gave the restaurant a 5 star review and their feedback was: Beautiful atmosphere and wonderful vegan options!`
*/

function getReviewByIndex(inputArray, index) {
  return(`${inputArray[index].name} gave the restaurant a ${inputArray[index].rating} star review and their feedback was: ${inputArray[index].feedback}`);
  }
console.log('Task#6:');  
console.log(getReviewByIndex(reviews,0));
/* Task 7: Write a function to get information about the most recent review called `getLastReview`

getLastReview should accept:
  (1) an array of objects 
  
and should return a string in the format `name} gave the restaurant a {rating}, and their feedback was: {feedback}`

For example, if getLastReview is invoked passing the reviews array it will return `Reyna gave the restaurant a 3.5 star review and their feedback was: "this place is chill with really cool people, great for getting work done on weekdays"`.
*/
// function getLastReview(yourArray) {
//   /* Get the Last array index */
//     let last=yourArray.length-1;
//     return(`${yourArray[last].name} gave the restaurant a ${yourArray[last].rating}, and their feedback was: ${yourArray[last].feedback}`)
//   } 
function getLastReview(yourArray) {
     /* Get the Last array index */
      let last=yourArray.length-1;
      return(getReviewByIndex(yourArray,last));
}
   
  console.log('Task#7:');
  console.log(getLastReview(reviews));

///////////////🍔☕️🍽 STRETCH🍔☕️🍽////////////////////

/** STRETCH 1: Write a function called `getReviewByRating` that returns an array containing all reviews in a certain range. Your function should accept: 

  (1) An array of objects
  (2) A rating

  and should return an array of objects. 

  For example, invoking getReviewByRating(reviews, 4) would return [{name: "Miranda", rating: 4, feedback:"fun trivia and cool vibes"},
    {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
    {name:"Lauren", rating: 4, feedback: "Absolutely love that they have karaoke Fridays! Food and drink selection is okay."}]
*/

 function getReviewByRating(inArray,inRating) {
    let outArray=[];
    for(i=0;i<inArray.length;i++){
      if(Math.floor(inArray[i].rating) === Math.floor(inRating) )
      //if((inArray[i].rating >= inRating) && (inArray[i].rating < inRating+1))
      // {outArray.push(inArray[i].feedback);}
      {outArray.push(inArray[i]);}
    }return outArray;
  }
  console.log('Stretch#1:');
  console.log(getReviewByRating(reviews, 4));
  
/** STRETCH 2: Write a function called 'getLongestReview' that returns an array containing all reviews longer than 15 words. 
  
Your function should accept: 

  (1) An array of objects

and should return an array of objects. 

  For example, invoking getLongReviews(reviews) would return [
    {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
    {name: "Brett", rating: 3, feedback: "great selection of snacks and a nice cafe area to get work done during the day."},
    {name: "Julius", rating: 2, feedback: "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it." }]
*/
  let outLong=[];
  function getLongReviews(yourArray) {
    for(i in yourArray){
      /*For every array element split feedback into words and check if >15*/
      if((yourArray[i].feedback.split(" ").length) >15)
      outLong.push(yourArray[i]);
    }
    return outLong;
  }
  console.log('Stretch#2');
  console.log(getLongReviews(reviews));

/* STRETCH 3:  This challenge is not related to the data above! 

Write a function called carMarker 

Your function should accept:

(1) a single odometer argument (a number) 

and return an object.

The returned object should have the following characteristics:
     it has an `odometer` property that contains the argument passed in.
     it has a `drive` method that takes a distance as its argument, and
         (1) causes the odometer in the object to be increased by the distance,
         (2) returns the updated value of the `odometer`.*/
newobj={};
function carMaker(odoNum) {
  newobj={'odometer': odoNum,
          'drive':function(distance){
            return(this.odometer=this.odometer+distance);}
          }  
  return newobj;
}
/* check the value of odometer? */
console.log('Stretch#3:')
console.log(carMaker(100));
console.log(newobj.drive(50));
// console.log(newobj);

 