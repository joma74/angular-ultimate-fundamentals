import { Component } from "@angular/core"

import "../assets/css/styles.css"

@Component({
	selector: "my-app",
	styleUrls: ["./app.component.scss"],
	template: `
		<main>
			<passenger-viewer></passenger-viewer>
		</main>
	`,
})
export class AppComponent {}
