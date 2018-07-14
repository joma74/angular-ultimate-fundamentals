import { Component } from "@angular/core"

import "../assets/css/styles.css"

@Component({
	selector: "my-app",
	styleUrls: ["./app.component.scss"],
	templateUrl: "./app.component.html",
})
export class AppComponent {
	public title: string
	public major: number = 4
	public minor: number = 4
	public patch: number = 7
	public isHappy: boolean
	public logo: string = "assets/images/angular.png"
	public name: string = "Jo"
	constructor() {
		this.title = "Hello"
		this.isHappy = false
	}
	public handleBlur(event: any) {
		this.name = event.target.value
	}
	public handleInput(event: any) {
		this.name = event.target.value
	}
}
