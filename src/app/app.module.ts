import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { PassengerDashboardModule } from "./passenger-dashboard/passenger-dashboard.module"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { HomeComponent } from "./home.component"
import { NotFoundComponent } from "./not-found.component"

@NgModule({
	bootstrap: [AppComponent],
	declarations: [AppComponent, HomeComponent, NotFoundComponent],
	imports: [
		BrowserModule,
		CommonModule,
		PassengerDashboardModule,
		AppRoutingModule,
	],
})
export class AppModule {}
