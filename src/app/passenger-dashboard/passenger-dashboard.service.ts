import { Injectable } from "@angular/core"
import { Http, Response } from "@angular/http"
import { Observable } from "rxjs/Observable"
import { IPassenger } from "./models/passenger.interface"

const PASSENGER_API = "/api/passengers"

@Injectable()
export class PassengerDashboardService {
	constructor(private http: Http) {}
	public getPassengers(): Observable<IPassenger[]> {
		return this.http.get(PASSENGER_API).map((response: Response) => {
			return response.json()
		})
	}
}
