import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { HttpModule } from "@angular/http"
import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component"
import { PassengerDetailComponent } from "./components/passenger-detail/passenger-detail.component"
import { PassengerFormComponent } from "./components/passenger-form/passenger-form.component"
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component"
import { PassengerViewerComponent } from "./containers/passenger-viewer/passenger-viewer.component"
import { PassengerDashboardService } from "./passenger-dashboard.service"

@NgModule({
	declarations: [
		PassengerCountComponent,
		PassengerDetailComponent,
		PassengerDashboardComponent,
		PassengerViewerComponent,
		PassengerFormComponent,
	],
	exports: [PassengerDashboardComponent, PassengerViewerComponent],
	imports: [CommonModule, HttpModule, FormsModule],
	providers: [PassengerDashboardService],
})
export class PassengerDashboardModule {}
