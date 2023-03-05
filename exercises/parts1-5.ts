// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

import { SpaceLocation } from './SpaceLocation'

const milesPerKilometer: number = 0.621;

class Spacecraft {
	name: string;
	speedMph: number;
	

	constructor(name: string, speedMph: number) {
		this.name = name;
		this.speedMph = speedMph;
	}


	getDaysToLocation(kilometersAway: number): number {
   		const milesAway: number = kilometersAway * milesPerKilometer;
   		const hoursAway: number = milesAway / this.speedMph;
   		const daysAway:number = hoursAway / 24;

   		return daysAway
	}

	printDaysToLocation(location: SpaceLocation) {
		console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
	}
}


const kilometersToMars: number = 225000000;
const kilometersToMoon: number = 384400;

const spaceShuttle = new Spacecraft('Determination', 17500);

spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToMoon));
