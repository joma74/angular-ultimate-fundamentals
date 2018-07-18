import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component"

@NgModule({
	declarations: [PassengerDashboardComponent],
	exports: [PassengerDashboardComponent],
	imports: [CommonModule],
})
export class PassengerDashboardModule {}
