import { TestBed } from "@angular/core/testing"

import { AppComponent } from "./app.component"
import { PassengerCountComponent } from "./passenger-dashboard/components/passenger-count/passenger-count.component"
import { PassengerDetailComponent } from "./passenger-dashboard/components/passenger-detail/passenger-detail.component"
import { PassengerDashboardComponent } from "./passenger-dashboard/containers/passenger-dashboard/passenger-dashboard.component"
import { PassengerDashboardService } from "./passenger-dashboard/passenger-dashboard.service"

describe("App", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				AppComponent,
				PassengerCountComponent,
				PassengerDashboardComponent,
				PassengerDetailComponent,
			],
			providers: [PassengerDashboardService],
		})
	})

	it("should work", () => {
		const fixture = TestBed.createComponent(AppComponent)
		expect(fixture.componentInstance instanceof AppComponent).toBe(
			true,
			"should create AppComponent",
		)
	})
})
