import { APP_BASE_HREF } from "@angular/common"
import { TestBed } from "@angular/core/testing"
import { FormsModule } from "@angular/forms"
import { HttpModule } from "@angular/http"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"

import { HomeComponent } from "./home.component"
import { NotFoundComponent } from "./not-found.component"
import { PassengerCountComponent } from "./passenger-dashboard/components/passenger-count/passenger-count.component"
import { PassengerDetailComponent } from "./passenger-dashboard/components/passenger-detail/passenger-detail.component"
import { PassengerFormComponent } from "./passenger-dashboard/components/passenger-form/passenger-form.component"
import { PassengerDashboardComponent } from "./passenger-dashboard/containers/passenger-dashboard/passenger-dashboard.component"
import { PassengerViewerComponent } from "./passenger-dashboard/containers/passenger-viewer/passenger-viewer.component"
import { PassengerDashboardService } from "./passenger-dashboard/passenger-dashboard.service"

describe("App", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				AppComponent,
				HomeComponent,
				NotFoundComponent,
				PassengerCountComponent,
				PassengerDashboardComponent,
				PassengerDetailComponent,
				PassengerViewerComponent,
				PassengerFormComponent,
			],
			imports: [AppRoutingModule, HttpModule, FormsModule],
			providers: [
				{ provide: APP_BASE_HREF, useValue: "/" },
				PassengerDashboardService,
			],
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
