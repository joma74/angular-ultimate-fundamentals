import { Injectable } from "@angular/core"
import { Headers, Http, RequestOptions, Response } from "@angular/http"
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

	public updatePassenger(passenger: IPassenger): Observable<IPassenger> {
		const headers = new Headers({
			"Content-Type": "application/json",
		})
		const options = new RequestOptions({
			headers,
		})
		return this.http
			.put(`${PASSENGER_API}/${passenger.id}`, passenger, options)
			.map((response: Response) => {
				return response.json()
			})
	}

	public removePassenger(passenger: IPassenger): Observable<IPassenger> {
		return this.http
			.delete(`${PASSENGER_API}/${passenger.id}`)
			.map((response: Response) => {
				return response.json()
			})
	}
}
