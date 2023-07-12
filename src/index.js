console.log("Hello World");

// TODO
import WishList  from "./wishlist.js";

let form = document.querySelector("#submitForm");
let carMake = document.querySelector("#makeInput");
let carModel = document.querySelector("#modelInput");
let carYear = document.querySelector("#yearInput");

let makeDisplay = document.querySelector("#car-make");
let modelDisplay = document.querySelector("#car-model");
let yearDisplay = document.querySelector("#car-year");

let removeButton = document.querySelector("#removeBtn");

let displayList = document.querySelector("#list");

const mainList = new WishList();

function showCarDetails(car){
    makeDisplay.textContent = car.make;
    modelDisplay.textContent = car.model;
    yearDisplay.textContent = car.year;

    removeButton.disabled = false;
    removeButton.setAttribute("data-carId", car.id);
}

function updateDOMList(){
    let listItems = document.querySelectorAll("#list li");

    for(let i = 0; i < listItems.length; i++){
        listItems[i].parentNode.removeChild(listItems[i]);
    }

    for(let i = 0; i < mainList.list.length; i++){
        let newLI = document.createElement("li");
        newLI.textContent = `${mainList.list[i].make} ${mainList.list[i].model}`;
        newLI.addEventListener("click", ()=>{
            showCarDetails(mainList.list[i]);
        })
        displayList.append(newLI);
    }
}

function addCar(event){
    event.preventDefault();
    mainList.add(carMake.value, carModel.value, carYear.value);
    updateDOMList();
}

function removeCar(){
    let carId = Number(removeButton.getAttribute("data-carId"));

    mainList.remove(carId);

    updateDOMList();
    
    makeDisplay.textContent = "";
    modelDisplay.textContent = "";
    yearDisplay.textContent = "";

    removeButton.disabled = true;
}

form.addEventListener("submit", addCar);

removeButton.addEventListener("click", removeCar);