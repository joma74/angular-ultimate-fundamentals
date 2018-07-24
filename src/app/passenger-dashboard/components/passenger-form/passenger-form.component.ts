import { Component, Input } from "@angular/core"
import { IBaggage } from "../../models/baggage.interface"
import { IPassenger } from "../../models/passenger.interface"

@Component({
	selector: "passenger-form",
	styleUrls: ["passenger-form.component.scss"],
	template: `
		<form #form="ngForm" novalidate>
			{{ detail | json }}
			<div>
				Passenger name: 
				<input 
					type="text" 
					name ="fullName"
					required
					#fullName="ngModel"
					[ngModel]="detail?.fullName"
				>
				<div *ngIf="fullName?.errors?.required && fullName.dirty" 
					class="error"
				>Passenger name is required
				</div>
			</div>
			<div>
				Passenger ID: 
				<input 
					type="number" 
					name ="id" 
					required
					#id="ngModel"
					[ngModel]="detail?.id"
				>
				<div *ngIf="id?.errors?.required && id.dirty" 
					class="error"
				>Passenger ID is required
				</div>
			</div>
			<div>
				Checked in:
				<label>
					<input 
						type="checkbox" 
						name="checkedIn" 
						[ngModel]="detail?.checkedIn"
						(ngModelChange)="toggleCheckIn($event)"
					>
					Yes
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
			<div>
				Lagguage:
				<select 
					name="baggage"
					[ngModel]="detail?.baggage"
				>
					<option
						*ngFor="let item of baggage"
						[value]="item.key"
						[selected]="item.key"
					>
						{{ item.value }}
					</option>
				</select>
			</div>
			<div>{{ form.value | json }}</div>
			<div>Valid: {{ form.valid | json }}</div>
			<div>Invalid: {{ form.invalid | json }}</div>
		</form>
	`,
})
export class PassengerFormComponent {
	@Input() //
	public detail: IPassenger

	public baggage: IBaggage[] = [
		{ key: "none", value: "No baggage" },
		{ key: "hand-only", value: "Hand baggage" },
		{ key: "hold-only", value: "Hold baggage" },
		{ key: "hand-hold", value: "Hand and Hold baggage" },
	]

	public toggleCheckIn(checkedIn: boolean) {
		if (checkedIn) {
			this.detail.checkInDate = Date.now()
		}
	}
}
