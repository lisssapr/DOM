"use strict"

// 1
// let input = document.getElementById("input");
// let a = document.getElementById("a");
// input.addEventListener("b", function() {
//     a.textContent += input.value;
// });

// 2
// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let input3 = document.getElementById("input3");
// let paragraph = document.getElementById("a");
// let button = document.getElementById("but");
// button.addEventListener("click", function() {
//     let sum = Number(input1.value) + Number(input2.value) + Number(input3.value);
//     a.textContent =  sum;
// });

// 3
// let numberInput = document.getElementById("num");
// let sumParagraph = document.getElementById("sum");
// numberInput.addEventListener("blur", function() {
//     let number = numberInput.value;
//     let sum = 0;
//     for (let i = 0; i < number.length; i++) {
//         sum += parseInt(number.charAt(i));
//     }
//     sumParagraph.textContent =  sum;
// });

// 4
// let numberInput = document.getElementById("num");
// let averageParagraph = document.getElementById("a");
// numberInput.addEventListener("blur", function() {
//     let numbers = numberInput.value.split(",");
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += parseInt(numbers[i]);
//     }
//     let average = sum / numbers.length;
//     a.textContent =  average;
// });

// 5
// let fullNameInput = document.getElementById("fullName");
// let lastNameInput = document.getElementById("lastName");
// let firstNameInput = document.getElementById("firstName");
// let sureNameInput = document.getElementById("sureName");
// let patronymicInput = document.getElementById("Input");
// fullNameInput.addEventListener("blur", function() {
//     let fullName = fullNameInput.value.split(" ");
//     lastName.value = fullName[0];
//     firstName.value = fullName[1];
//     input.value = fullName[2];
// });

// 6
// let fio = document.getElementById("fio");
// fio.addEventListener("blur", function() {
//     let text = fio.value;
//     let words = text.split(" ");
//     let formattedText = words.map(function(word) {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(" ");
//     fio.value = formattedText;
// });

7
// let slova = document.getElementById("slova");
// let wordCount = document.getElementById("wordCount");
// slova.addEventListener("blur", function() {
//     let text = slova.value;
//     let words = text.split(" ");
//     words = words.filter(function(word) {
//         return word !== "";
//     });
//     let count = words.length;
//     wordCount.textContent =  count;
// });

// 8
// let data = document.getElementById("data");
// data.addEventListener("blur", function() {
//     let date = data.value;
//     let parts = date.split(".");
//     let formattedDate = parts[2] + "-" + parts[1] + "-" + parts[0];
//     data.value = formattedDate;
// });

// 9
// let slovoInput = document.getElementById("slovoInput");
// let checkbutton = document.getElementById("checkbutton");
// let result = document.getElementById("result");
// checkbutton.addEventListener("click", function() {
//     let word = slovoInput.value.toLowerCase();
//     if (word === word.split("").reverse().join("")) {
//         result.textContent = "читаемое";
//     } else {
//         result.textContent = "не читаемое";
//     }
// });

// 10
// let numInput = document.getElementById("numInput");
// let result = document.getElementById("result");
// numInput.addEventListener("blur", function() {
//     let number = numInput.value;
//     if (number.includes("3")) {
//         result.textContent = " есть 3";
//     } else {
//         result.textContent = "нет 3";
//     }
// });

// 11
// let abza = document.getElementsByTagName("p");
// let butt= document.getElementById("butt");
// butt.addEventListener("click", function() {
//     for (let i = 0; i <abza.length; i++) {
//         abza[i].textContent += " " + (i + 1);
//     }
// });

// 12
// let link = document.getElementsByTagName("a");
// let butt = document.getElementById("butt");
// butt.addEventListener("click", function() {
//     for (let i = 0; i < link.length; i++) {
//         link[i].textContent += " (" + link[i].href + ")";
//     }
// });

