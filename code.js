"use strict"

1
let input = document.getElementById("input");
let a = document.getElementById("a");
input.addEventListener("blur", function() {
    a.textContent += input.value;
});

// 2
// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let input3 = document.getElementById("input3");
// let paragraph = document.getElementById("paragraph");
// let button = document.getElementById("button");
// button.addEventListener("click", function() {
//     let sum = Number(input1.value) + Number(input2.value) + Number(input3.value);
//     paragraph.textContent = "Сумма: " + sum;
// });

// 3
// let numberInput = document.getElementById("numberInput");
// let sumParagraph = document.getElementById("sumParagraph");
// numberInput.addEventListener("blur", function() {
//     let number = numberInput.value;
//     let sum = 0;
//     for (let i = 0; i < number.length; i++) {
//         sum += parseInt(number.charAt(i));
//     }
//     sumParagraph.textContent = "Сумма цифр: " + sum;
// });

// 4
// let numberInput = document.getElementById("numberInput");
// let averageParagraph = document.getElementById("averageParagraph");
// numberInput.addEventListener("blur", function() {
//     let numbers = numberInput.value.split(",");
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += parseInt(numbers[i]);
//     }
//     let average = sum / numbers.length;
//     averageParagraph.textContent = "Среднее арифметическое: " + average;
// });

// 5
// let fullNameInput = document.getElementById("fullNameInput");
// let lastNameInput = document.getElementById("lastNameInput");
// let firstNameInput = document.getElementById("firstNameInput");
// let patronymicInput = document.getElementById("patronymicInput");
// fullNameInput.addEventListener("blur", function() {
//     let fullName = fullNameInput.value.split(" ");
//     lastNameInput.value = fullName[0];
//     firstNameInput.value = fullName[1];
//     patronymicInput.value = fullName[2];
// });

// 6
// let textInput = document.getElementById("textInput");
// textInput.addEventListener("blur", function() {
//     let text = textInput.value;
//     let words = text.split(" ");
//     let formattedText = words.map(function(word) {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(" ");
//     textInput.value = formattedText;
// });

// 7
// let textInput = document.getElementById("textInput");
// let wordCount = document.getElementById("wordCount");
// textInput.addEventListener("blur", function() {
//     let text = textInput.value;
//     let words = text.split(" ");
//     words = words.filter(function(word) {
//         return word !== "";
//     });
//     let count = words.length;
//     wordCount.textContent = "Количество слов: " + count;
// });

// 8
// let dateInput = document.getElementById("dateInput");
// dateInput.addEventListener("blur", function() {
//     let date = dateInput.value;
//     let parts = date.split(".");
//     let formattedDate = parts[2] + "-" + parts[1] + "-" + parts[0];
//     dateInput.value = formattedDate;
// });

// 9
// let wordInput = document.getElementById("wordInput");
// let checkButton = document.getElementById("checkButton");
// let result = document.getElementById("result");
// checkButton.addEventListener("click", function() {
//     let word = wordInput.value.toLowerCase();
//     if (word === word.split("").reverse().join("")) {
//         result.textContent = "палиндром";
//     } else {
//         result.textContent = "не палиндром";
//     }
// });

// 10
// let numberInput = document.getElementById("numberInput");
// let result = document.getElementById("result");
// numberInput.addEventListener("blur", function() {
//     let number = numberInput.value;
//     if (number.includes("3")) {
//         result.textContent = "Число содержит цифру 3";
//     } else {
//         result.textContent = "Число не содержит цифру 3";
//     }
// });

// 11
// let paragraphs = document.getElementsByTagName("p");
// let button = document.getElementById("button");
// button.addEventListener("click", function() {
//     for (let i = 0; i < paragraphs.length; i++) {
//         paragraphs[i].textContent += " " + (i + 1);
//     }
// });

// 12
// let links = document.getElementsByTagName("a");
// let button = document.getElementById("button");
// button.addEventListener("click", function() {
//     for (let i = 0; i < links.length; i++) {
//         links[i].textContent += " (" + links[i].href + ")";
//     }
// });

// 13
// let links = document.getElementsByTagName("a");
// let button = document.getElementById("button");
// button.addEventListener("click", function() {
//     for (let i = 0; i < links.length; i++) {
//         if (links[i].href.startsWith("http://")) {
//             links[i].textContent += " →";
//         }
//     }
// });

