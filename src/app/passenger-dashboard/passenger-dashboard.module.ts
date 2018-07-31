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

import { RouterModule, Routes } from "@angular/router"

const routes: Routes = [
	{
		children: [
			{
				component: PassengerDashboardComponent,
				path: "",
			},
			{
				component: PassengerViewerComponent,
				path: ":id",
			},
		],
		path: "passengers",
	},
]

@NgModule({
	declarations: [
		PassengerCountComponent,
		PassengerDetailComponent,
		PassengerDashboardComponent,
		PassengerViewerComponent,
		PassengerFormComponent,
	],
	imports: [
		CommonModule,
		HttpModule,
		FormsModule,
		RouterModule.forChild(routes),
	],
	providers: [PassengerDashboardService],
})
export class PassengerDashboardModule {}
