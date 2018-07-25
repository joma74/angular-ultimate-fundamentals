import { Component, Input } from "@angular/core"
import { IBaggage } from "../../models/baggage.interface"
import { IPassenger } from "../../models/passenger.interface"

@Component({
	selector: "passenger-form",
	styleUrls: ["passenger-form.component.scss"],
	template: `
		<form #form="ngForm" novalidate class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
			{{ detail | json }}
			<div>
				<label class="text-grey-darker text-sm font-bold mb-2">Passenger name: </label>
				<input 
					type="text" 
					name ="fullName"
					required
					#fullName="ngModel"
					[ngModel]="detail?.fullName"
					class="shadow appearance-none border rounded py-2 px-3 text-grey-darker leading-tight"
				>
				<div *ngIf="fullName?.errors?.required && fullName.dirty" 
					class="error"
				>Passenger name is required
				</div>
			</div>
			<div>
				<label class="text-grey-darker text-sm font-bold mb-2">Passenger ID: </label>
				<input 
					type="number" 
					name ="id" 
					required
					#id="ngModel"
					[ngModel]="detail?.id"
					class="shadow appearance-none border rounded py-2 px-3 text-grey-darker leading-tight"
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
