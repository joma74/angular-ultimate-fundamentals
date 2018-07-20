import {
	Component,
	OnChanges,
	EventEmitter,
	Input,
	Output,
} from "@angular/core"
import { IPassenger } from "../../models/passenger.interface"

@Component({
	selector: "passenger-detail",
	styleUrls: ["passenger-detail.component.scss"],
	template: `
        <div>
            <span
                class="status"
                [ngClass]="{ 'checked-in' : detail.checkedIn, 'checked-out' : !detail.checkedIn }"
            ></span>
            <div *ngIf="editing">
                <input type="text" 
					[value]="detail.fullName"
					(input)="onChangeName(name.value)"
					#name
                >
            </div>
            <div *ngIf="!editing">{{ detail.fullName }}</div>
            <div class="date">Check in date: {{ detail.checkInDate ? (detail.checkInDate | date: 'yMMMMd' | uppercase ) : "Not checked in" }}</div>
            <div class="children">Children: {{ detail.children?.length || 0 }}</div>
            <button (click)="toggleEdit()">
                {{ editing ? 'Done' : 'Edit' }}
            </button>
            <button (click)="onRemove()">
                Remove
            </button>
        </div>
    `,
})
export class PassengerDetailComponent implements OnChanges {
	@Output() //
	public remove: EventEmitter<any> = new EventEmitter()

	@Output() //
	public edit: EventEmitter<any> = new EventEmitter()

	@Input() //
	public detail: IPassenger
	public editing: boolean

	public ngOnChanges(changes) {
		console.log(changes)
		if (changes.detail) {
			this.detail = { ...changes.detail.currentValue }
		}
	}

	public onChangeName(name: string) {
		this.detail.fullName = name
	}

	public toggleEdit() {
		if (this.editing) {
			this.edit.emit(this.detail)
		}
		this.editing = !this.editing
	}

	public onRemove() {
		this.remove.emit(this.detail)
	}
}
