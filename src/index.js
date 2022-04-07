import "./index.css";

var header = document.getElementById("header");
let heading = document.createElement("h1")
heading.innerHTML = "ToDo";
heading.classList.add("yellow","center","bgheading");
header.append(heading);

let logo=document.createElement("img")
logo.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRskHRaI_oebGYl9AWDdVxfOkJrY8xIpF-kpQ&usqp=CAU";
logo.setAttribute("id","logo")
header.append(logo);

var addtododata=document.getElementById("addtodo");
let addtodo= document.createElement("div")
addtodo.setAttribute("id","addtodo");

let input = document.createElement("input");
input.setAttribute("id","input_take");
let btn=document.createElement("button");
btn.innerHTML="Add Todo";
btn.addEventListener("click",()=>{
    let val = document.getElementById("input_take").value;
    let todolist = JSON.parse(localStorage.getItem("todolist")) || [];
    todolist.push(val);
    localStorage.setItem("todolist",JSON.stringify(todolist));
    display(todolist);
});
addtododata.append(input,btn);

addtododata.append(addtodo);
let todolist = JSON.parse(localStorage.getItem("todolist")) || [];
display(todolist);
function display(data){
    let displaytodo = document.getElementById("displaytodo");
    displaytodo.innerHTML="";
    data.map((ele)=>{
        let title = document.createElement("p");
        title.innerHTML=ele;
        displaytodo.append(title);
    });
}