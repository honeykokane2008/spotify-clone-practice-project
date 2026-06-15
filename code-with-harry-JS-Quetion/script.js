// 1. The Magical Sorting Hat:
//    Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (blue (length less than 6), red(length less than 8), green(length less than 12), or yellow(length greater than or equal to 12)) based on the length of their names.


// let studentName = ['honey', 'honeykokane', 'honeysubhashkokane','hoenysk']

// for (let name of studentName) {
//     if (name.length < 6) {
//         console.log(`${name} you are in blue group`)
//     } else if (name.length < 8) {
//         console.log(`${name} you are in red group`)
//     } else if (name.length < 12) {
//         console.log(`${name} you are in green group`)
//     } else {
//         console.log(`${name} you are in yellow group`)
//     }
// }


// // 2. The Double Trouble:
// //    You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

// let num = [2, 2, 4, 64, 64, 2344, 57, 57, 57, 57, 587, 897, 908, 89078];

// let result = [];

// for (i = 0; i < num.length; i++) {
//     if (num[i] === num[i - 1]) {
//         result.push(num[i]);
//     } else {
//         result.push(num[i] * 2);
//     }
// }
// console.log(result)

//3. The Mirror Mirror:
//    Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.


// let a = prompt("enter String");

// let b = "";

// for (let i = a.length - 1; i >= 0; i--) {
//     b += a[i];
// }
// alert(`original string : ${a} and reversed string is : ${b}`);


// 4. The Password Validator:
//    You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

// let a = prompt("creat Password");
// let hasUppercase = false;
// let hasLowercase = false;
// let hasNumber = false;

// for (i = 0; i < a.length; i++) {
//     if (a[i] >= "A" && a[i] <= "Z") {
//         hasUppercase = true;
//     }
// }

// for (i = 0; i < a.length; i++) {
//     if (a[i] >= "a" && a[i] <= "z") {
//         hasLowercase = true;
//     }
// }

// for (i = 0; i < a.length; i++) {
//     if (a[i] >= "0" && a[i] <= "9") {
//         hasNumber = true;
//     }
// }

// if (a.length >= 8 && hasLowercase && hasNumber && hasUppercase) {
//     alert(`password is valid`);
// } else {
//     alert(`password not valid`)
// }

// 5. The Sum Selector:
//    You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

// let a = [1, 2, 3, 4, -5, 5, 50,];

// let b = 0
// for (let i = 0; i < a.length; i++) {
//     if (a[i] < 0) {
//         console.log(`found negative number`);
//         break;
//     } else {
//         b += a[i];
//     }
// }

// console.log(b)

// 6. The Vowel Counter:
//    You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

// let a = "Honey kokane"

// let b = 0

// for (let i = 0; i < a.length; i++) {
//     if ("aeiouAEIOU".includes(a[i])) {
//         b += 1
//     }
// }

// console.log(`there are total ${b} vowels in string`)

// 7. The Local Storage Manager:
//     You are working on a note-taking app, and you want to implement a function named saveNoteToLocalStorage that takes a note object and saves it to the browser's local storage.


// let a = ["honey", "kokane", "sonu", "mrunal", "ginni"]

// function saveNoteToLocalStorage() {
//     localStorage.setItem("notes", JSON.stringify(a))
// }

// saveNoteToLocalStorage()


// 8. Async Array Mapping:
//    Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.


// let a = [1, 3, 4, 2, 3, 43, 2, 3,];

// let b = [];

// async function main() {
//     for (let i = 0; i < a.length; i++) {
//         let result = await new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve(a[i] * 2)
//             }, 500)
//         });
//         b.push(result)
//     }
//     console.log(b)

// }

// main()

// 9. The Asynchronous Shopper:
//    Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.


// async function placeOrder() {
//     console.log("Placing An Order")
//     await new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Order is Placed")
//         }, Math.floor(Math.random() * 1000))
//         console.log("Order is Placed Please wait")
//     })

// }

// placeOrder()


// 10. The Coffee Machine:
//     In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

// let coffeeType = ["cappuccino", "balck coffee", "cold coffee"]

// async function brewCoffee() {
//     console.log("Brewing Coffee")


//     let randomCoffee = coffeeType[Math.floor(Math.random() * coffeeType.length)]


//     let msg = await new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(`${randomCoffee} is ready`);
//         }, Math.floor(Math.random() * 1000));
//     });
//     console.log(msg)
//     console.log("thank you, return soon")
// }

// brewCoffee()



// 11. The Array Filterer:
// You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

// let products = [
//     { name: "mobile", category: "electronics", price: 10000, brand: "samsung" },
//     { name: "T.V", category: "electronics", price: 10000000, brand: "newbush" },
//     { name: "laptop", category: "electronics", price: 6000, brand: "lenovo" },
//     { name: "T-shirt", category: "clothes", price: 500, brand: "gucci" },
//     { name: "pants", category: "clothes", price: 1000, brand: "nike" }
// ];
// function filterProducts(products, criterion) {
//     return products.filter(product => product.category === criterion);
// }

// const filteredProducts = filterProducts(products, "electronics");

// console.log(filteredProducts);



// 12. The Token Manager:
// You are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.


function setAuthToken(token, expireTimeInMinutes) {

    const authData = {
        token: "honey",
        expireAt: Date.now() + expireTimeInMinutes * 60 * 1000
    };

    localStorage.setItem("authToken", JSON.stringify(authData));
}