// 13
// let link = document.getElementsByTagName("a");
// let but = document.getElementById("but");
// but.addEventListener("click", function() {
//     for (let i = 0; i < link.length; i++) {
//         if (link[i].href.startsWith("http://")) {
//             link[i].textContent += " →";
//         }
//     }
// });

// 14
// let num1 = document.getElementById("num1");
// let num2 = document.getElementById("num2");
// let num3 = document.getElementById("num3");
// num1.addEventListener("click", function() {
//     let square = parseInt(num1.textContent) ** 2;
//     num1.textContent = square;
// });
// num2.addEventListener("click", function() {
//     let square = parseInt(num2.textContent) ** 2;
//     num2.textContent = square;
// });
// num3.addEventListener("click", function() {
//     let square = parseInt(num3.textContent) ** 2;
//     num3.textContent = square;
// });

// 15
// let dataInput = document.getElementById("dataInput");
// let result = document.getElementById("result");
// dataInput.addEventListener("blur", function() {
//     let date = dataInput.value;
//     let dayOfWeek = getDayOfWeek(date);
//     result.textContent = dayOfWeek;
// });
// function getDayOfWeek(dataString) {
//     let dataParts = dataString.split(".");
//     let day = parseInt(dataParts[0]);
//     let month = parseInt(dataParts[1]) - 1;
//     let year = parseInt(dataParts[2]);
//     let date = new Date(year, month, day);
//     let daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
//     return daysOfWeek[date.getDay()];
// }

// 16
// let numInput = document.getElementById("numInput");
// let increaseBut = document.getElementById("increaseBut");
// let decreaseBut = document.getElementById("decreaseBut");
// increaseBut.addEventListener("click", function() {
//     let currentValue = parseInt(numInput.value);
//     numInput.value = currentValue + 1;
// });
// decreaseBut.addEventListener("click", function() {
//     let currentValue = parseInt(numInput.value);
//     if (currentValue > 0) {
//         numInput.value = currentValue - 1;
//     }
// });

// 17
// let numInput = document.getElementById("numInput");
// let paragraphs = document.getElementsByTagName("p");
// for (let i = 0; i < paragraphs.length; i++) {
//     paragraphs[i].addEventListener("click", function() {
//         let currentValue = parseInt(numInput.value);
//         numInput.value = currentValue + 1;
//     });
// }

// 18
// let h= document.getElementsByTagName("div");
// for (let i = 0; i < h.length; i++) {
//     let div = h[i];
//     let text = div.innerHTML;
//     if (text.length > 10) {
//         text = text.substring(0, 10) + "...";
//     }
//     div.innerHTML = text;
// }

// 19  
// function generateRandomString() {
//     let chara = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     let random = "";
//     for (let i = 0; i < 8; i++) {
//         let randomIndex = Math.floor(Math.random() * chara.length);
//         random += chara.charAt(randomIndex);
//     }
//     document.getElementById("randomsInput").value = random;
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
//     celsiusResult.textContent = "Celsius: " + celsius.toFixed(2);
// }

// 22
// function calculateFactorial() {
//     let numInput = document.getElementById("numInput");
//     let result = document.getElementById("result");
//     let num = parseInt(numInput.value);
//     let factorial = 1;
//     for (let i = 1; i <= num; i++) {
//         factorial *= i;
//     }
//     result.textContent = "Factorial: " + factorial;
// }

// 23
// function calculateRoots() {
//     let input1= document.getElementById("input1");
//     let input2 = document.getElementById("input2");
//     let input3 = document.getElementById("input3");
//     let result = document.getElementById("result");
//     let a = parseInt(input1.value);
//     let b = parseInt(input2.value);
//     let c = parseInt(input3.value);
//     let discriminant = Math.pow(b, 2) - (4 * a * c);
//     if (discriminant > 0) {
//         let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//         let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//         result.textContent = "roots: " + root1 + ", " + root2;
//     } else if (discriminant === 0) {
//         let root = -b / (2 * a);
//         result.textContent = "root: " + root;
//     } else {
//         result.textContent = "No roots";
//     }
// }