// 14
// let number1 = document.getElementById("number1");
// let number2 = document.getElementById("number2");
// let number3 = document.getElementById("number3");
// let button = document.getElementById("button");
// number1.addEventListener("click", function() {
//     let square = parseInt(number1.textContent) ** 2;
//     number1.textContent = square;
// });
// number2.addEventListener("click", function() {
//     let square = parseInt(number2.textContent) ** 2;
//     number2.textContent = square;
// });
// number3.addEventListener("click", function() {
//     let square = parseInt(number3.textContent) ** 2;
//     number3.textContent = square;
// });

// 15
// let dateInput = document.getElementById("dateInput");
// let result = document.getElementById("result");
// dateInput.addEventListener("blur", function() {
//     let date = dateInput.value;
//     let dayOfWeek = getDayOfWeek(date);
//     result.textContent = dayOfWeek;
// });
// function getDayOfWeek(dateString) {
//     let dateParts = dateString.split(".");
//     let day = parseInt(dateParts[0]);
//     let month = parseInt(dateParts[1]) - 1;
//     let year = parseInt(dateParts[2]);
//     let date = new Date(year, month, day);
//     let daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
//     return daysOfWeek[date.getDay()];
// }

// 16
// let numberInput = document.getElementById("numberInput");
// let increaseButton = document.getElementById("increaseButton");
// let decreaseButton = document.getElementById("decreaseButton");
// increaseButton.addEventListener("click", function() {
//     let currentValue = parseInt(numberInput.value);
//     numberInput.value = currentValue + 1;
// });
// decreaseButton.addEventListener("click", function() {
//     let currentValue = parseInt(numberInput.value);
//     if (currentValue > 0) {
//         numberInput.value = currentValue - 1;
//     }
// });

// 17
// let numberInput = document.getElementById("numberInput");
// let paragraphs = document.getElementsByTagName("p");
// for (let i = 0; i < paragraphs.length; i++) {
//     paragraphs[i].addEventListener("click", function() {
//         let currentValue = parseInt(numberInput.value);
//         numberInput.value = currentValue + 1;
//     });
// }

// 18
// let divs = document.getElementsByTagName("div");
// for (let i = 0; i < divs.length; i++) {
//     let div = divs[i];
//     let text = div.innerHTML;
//     if (text.length > 10) {
//         text = text.substring(0, 10) + "...";
//     }
//     div.innerHTML = text;
// }

// 19
// function generateRandomString() {
//     let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     let randomString = "";
//     for (let i = 0; i < 8; i++) {
//         let randomIndex = Math.floor(Math.random() * characters.length);
//         randomString += characters.charAt(randomIndex);
//     }
//     document.getElementById("randomStringInput").value = randomString;
// }

// 20
// function generateRandomString() {
//     let input = document.getElementById("randomStringInput");
//     let string = input.value;
//     let shuffledString = shuffleString(string);
// input.value = shuffledString;
// }
// function shuffleString(string) {
//     let characters = string.split("");
//     for (let i = characters.length - 1; i > 0; i--) {
//         let randomIndex = Math.floor(Math.random() * (i + 1));
//         let temp = characters[i];
//         characters[i] = characters[randomIndex];
//         characters[randomIndex] = temp;
//     }
//     return characters.join("");
// }

// 21
// function convertToFahrenheit() {
//     let fahrenheitInput = document.getElementById("fahrenheitInput");
//     let celsiusResult = document.getElementById("result");
//     let fahrenheit = parseFloat(fahrenheitInput.value);
//     let celsius = (fahrenheit - 32) * 5/9;
//     celsiusResult.textContent = "Temperature in Celsius: " + celsius.toFixed(2);
// }

// 22
// function calculateFactorial() {
//     let numberInput = document.getElementById("numberInput");
//     let result = document.getElementById("result");
//     let number = parseInt(numberInput.value);
//     let factorial = 1;
//     for (let i = 1; i <= number; i++) {
//         factorial *= i;
//     }
//     result.textContent = "Factorial: " + factorial;
// }

// 23
// function calculateRoots() {
//     let inputA = document.getElementById("inputA");
//     let inputB = document.getElementById("inputB");
//     let inputC = document.getElementById("inputC");
//     let result = document.getElementById("result");
//     let a = parseInt(inputA.value);
//     let b = parseInt(inputB.value);
//     let c = parseInt(inputC.value);
//     let discriminant = Math.pow(b, 2) - (4 * a * c);
//     if (discriminant > 0) {
//         let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//         let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//         result.textContent = "Roots: " + root1 + ", " + root2;
//     } else if (discriminant === 0) {
//         let root = -b / (2 * a);
//         result.textContent = "Root: " + root;
//     } else {
//         result.textContent = "No real roots";
//     }
// }
