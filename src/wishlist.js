import Car  from "./car.js";

class WishList {
    list = [];
    nextId = 0;



    add(make, model, year){
        let newCar = new Car(++this.nextId, make, model, year);
        this.list.push(newCar);
    }

    remove(carId){
        this.list = this.list.filter((cars) =>{
            return carId != cars.id;
        })
    }
}

export default WishList;