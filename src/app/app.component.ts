import { Component } from "@angular/core"

import "../assets/css/styles.css"

@Component({
	selector: "my-app",
	styleUrls: ["./app.component.scss"],
	templateUrl: "./app.component.html",
})
export class AppComponent {
	public name: string = "Jo"
	public handleChange(value: string) {
		this.name = value
	}
}
