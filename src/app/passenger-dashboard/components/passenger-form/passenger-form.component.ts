import { Component, Input } from "@angular/core"
import { IPassenger } from "../../models/passenger.interface"

@Component({
	selector: "passenger-form",
	styleUrls: ["passenger-form.component.scss"],
	template: `
		<form #form="ngForm" novalidate>
			{{ detail | json }}
			<div>
				Passenger name: 
				<input type="text" name ="fullName" [ngModel]="detail?.fullName">
			</div>
			<div>
				Passenger ID: 
				<input type="number" name ="id" [ngModel]="detail?.id">
			</div>
			<div>
				Checked in:
				<label>
					<input 
						type="radio" 
						[value]="true" 
						name="checkedIn" 
						[ngModel]="detail?.checkedIn"
						(ngModelChange)="toggleCheckIn($event)"
					>
					Yes
				</label>
				<label>
					<input 
						type="radio" 
						[value]="false" 
						name="checkedIn" 
						[ngModel]="detail?.checkedIn"
						(ngModelChange)="toggleCheckIn($event)"
					>
					No
				</label>
			</div>
			<div *ngIf="form.value.checkedIn">
				Check in date:
				<input 
					type="number" 
					[value]="false" 
					name="checkInDate" 
					[ngModel]="detail?.checkInDate"
					(ngModelChange)="toggleCheckIn($event)"
				>
			</div>
			{{ form.value | json }}
		</form>
	`,
})
export class PassengerFormComponent {
	@Input() //
	public detail: IPassenger

	public toggleCheckIn(checkedIn: boolean) {
		if (checkedIn) {
			this.detail.checkInDate = Date.now()
		}
	}
}
