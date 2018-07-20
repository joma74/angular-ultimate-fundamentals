import { Component, Input } from "@angular/core"
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
            {{ detail.fullName }}
            <div class="date">Check in date: {{ detail.checkInDate ? (detail.checkInDate | date: 'yMMMMd' | uppercase ) : "Not checked in" }}</div>
            <div class="children">Children: {{ detail.children?.length || 0 }}</div>
        </div>
    `,
})
export class PassengerDetailComponent {
	@Input() //
	public detail: IPassenger
}
