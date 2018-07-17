import { Component } from "@angular/core"

import "../assets/css/styles.css"

interface IPassenger {
	id: number
	fullName: string
	checkedIn: boolean
	checkInDate?: number
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
			fullName: "Rose",
			id: 1,
		},
		{
			checkInDate: 149160600000,
			checkedIn: true,
			fullName: "Stephen",
			id: 2,
		},
	]
	public handleChange(value: string) {
		this.name = value
	}
}
