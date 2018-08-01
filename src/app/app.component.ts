import { Component } from "@angular/core"

import "../assets/css/styles.css"

interface INav {
	exact: boolean
	link: string
	name: string
}

@Component({
	selector: "my-app",
	styleUrls: ["./app.component.scss"],
	template: `
	<nav>
		<a 
			routerLink="/"
			routerLinkActive="link-active"
			class="hover:text-teal-lighter text-white"
		>	<div class="flex items-center flex-no-shrink">
				<svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
					<defs>
						<filter id="drop-shadow" x="-100%" y="-100%" width="300%" height="300%">
							<feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
							<feOffset dx="5" dy="5" result="offsetblur"/>
							<feFlood flood-color="#000000" flood-opacity="0.2"/>
							<feComposite in2="offsetblur" operator="in"/>
							<feMerge>
							<feMergeNode/>
							<feMergeNode in="SourceGraphic"/>
							</feMerge>
						</filter>
					</defs>
					<path filter="url(#drop-shadow)" d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/>
				</svg>
				<span class="font-semibold text-xl tracking-tight" style="text-shadow: 0 2px 3px rgba(0, 0, 0, 0.2)">Airline Passenger App</span>
			</div>
		</a>
		<div class="flex-grow flex items-center justify-center md:justify-start w-auto text-sm">
			<a *ngFor="let item of nav"
				[routerLink]="item.link"
				routerLinkActive="link-active"
				[routerLinkActiveOptions]="{ exact: item.exact }"
			>
				{{ item.name }}
			</a>
		</div>
		</nav>
		<main>
			<router-outlet #o="outlet"></router-outlet>
		</main>
	`,
})
export class AppComponent {
	public nav: INav[] = [
		{
			exact: true,
			link: "/",
			name: "Home",
		},
		{
			exact: false,
			link: "/passengers",
			name: "Passengers",
		},
		{
			exact: false,
			link: "/oops",
			name: "404",
		},
	]
}
