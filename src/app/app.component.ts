import { Component } from "@angular/core"

import "../assets/css/styles.css"

interface IPassenger {
	id: number
	fullName: string
	checkedIn: boolean
	checkInDate?: number
	children?: IChild[]
}

interface IChild {
	name: string
	age: number
}

@Component({
	selector: "my-app",
	styleUrls: ["./app.component.scss"],
	templateUrl: "./app.component.html",
})
export class AppComponent {
	public name: string = "Jo"
	public passengers: IPassenger[] = [
		{
			checkInDate: null,
			checkedIn: false,
			children: [{ name: "Ted", age: 13 }, { name: "Alice", age: 18 }],
			fullName: "Rose",
			id: 1,
		},
		{
			checkInDate: 149160600000,
			checkedIn: true,
			children: null,
			fullName: "Stephen",
			id: 2,
		},
	]
	public handleChange(value: string) {
		this.name = value
	}
}
