import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { HomeComponent } from "./home.component"
import { NotFoundComponent } from "./not-found.component"

const routes: Routes = [
	{ path: "", component: HomeComponent, pathMatch: "full" },
	{ path: "**", component: NotFoundComponent },
]

@NgModule({
	exports: [RouterModule],
	imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
