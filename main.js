/* const printErrorlog = (message)=> {
    console.error(message);
} */

const userName = document.querySelector("#username"); 
const skillsList = document.querySelector("#skills-list"); 
const books = document.querySelector("#book");
const foodsList = document.querySelector("#foods-list");
const toDoList = document.querySelector("#todo-list");


/* let, var...書き換え可能
const...できない */

// console.log(userName);

userName.textContent = "kuwae"
books.textContent = "小説が好きです。短編集をよく読みます。"

const skills = ["HTML", "CSS", "JavaScript"]
skillsList.innerHTML = "";
skills.forEach(skill => {
    const item = document.createElement('div'); //createElement…JavaScript側からHTMLを編集
    item.className = 'skill-item';
    item.textContent = skill;
    skillsList.appendChild(item);

});

const foods = ["ラーメン", "白菜スープ", "鍋"]
foodsList.innerHTML = "";
foods.forEach(food => {
    const item2 = document.createElement('div');
    item2.className = 'food-item';
    item2.textContent = food;
    foodsList.appendChild(item2);
});

const todo = ["料理", "課題", "読書"]
toDoList.innerHTML = "";
todo.forEach(doList => {
    const item3 = document.createElement('div');
    item3.className = 'todo-item';
    item3.textContent = doList;
    toDoList.appendChild(item3);
});

// const makeSkillsList = (skillsList, skills)=

//  宿題…同じような方法で、HTMLの他の要素を変える！！