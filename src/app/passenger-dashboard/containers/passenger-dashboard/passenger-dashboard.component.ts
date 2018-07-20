import { Component, OnInit } from "@angular/core"
import { IPassenger } from "../../models/passenger.interface"

@Component({
	selector: "passenger-dashboard",
	template: `
		<div>
			<passenger-count
				[items]="passengers">
			</passenger-count>
			<passenger-detail *ngFor="let passenger of passengers;"
				[detail]="passenger">
			</passenger-detail>
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
