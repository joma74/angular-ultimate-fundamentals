import { Component } from "@angular/core"

import "../assets/css/styles.css"

@Component({
	selector: "my-app",
	styleUrls: ["./app.component.scss"],
	template: `
		<main>
			<router-outlet></router-outlet>
		</main>
	`,
})
export class AppComponent {}
