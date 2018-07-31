import { Component, OnInit } from "@angular/core"
import { ActivatedRoute, Router } from "@angular/router"
import { IPassenger } from "../../models/passenger.interface"
import { PassengerDashboardService } from "../../passenger-dashboard.service"

@Component({
	selector: "passenger-viewer",
	styleUrls: ["./passenger-viewer.component.scss"],
	template: `
		<div>
			<passenger-form 
				[detail]="passenger"
				(update)="onUpdatePassenger($event)"
			>
			</passenger-form>
		</div>
	`,
})
export class PassengerViewerComponent implements OnInit {
	public passenger: IPassenger

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private passengerService: PassengerDashboardService,
	) {}

	public ngOnInit() {
		this.route.params
			.switchMap((data: IPassenger) => {
				return this.passengerService.getPassenger(data.id)
			})
			.subscribe((data: IPassenger) => {
				this.passenger = data
			})
	}

	public onUpdatePassenger(event: IPassenger) {
		this.passengerService
			.updatePassenger(event)
			.subscribe((data: IPassenger) => {
				this.passenger = { ...this.passenger, ...data }
			})
	}
}
