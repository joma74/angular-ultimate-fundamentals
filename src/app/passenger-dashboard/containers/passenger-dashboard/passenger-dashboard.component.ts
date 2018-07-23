import { Component, OnInit } from "@angular/core"
import { IPassenger } from "../../models/passenger.interface"
import { PassengerDashboardService } from "../../passenger-dashboard.service"

@Component({
	selector: "passenger-dashboard",
	template: `
		<div>
			<passenger-count
				[items]="passengers">
			</passenger-count>
			<div *ngFor="let passenger of passengers;">
				{{ passenger.fullName }}
			</div>
			<passenger-detail *ngFor="let passenger of passengers;"
				[detail]="passenger"
				(edit)="handleEdit($event)"
				(remove)="handleRemove($event)">
			</passenger-detail>
		</div>
			`,
})
export class PassengerDashboardComponent implements OnInit {
	public passengers: IPassenger[]
	constructor(private passengerService: PassengerDashboardService) {}

	public ngOnInit(): void {
		this.passengerService.getPassengers().then((data: IPassenger[]) => {
			this.passengers = data
		})
	}

	public handleEdit(event: IPassenger) {
		this.passengerService.updatePassenger(event).then((data: IPassenger) => {
			this.passengers = this.passengers.map((passenger: IPassenger) => {
				if (passenger.id === data.id) {
					passenger = { ...passenger, ...event }
				}
				return passenger
			})
		})
	}

	public handleRemove(event: IPassenger) {
		this.passengerService.removePassenger(event).then(() => {
			this.passengers = this.passengers.filter((passenger: IPassenger) => {
				return passenger.id !== event.id
			})
		})
	}
}
