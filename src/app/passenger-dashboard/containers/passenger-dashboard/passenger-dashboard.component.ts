import { Component, OnInit } from "@angular/core"
import { IPassenger } from "../../models/passenger.interface"

@Component({
	selector: "passenger-dashboard",
	styleUrls: ["passenger-dashboard.component.scss"],
	template: `
		<div>
			<passenger-count
				[items]="passengers">
			</passenger-count>
			<passenger-detail></passenger-detail>
			<h3>Airline Passengers</h3>
			<ul>
				<li *ngFor="let passenger of passengers; let i = index">
					<span
						class="status"
						[class.checked-in]="passenger.checkedIn"
					></span>
					<span
						class="status"
						[ngClass]="{ 'checked-in' : passenger.checkedIn, 'checked-out' : !passenger.checkedIn }"
					></span>
					<span
						class="status"
						[style.backgroundColor]="( passenger.checkedIn ? '#2ecc71' : '#c0392b' )"
					></span>
					<span
						class="status"
						[ngStyle]="{ backgroundColor: ( passenger.checkedIn ? '#2ecc71' : '#c0392b' )}"
					></span> {{ i }}: {{ passenger.fullName }}
					<p>{{ passenger | json }}</p>
					<div class="date">Check in date: {{ passenger.checkInDate ? (passenger.checkInDate | date: 'yMMMMd' | uppercase ) : "Not checked in" }}</div>
					<div class="children">Children: {{ passenger.children?.length || 0 }}</div>
				</li>
			</ul>
		</div>
			`,
})
export class PassengerDashboardComponent implements OnInit {
	public passengers: IPassenger[]
	public ngOnInit(): void {
		this.passengers = [
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
	}
}
