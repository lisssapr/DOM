//1
// let elem = document.querySelector('#elem');
// let value = elem.getAttribute('value');
// console.log(value);

//1.1
// let elem = document.querySelector('#elem');
// let value = elem.getAttribute('value');
// console.log(value);

//2
// let elem = document.querySelector('#elem');
// elem.setAttribute('value', 'text');

//2.1
// let elem = document.querySelector('#elem');
// elem.setAttribute('class', 'valid');

// 3
// let elem = document.querySelector('#elem');
// elem.removeAttribute('value');

// 4 and 4.1
// let elem = document.querySelector('#elem');
// console.log(elem.hasAttribute('value'));

// 369.1
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function() {
//    let dataText = elem.getAttribute('data-text');
//   elem.textContent += dataText;
// });

// 369.2
// let divs = document.querySelectorAll('div[data-num]');
// divs.forEach(function(div) {
//   div.addEventListener('click', function() {
//     let num = div.getAttribute('data-num');
//     div.textContent += num;
//   });
// });


// НОМЕР1
// let parent = document.querySelector('#parent');
// let arr = [1, 2, 3, 4, 5];

// for (let elem of arr) {
//     let p = document.createElement('p');
//     p.textContent = elem;
    
//     p.addEventListener('click', function() {
//         let currentValue = parseInt(p.textContent);
//         p.textContent = currentValue + 1;
//     });
    
//     parent.appendChild(p);
// }

//НОМЕР2  !!!!!
// let arr = ['elem1', 'elem2', 'elem3', 'elem4', 'elem5'];
// let ul = document.querySelector('#elem');

// for (let item of arr) {
//     let li = document.createElement('li');
//     li.textContent = item;
//     ul.appendChild(li);
// }


// номер2.2
// let arr = ['elem1', 'elem2', 'elem3', 'elem4', 'elem5'];
// let ul = document.querySelector('#elem');

// for (let item of arr) {
//     let li = document.createElement('li');
//     li.textContent = item;
//     ul.appendChild(li);
    
//     li.addEventListener('click', function() {
//         console.log(item);
//     });
// }


// номер 2.3
// let arr = ['elem1', 'elem2', 'elem3', 'elem4', 'elem5'];
// let ul = document.querySelector('#elem');

// for (let item of arr) {
// let li = document.createElement('li');
// li.textContent = item;
// ul.appendChild(li);

// li.addEventListener('click', function() {
// li.textContent = item + '!';
// console.log(item);
// });
// }



// номер2.4
// let arr = ['elem1', 'elem2', 'elem3', 'elem4', 'elem5'];
// let ul = document.querySelector('#elem');

// for (let item of arr) {
// let li = document.createElement('li');
// li.textContent = item;
// ul.appendChild(li);

// li.addEventListener('click', function() {
// if (!li.textContent.endsWith('!')) {
// li.textContent = item + '!';
// }
// console.log(item);
// });
// }




// НОМЕР№3 !!!
// let table = document.querySelector("#table");

// for (let i = 0; i < 5; i++) {
// let row = document.createElement("tr");

// for (let j = 0; j < 5; j++) {
// let cell = document.createElement("td");
// row.appendChild(cell);
// }

// table.appendChild(row);
// }


//номер3.2 !!!!!!
// let table = document.querySelector("#table");

// for (let i = 0; i < 10; i++) {
// let row = document.createElement("tr");

// for (let j = 0; j < 5; j++) {
// let cell = document.createElement("td");
// row.appendChild(cell);
// }

// table.appendChild(row);
// }

// номер 3.3
// let table = document.querySelector("#table");

// for (let i = 0; i < 10; i++) {
// let row = document.createElement("tr");

// for (let j = 0; j < 5; j++) {
// let cell = document.createElement("td");
// cell.textContent = "x"; 
// row.appendChild(cell);
// }

// table.appendChild(row);
// }


//НОМЕР4
// let table = document.querySelector("#table");

// let count = 1;
// for (let i = 0; i < 5; i++) {
// let row = document.createElement("tr");

// for (let j = 0; j < 5; j++) {
// let cell = document.createElement("td");
// cell.textContent = count;
// row.appendChild(cell);
// count++;
// }

// table.appendChild(row);
// }

// document.body.appendChild(table);

// номер 4.2
// let table = document.querySelector("#table");

// let count = 2; 
// for (let i = 0; i < 5; i++) {
// let row = document.createElement("tr");

// for (let j = 0; j < 5; j++) {
// let cell = document.createElement("td");
// cell.textContent = count;
// row.appendChild(cell);
// count += 2; 
// }

// table.appendChild(row);
// }

// document.body.appendChild(table);



// номер 5
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// let table = document.querySelector("#table");

// for (let i = 0; i < arr.length; i++) {
// let row = document.createElement('tr');

// for (let j = 0; j < arr[i].length; j++) {
// let cell = document.createElement('td');
// cell.textContent = arr[i][j];
// row.appendChild(cell);
// }

// table.appendChild(row);
// }

// document.body.appendChild(table);

// номер 5.2
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// let table = document.querySelector("#table");

// for (let i = 0; i < arr.length; i++) {
// let row = document.createElement('tr');

// for (let j = 0; j < arr[i].length; j++) {
// let cell = document.createElement('td');
// cell.textContent = arr[i][j] * arr[i][j]; 
// row.appendChild(cell);
// }

// table.appendChild(row);
// }

// document.body.appendChild(table);



// НОМЕР6
// let employees = [
//   {name: 'employee1', age: 20, salary: 400},
//   {name: 'employee2', age: 21, salary: 500},
//   {name: 'employee3', age: 45, salary: 600},
//   ];
  
//   let table = document.querySelector("#table");
//   let headerRow = document.createElement('tr');
  

//   for (let key in employees[0]) {
//   let headerCell = document.createElement('th');
//   headerCell.textContent = key.charAt(0).toUpperCase() + key.slice(1); 
//   headerRow.appendChild(headerCell);
//   }
  
//   table.appendChild(headerRow);
  

//   for (let employee of employees) {
//   let row = document.createElement('tr');
  
//   for (let key in employee) {
//   let cell = document.createElement('td');
//   cell.textContent = employee[key];
//   row.appendChild(cell);
//   }
  
//   table.appendChild(row);
//   }
  
//   document.body.appendChild(table);

//номер 6.2
// let employees = [
//   { name: 'employee1', age: 30, salary: 400 },
//   { name: 'employee2', age: 31, salary: 500 },
//   { name: 'employee3', age: 32, salary: 600 },
// ];

// let table = document.querySelector("#table");
// let headerRow = document.createElement('tr');

// for (let key in employees[0]) {
//   let headerCell = document.createElement('th');
//   headerCell.textContent = key.charAt(0).toUpperCase() + key.slice(1);
//   headerRow.appendChild(headerCell);
// }

// table.appendChild(headerRow);

// for (let employee of employees) {
//   let row = document.createElement('tr');

//   for (let key in employee) {
//     let cell = document.createElement('td');
//     cell.textContent = employee[key];
//     if (key === 'age') {
//       cell.addEventListener('click', function () {
//         employee[key]++;
//         cell.textContent = employee[key];
//       });
//     }
//     row.appendChild(cell);
//   }

//   table.appendChild(row);
// }

// document.body.appendChild(table);


// номер6.3
// let employees = [
//   { name: 'employee1', age: 30, salary: 400 },
//   { name: 'employee2', age: 31, salary: 500 },
//   { name: 'employee3', age: 32, salary: 600 },
// ];

// let table = document.querySelector("#table");
// let headerRow = document.createElement('tr');

// for (let key in employees[0]) {
//   let headerCell = document.createElement('th');
//   headerCell.textContent = key.charAt(0).toUpperCase() + key.slice(1);
//   headerRow.appendChild(headerCell);
// }

// table.appendChild(headerRow);

// for (let employee of employees) {
//   let row = document.createElement('tr');

//   for (let key in employee) {
//     let cell = document.createElement('td');
//     cell.textContent = employee[key];
//     if (key === 'salary') {
//       cell.addEventListener('click', function () {
//         employee[key] *= 1.1;
//         employee[key] = Math.round(employee[key] * 100) / 100;
//         cell.textContent = employee[key];
//       });
//     }
//     row.appendChild(cell);
//   }

//   table.appendChild(row);
// }

// document.body.appendChild(table); 


// НОМЕР7


// let addButton = document.querySelector('#table');
// addButton.textContent = 'Добавить ряд';
// document.body.appendChild(addButton);


// addButton.addEventListener('click', function () {
//   let newEmployee = { name: 'New Employee', age: 25, salary: 1000 };
//   let newRow = document.createElement('tr');
//   for (let key in newEmployee) {
//     let cell = document.createElement('td');
//     cell.textContent = newEmployee[key];
//     newRow.appendChild(cell);
//   }
//   table.appendChild(newRow);
// });

//номер7.2  !!!!!!!!!!!!!!!!!!!!!!!!!!!

// let table = document.querySelector('#table');
// let addButton = document.querySelector('#addButton');


// addButton.addEventListener('click', function () {
 
//   let numRows = table.rows.length;
//   let numCols = table.rows[0].cells.length;

//   let newRow = table.insertRow(numRows);

//   for (let i = 0; i < numCols + 1; i++) {
//     let newCell = newRow.insertCell(i);
//     newCell.textContent = ''; 
//     newCell.style.width = '50px';
//     newCell.style.height = '50px';
//     newCell.style.border = '1px solid black';
//   }

//   table.style.width = (numCols + 1) * 50 + 'px';
// });




// НОМЕР8 


// let increaseButton = document.getElementById("increaseButton");
// let cells = document.querySelectorAll("#table td");

// increaseButton.addEventListener("click", function() {
// cells.forEach(function(cell) {
// let currentValue = parseInt(cell.textContent);
// let doubledValue = currentValue * 2;
// cell.textContent = doubledValue;
// });
// });

// НОМЕР9  !!!!!!!!!!

// let parent = document.querySelectorAll("#parent li");
// let button = document.querySelector("#button");


// button.addEventListener("click", function() {
// let li = document.createElement("li");
// parent.appendChild(li);

// li.addEventListener("click", function() {
// parent.removeChild(li);
// });
// });

// parent.addEventListener("click", function(event) {
// if (event.target.tagName === "li") {
// parent.removeChild(event.target);
// }
// });


//НОМЕР10


// let elem   = document.querySelector('#elem');
// let remove = document.querySelector('#remove');

// remove.addEventListener('click', function(event) {
// 	elem.remove();
// 	event.preventDefault(); 
// });


// НОМЕР11 !1!!!!!!!!!!!!!!!!!!!
// let elem = document.querySelectorAll('#parent li');

// elem.forEach(function(elem) {
//     let remove = document.createElement('a');
//     remove.href = '#';  // Provide a valid href or use 'javascript:void(0);'
//     remove.textContent = 'remove';
//     elem.appendChild(remove);
    
//     remove.addEventListener('click', function(event) {
//         elem.remove();
//         event.preventDefault();
//     });
// });


//номер11.2

// let elem = document.querySelectorAll('#parent li');

// for (let elem of elems) {
// 	let remove = document.createElement('a');
// 	remove.href = '';
// 	remove.textContent = 'remove';
// 	elem.appendChild(remove);
	
// 	remove.addEventListener('click', function(event) {
// 		elem.remove();
// 		event.preventDefault();
// 	});
// }

// номер 12
// let elem = document.querySelector('#elem');
// let input = document.querySelector('#input');

// input.value = elem.textContent;

// input.addEventListener('input', function() {
//     elem.textContent = this.value;
// });

// номер 12.1
// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function() {
// 	let input = document.createElement('input');
// 	input.value = elem.textContent;
	
// 	input.addEventListener('blur', function() {
// 		elem.textContent = this.value;
// 		this.remove(); 
// 	});
	
// 	elem.parentElement.appendChild(input);
// });

// номер 13
// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function func()
// 	 { 
// 	let input = document.createElement('input');
// 	input.value = elem.textContent;
	
// 	elem.textContent = '';
// 	elem.appendChild(input);
	
// 	input.addEventListener('blur', function() {
// 		elem.textContent = this.value;
// 		elem.addEventListener('click', func); 
			
// 	});
	
// 	elem.removeEventListener('click', func);
// });

// номер 14
// let elems = document.querySelectorAll('li');

// for (let elem of elems) {
// 	elem.addEventListener('click', function func()
// 		 { 
// 		let input = document.createElement('input');
// 		input.value = elem.textContent;
		
// 		elem.textContent = '';
// 		elem.appendChild(input);
		
// 		input.addEventListener('blur', function() {
// 			elem.textContent = this.value;
// 			elem.addEventListener('click', func);
// 		});
		
// 		elem.removeEventListener('click', func);
// 	});
// }

// номер 14.2

// let elems = document.querySelectorAll('tr');

// for (let elem of elems) {
// 	elem.addEventListener('click', function func()
// 		 { 
// 		let input = document.createElement('input');
// 		input.value = elem.textContent;
		
// 		elem.textContent = '';
// 		elem.appendChild(input);
		
// 		input.addEventListener('blur', function() {
// 			elem.textContent = this.value;
// 			elem.addEventListener('click', func);
// 		});
		
// 		elem.removeEventListener('click', func);
// 	});
// }


// НОМЕР15.2

// let elems = document.querySelectorAll('span');

// for (let elem of elems) {
// 	elem.addEventListener('click', function func()
// 		 { 
// 		let input = document.createElement('input');
// 		input.value = elem.textContent;
		
// 		elem.textContent = '';
// 		elem.appendChild(input);
		
// 		input.addEventListener('blur', function() {
// 			elem.textContent = this.value;
// 			elem.addEventListener('click', func);
// 		});
		
// 		elem.removeEventListener('click', func);
// 	});
// }

// for (let elem of elems) {
//   	let remove = document.createElement('a');
//   	remove.href = '';
//   	remove.textContent = 'remove';
//   	elem.appendChild(remove);
    
//   	remove.addEventListener('click', function(event) {
//   		elem.remove();
//   		event.preventDefault();
//   	});
//   }

// номер 15
// let elems = document.querySelectorAll('span');

// for (let elem of elems) {
// 	elem.addEventListener('click', function func()
// 		 { 
// 		let input = document.createElement('input');
// 		input.value = elem.textContent;
		
// 		elem.textContent = '';
// 		elem.appendChild(input);
		
// 		input.addEventListener('blur', function() {
// 			elem.textContent = this.value;
// 			elem.addEventListener('click', func);
// 		});
		
// 		elem.removeEventListener('click', func);
// 	});
// }


// номер16

// let links = document.querySelectorAll('a');

// links.forEach(link => {
//     link.addEventListener('click', function(event) {
//         event.preventDefault();
//         this.parentNode.querySelector('span').style.textDecoration = 'line-through';
//     });
// });


//номер16.2
// let links = document.querySelectorAll('a');

// links.forEach(link => {
//     link.addEventListener('click', function(event) {
//         event.preventDefault();
//         let spanElement = this.parentNode.querySelector('span');
//         spanElement.style.textDecoration = 'line-through';
//         this.parentNode.removeChild(this);
//     });
// });

//номер16.3

// let highlightLinks = document.querySelectorAll('a');

// highlightLinks.forEach(link => {
//     link.addEventListener('click', function(event) {
//         event.preventDefault();
//         let row = this.closest('tr');
//         row.style.backgroundColor = 'green';
//       
//     });
// });

//номер16.4

// let highlightLinks = document.querySelectorAll('a');

// highlightLinks.forEach(link => {
//     link.addEventListener('click', function(event) {
//         event.preventDefault();
//         let row = this.closest('tr');
//         row.style.backgroundColor = 'green';
//         this.parentNode.removeChild(this);
//     });
// });


//НОМЕР17




// let elem = document.querySelector("#elem"); 
// let show = document.querySelector("#show"); 
// let isHidden = false;
// show.addEventListener('click', function() { 
//     if (isHidden) {
//         elem.classList.remove('hidden');
//         isHidden = false;
//     } else {
//         elem.classList.add('hidden');
//         isHidden = true;
//     }
// });




 
// 18.1
// let button = document.querySelectorAll("#button"); 
// for (let button of button) { 
//     button.addEventListener('click', function() { 
//         let elem = document.querySelector('#' + this.dataset.elem); 
//         elem.classList.toggle('hidden'); 
//     }); 
// }

// 18 2
// let button = document.querySelectorAll("#button"); 
// let elem   = document.querySelectorAll("#p"); 
// button.forEach((button, i) => {
//     button.addEventListener('click', () => {
//         elem[i].classList.toggle('hidden');
//     });
// });

// 18 3
// let buttons = document.querySelectorAll("#button");
// buttons.forEach((button) => {
//     button.addEventListener('click', () => {
//         button.previousElementSibling.classList.toggle('hidden');
//     });
// });

// 19 1
// let list = document.querySelectorAll("#ul li");
// list.forEach((item) => {
//     item.addEventListener('click', () => {
//         item.style.backgroundColor = 'red';
//     });
// });

// 19 2
// document.addEventListener('DOMContentLoaded', function() {
//     let list = document.querySelectorAll("#ul li");
//     list.forEach(function(item) {
//         item.addEventListener('click', function() {
//             if (item.classList.contains('active')) {
//             item.classList.remove('active');
//             } else {
//             list.forEach(function(li) {
//                 li.classList.remove('active');
//             });
//             item.classList.add('active');
//             }
//         });
//     });
// });

// 20 1
// let tds = document.querySelectorAll('#table td');

// let color = 'color1';
// for (let td of tds) {
// 	td.addEventListener('click', function() {
// 		if (color == 'color1') {
// 			color = 'color2'
// 		} else {
// 			color = 'color1'
// 		}
		
// 		this.classList.add(color);
// 	});
// }


// 21 1
// let array = ['elem1', 'elem2', 'elem3', 'elem4'];
//  let text = document.querySelector("#text");
//   array.forEach(item => {
//     let Item = document.createElement('li');
//     Item.textContent = item;
//     text.appendChild(Item);
//   });

//21 2
//  let array =['elem1', 'elem2', 'elem3', 'elem4'];
// let text = document.querySelector("#text");
//   array.forEach(item => {
//    let Item = document.createElement('li');
//     Item.textContent = item;
//     Item.addEventListener('click', function() {
//      let input = document.createElement('input');
//       input.value = Item.textContent;
//       Item.textContent = '';
//       Item.appendChild(input);
//       input.focus();
//       input.addEventListener('blur', function() {
//        Item.textContent = input.value;
//       });
//     });
//     text.appendChild(Item);` 
//   });

// 21 3
// let array = ['elem1', 'elem2', 'elem3', 'elem4'];
//  let list = document.querySelector("#list");
//   array.forEach(item => {
//    let listItem = createListItem(item);
//     list.appendChild(listItem);
//   });
//   function createListItem(item) {
//   let listItem = document.createElement("#li");
//     listItem.textContent = item;
//     listItem.addEventListener('click', function() {
//      let input = document.createElement('input');
//       input.value = listItem.textContent;
//       listItem.textContent = '';
//       listItem.appendChild(input);
//       input.focus();
//       input.addEventListener('blur', function() {
//         listItem.textContent = input.value;
//       });
//     });
//     return listItem;
//   }
//   function addItem() {
//    let additem = document.querySelector("#additem");
//     let newItem = additem.value;
//     if (newItem) {
//      let listItem = createListItem(newItem);
//       list.appendChild(listItem);
//       additem.value = '';
//     }
//   }

// 21 4
// let array = ['elem1', 'elem2', 'elem3', 'elem4'];
//   let list = document.querySelector("#list");
//   array.forEach(item => {
//    let listItem = createListItem(item);
//     list.appendChild(listItem);
//   });
//   function createListItem(item) {
//     let listItem = document.createElement('li');
//     listItem.textContent = item;
//  let deleteLink = document.createElement('a');
//     deleteLink.textContent = 'удалить';
//     deleteLink.href = '#';
//     deleteLink.addEventListener('click', function() {
//       listItem.remove();
//     });
//     listItem.appendChild(deleteLink);
//     listItem.addEventListener('click', function() {
//    let input = document.createElement('input');
//       input.value = listItem.textContent;
//       listItem.textContent = '';
//       listItem.appendChild(input);
//       input.focus();
//       input.addEventListener('blur', function() {
//         listItem.textContent = input.value;
//       });
//     });
//     return listItem;
//   }
//   function addItem() {
//     let additem = document.querySelector("#additem");
//   let newItem = additem.value;
//     if (newItem) {
//     let listItem = createListItem(newItem);
//       list.appendChild(listItem);
//       additem.value = '';
//     }
//   }

// 21 5
// let array = ['elem1', 'elem2', 'elem3', 'elem4'];
// let list = document.querySelector("#list");
//   array.forEach(item => {
//     let listItem = createListItem(item);
//     list.appendChild(listItem);
//   });
//   function createListItem(item) {
//     let listItem = document.createElement('li');
//     listItem.textContent = item;
//     let deleteLink = document.createElement('a');
//     deleteLink.textContent = 'удалить';
//     deleteLink.href = '#';
//     deleteLink.addEventListener('click', function() {
//       listItem.remove();
//     });   
//     listItem.appendChild(deleteLink); 
//     let strikeLink = document.createElement('a');
//     strikeLink.textContent = 'перечеркнуть';
//     strikeLink.href = '#';
//     strikeLink.addEventListener('click', function() {
//       listItem.style.textDecoration = 'line-through';
//     });  
//     listItem.appendChild(strikeLink);  
//     listItem.addEventListener('click', function() {
//         let input = document.createElement('input');
//       input.value = listItem.textContent;
//       listItem.textContent = '';
//       listItem.appendChild(input);
//       input.focus();
//       input.addEventListener('blur', function() {
//         listItem.textContent = input.value;
//       });
//     });  
//     return listItem;
//   }
//   function addItem() {
//     let additem = document.querySelector("#additem");
//     let newItem = additem.value;
//     if (newItem) {
//         let listItem = createListItem(newItem);
//       list.appendChild(listItem);
//       additem.value = '';
//     }
//   }

// 21 6
// let workers = [
//    {name: 'workers1', age: 30, money: 400},
//    {name: 'workers2', age: 31, money: 500},
//    {name: 'workers3', age: 32, money: 600},
//   ];
//   let workers = document.querySelector('workers');
//   workers.forEach(workers => {
//     let row = workers.insertRow(-1);
//     let nameCell = row.insertCell(0);
//     let ageCell = row.insertCell(1);
//     let moneyCell = row.insertCell(2);
//     nameCell.textContent = workers.name;
//     ageCell.textContent = workers.age;
//     moneyCell.textContent = workers.money;
//   });

// 484 7
// let workers = [
//     {name: 'workers1', age: 30, money: 400},
//     {name: 'workers2', age: 31, money: 500},
//     {name: 'workers3', age: 32, money: 600},
//    ];
//    let workers = document.querySelector("#workers");
//    workers.forEach((workers, index) => {
//     let row = workers.insertRow(-1);
//     let nameCell = row.insertCell(0);
//     let ageCell = row.insertCell(1);
//     let moneyCell = row.insertCell(2);
//      nameCell.innerHTML = <input type="text" value="${workers.name}" id="name${index}">;
//      ageCell.innerHTML = <input type="number" value="${workers.age}" id="age${index}">;
//      moneyCell.innerHTML = <input type="number" value="${workers.money}" id="money${index}">;
// });

//21 8
// let workers = [
//         {name: 'workers1', age: 30,money: 400},
//         {name: 'workers2', age: 31, money: 500},
//         {name: 'workers3', age: 32, money: 600},
//    let workers = document.querySelector("#workers");
//    workers.forEach((workers, index) => {
//      let row = workers.insertRow(-1);
//     let nameCell = row.insertCell(0);
//     let ageCell = row.insertCell(1);
//     let moneyCell = row.insertCell(2);
//    let actionCell = row.insertCell(3); // New cell for delete link
//      nameCell.innerHTML = <input type="text" value="${workers.name}" id="name${index}">;
//      ageCell.innerHTML = <input type="number" value="${workers.age}" id="age${index}">;
//      moneyCell.innerHTML = <input type="number" value="${workers.money}" id="money${index}">;
//      actionCell.innerHTML = <a href="#" onclick="deleteRow(${index})">Delete</a>;
//    });
//    function deleteRow(index) {
//      workers.deleteRow(index + 1); 
//    }

//21 9
//  let workers = [
//         {name: 'workers1', age: 30,money: 400},
//         {name: 'workers2', age: 31, money: 500},
//         {name: 'workers3', age: 32, money: 600},
//    let workers = document.querySelector("#workers");
//    workers.forEach((workers, index) => {
//      let row = workers.insertRow(-1);
//     let nameCell = row.insertCell(0);
//     let ageCell = row.insertCell(1);
//     let moneyCell = row.insertCell(2);
//    let actionCell = row.insertCell(3); // New cell for delete link
//      nameCell.innerHTML = <input type="text" value="${workers.name}" id="name${index}">;
//      ageCell.innerHTML = <input type="number" value="${workers.age}" id="age${index}">;
//      moneyCell.innerHTML = <input type="number" value="${workers.money}" id="money${index}">;
//      actionCell.innerHTML = <a href="#" onclick="deleteRow(${index})">Delete</a>;
//    });
//    function deleteRow(index) {
//      workers.deleteRow(index + 1); 
//    }

// 21 10
// let workers = [
//         {name: 'workers1', age: 30,money: 400},
//         {name: 'workers2', age: 31, money: 500},
//         {name: 'workers3', age: 32, money: 600},
// let workers = document.querySelector("#workers");
// workers.forEach((workers) => {
//      let listItem = document.createElement('li');
//      listItem.textContent = Name: ${workers.name}, Age: ${workers.age}, Money: ${workers.money};
//      workers.appendChild(listItem);
// });

//21 11
// let workers = [
//         {name: 'workers1', age: 30,money: 400},
//         {name: 'workers2', age: 31, money: 500},
//         {name: 'workers3', age: 32, money: 600},

//    let workers = document.querySelector("#workers");
//   workers.forEach((workers) => {
//     let listItem = document.createElement('li');
//      listItem.textContent = Name: ${workers.name}, Age: ${workers.age}, Money: ${workers.money};  
//    
//      listItem.addEventListener('click', () => {
//       let nameInput = document.createElement('input');
//        nameInput.value = workers.name;
//        listItem.appendChild(nameInput);     
//       let ageInput = document.createElement('input');
//        ageInput.value =workers.age;
//        listItem.appendChild(ageInput);     
//      let moneyInput = document.createElement('input');
//        moneyInput.value = workers.money;
//        listItem.appendChild(moneyInput);    
//        // Update the workers object when input is changed
//        nameInput.addEventListener('change', () => {
//         workers.name = nameInput.value;
//        }); 
//        ageInput.addEventListener('change', () => {
//         workers.age = ageInput.value;
//        });
//       moneyInput.addEventListener('change', () => {
//        workers.money = moneyInput.value;
//        });
//      });
//    workers.appendChild(listItem);
//    });

//21 12
//let workers = [
//         {name: 'workers1', age: 30,money: 400},
//         {name: 'workers2', age: 31, money: 500},
//         {name: 'workers3', age: 32, money: 600},
//  let workers = document.querySelector("#workers");
//  workers.forEach((workers) => {
//     let listItem = document.createElement('li');
//     listItem.textContent = Name: ${workers.name}, Age: ${workers.age}, Money: ${workers.money};
//    let deleteLink = document.createElement('a');
//     deleteLink.textContent = 'Delete';
//     deleteLink.href = '#';
//     deleteLink.addEventListener('click', () => {
//       workers.removeChild(listItem);
//     });
//     listItem.appendChild(deleteLink);
//     workers.appendChild(listItem);
//   });

// 21 13
//let form = document.querySelector("#form");
//   let nameInput = document.querySelector("#name");
//   let ageInput = document.querySelector("#age");
//   let moneyInput = document.querySelector("#money");
//   form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     let newworkers = {
//       name: nameInput.value,
//       age: parseInt(ageInput.value),
//      money: parseInt(moneyInput.value)
//     };
//     workers.push(newworkers);
//     let listItem = document.createElement('li');
//     listItem.textContent = Name: ${newworkers.name}, Age: ${newworkers.age}, Money: ${newworkers.money};
//     let deleteLink = document.createElement('a');
//     deleteLink.textContent = 'Delete';
//     deleteLink.href = '#';
//     deleteLink.addEventListener('click', () => {
//       workersList.removeChild(listItem);
//     });
//     listItem.appendChild(deleteLink);
//     workersList.appendChild(listItem);
//     nameInput.value = '';
//     ageInput.value = '';
//    moneyInput.value = '';
// });


