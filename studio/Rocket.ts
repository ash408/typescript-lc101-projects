import { Payload } from './Payload'
import { Cargo } from './Cargo'
import { Astronaut } from './Astronaut'

class Rocket {
   name: string;
   totalCapacityKg: number;
   cargoItems: Cargo[];
   astronauts: Astronaut[];

   constructor(name:string, totalCapacityKg:number) {
      this.name = name;
      this.totalCapacityKg = totalCapacityKg;

      this.cargoItems = [];
      this.astronauts = [];
   }

   sumMass(items: Payload[]): number {
      let total: number = 0;

      for (let item of items) {
         total += item.massKg;
      }

      return total;
   }

   currentMassKg(): number {
      const massAstronauts: number = this.sumMass(this.astronauts);
      const massCargo: number = this.sumMass(this.cargoItems);

      return massAstronauts + massCargo;
   }

   canAdd(item: Payload): boolean {
      return (this.currentMassKg() + item.massKg <= this.totalCapacityKg)
   }

   addCargo(cargo: Cargo): boolean {
      if(this.canAdd(cargo)) {
         this.cargoItems.push(cargo)

	 return true;
      } 
      else {
	 return false;
      }
   }

   addAstronaut(astronaut: Astronaut): boolean {
      if(this.canAdd(astronaut)) {
         this.astronauts.push(astronaut)

	 return true;
      } 
      else {
	 return false;
      }
   }
}

export { Rocket }
