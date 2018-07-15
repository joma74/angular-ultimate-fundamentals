import { TestBed } from "@angular/core/testing"
import { FormsModule } from "@angular/forms"
import { AppComponent } from "./app.component"

describe("App", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [AppComponent],
			imports: [FormsModule],
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
