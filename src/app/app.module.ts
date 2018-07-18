import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { PassengerDashboardModule } from "./passenger-dashboard/passenger-dashboard.module"

import { AppComponent } from "./app.component"

@NgModule({
	bootstrap: [AppComponent],
	declarations: [AppComponent],
	imports: [BrowserModule, CommonModule, PassengerDashboardModule],
})
export class AppModule {}
