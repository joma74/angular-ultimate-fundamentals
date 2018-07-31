import { Component, EventEmitter, Input, Output } from "@angular/core"
import { IBaggage } from "../../models/baggage.interface"
import { IPassenger } from "../../models/passenger.interface"

@Component({
	selector: "passenger-form",
	styleUrls: ["passenger-form.component.scss"],
	template: `
		<form (ngSubmit)="handleSubmit(form.value, form.valid)" #form="ngForm" novalidate>
			<div class="form-fields">
				<div class="form-row">
					<div>
						<label title="Passenger name">Passenger name</label>
					</div>
					<div>
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
				</div>
				<div class="form-row">
					<div>
						<label title="Passenger ID">Passenger ID</label>
					</div>
					<div>
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
				</div>
				<div class="form-row">
					<div>
						<label>Checked in</label>
					</div>
					<div class="flex items-center">
						<input 
							type="checkbox" 
							name="checkedIn" 
							[ngModel]="detail?.checkedIn"
							(ngModelChange)="toggleCheckIn($event)"
						>
						<label class="pl-2">
							Yes
						</label>
					</div>
				</div>
				<div *ngIf="form.value.checkedIn" class="form-row">
					<div>
						<label>Check in date</label>
						</div>
					<div>
						<input 
							type="number" 
							[value]="false" 
							name="checkInDate" 
							[ngModel]="detail?.checkInDate"
							(ngModelChange)="toggleCheckIn($event)"
						>
					</div>
				</div>
				<div class="form-row">
					<div>
						<label>Lagguage</label>
					</div>
					<div class="relative">
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
						<div class="select-dropdown-chevron">
							<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
						</div>
					</div>
				</div>
			</div>
			<div class="form-actions-outer">
				<div class="form-actions-inner flex items-center">
					<div class="w-1/3"></div>
					<div class="w-2/3">
							<button 
								type="submit" 
								class="btn-primary"
								[disabled]="form.invalid"
							>
								Update passenger
							</button>
					</div>
				</div>
			</div>
		</form>
	`,
})
export class PassengerFormComponent {
	@Input() //
	public detail: IPassenger

	@Output() //
	public update: EventEmitter<IPassenger> = new EventEmitter<IPassenger>()

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

	public handleSubmit(passenger: IPassenger, isValid: boolean) {
		if (isValid) {
			this.update.emit(passenger)
		}
	}
}
