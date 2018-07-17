import { Component } from "@angular/core"

import "../assets/css/styles.css"

interface IPassenger {
	id: number
	fullName: string
	checkedIn: boolean
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
			checkedIn: false,
			fullName: "Rose",
			id: 1,
		},
		{
			checkedIn: true,
			fullName: "Stephen",
			id: 2,
		},
	]
	public handleChange(value: string) {
		this.name = value
	}
}
