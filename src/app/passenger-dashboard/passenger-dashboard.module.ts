import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { HttpModule } from "@angular/http"
import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component"
import { PassengerDetailComponent } from "./components/passenger-detail/passenger-detail.component"
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component"
import { PassengerDashboardService } from "./passenger-dashboard.service"

@NgModule({
	declarations: [
		PassengerCountComponent,
		PassengerDetailComponent,
		PassengerDashboardComponent,
	],
	exports: [PassengerDashboardComponent],
	imports: [CommonModule, HttpModule],
	providers: [PassengerDashboardService],
})
export class PassengerDashboardModule {}
