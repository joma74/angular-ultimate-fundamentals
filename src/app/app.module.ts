import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { RouterModule, Routes } from "@angular/router"

import { PassengerDashboardModule } from "./passenger-dashboard/passenger-dashboard.module"

import { AppComponent } from "./app.component"
import { HomeComponent } from "./home.component"

const routes: Routes = [
	{ path: "", component: HomeComponent, pathMatch: "full" },
]

@NgModule({
	bootstrap: [AppComponent],
	declarations: [AppComponent, HomeComponent],
	imports: [
		BrowserModule,
		CommonModule,
		PassengerDashboardModule,
		RouterModule.forRoot(routes),
	],
})
export class AppModule {}
