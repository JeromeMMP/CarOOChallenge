class Vehicle{
    constructor(make,model,year){
        if(!Number.isFinite(year)){
            throw new Error ('year must be a number'); 
        }
        this.make = make;
        this.model = model;
        this.year = year; 
    }
    honk() {
        return console.log("Beep.")
    } 
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
    }
}

class Car extends Vehicle{
    constructor(make,model,year){
        super(make, model, year);
        this.numWheels = 4;
    };
    
}



class Motorcycle extends Vehicle{
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels = 2; 
    }
    revEngine(){
        return console.log('VROOM!!!')
    }
}


class Garage {
    constructor(capacity){
        if (!Number.isFinite(capacity)&& 0 <=capacity){
            return `Please indicate the capacity of the garage with a positiv number`;
        }
        this.vehicle = []; 
        this.capacity = capacity
    }
    
    add(newMotor){
        if(!(newMotor instanceof Vehicle)){
            return 'Only vehicles are allowed in here!';
        }
        if (this.vehicle.length >= this.capacity){
            return "Sorry, we're full."
        } 
           this.vehicle.push(class);
            return "Vehicle added!"
    }
}
    
