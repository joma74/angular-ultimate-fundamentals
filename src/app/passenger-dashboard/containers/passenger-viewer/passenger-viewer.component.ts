import { Component, OnInit } from "@angular/core"
import { IPassenger } from "../../models/passenger.interface"
import { PassengerDashboardService } from "../../passenger-dashboard.service"

@Component({
	selector: "passenger-viewer",
	styleUrls: ["./passenger-viewer.component.scss"],
	template: `
		<div>
		  {{ passenger | json }}
		</div>
	`,
})
export class PassengerViewerComponent implements OnInit {
	public passenger: IPassenger

	constructor(private passengerService: PassengerDashboardService) {}
	public ngOnInit() {
		this.passengerService.getPassenger(1).subscribe((data: IPassenger) => {
			this.passenger = data
		})
	}
}
