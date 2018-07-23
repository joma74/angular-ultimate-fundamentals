import { Injectable } from "@angular/core"
import { Headers, Http, RequestOptions, Response } from "@angular/http"
import { IPassenger } from "./models/passenger.interface"

const PASSENGER_API = "/api/passengers"

@Injectable()
export class PassengerDashboardService {
	constructor(private http: Http) {}
	public getPassengers(): Promise<IPassenger[]> {
		return this.http
			.get(PASSENGER_API)
			.toPromise()
			.then((response: Response) => {
				return response.json()
			})
	}

	public updatePassenger(passenger: IPassenger): Promise<IPassenger> {
		const headers = new Headers({
			"Content-Type": "application/json",
		})
		const options = new RequestOptions({
			headers,
		})
		return this.http
			.put(`${PASSENGER_API}/${passenger.id}`, passenger, options)
			.toPromise()
			.then((response: Response) => {
				return response.json()
			})
	}

	public removePassenger(passenger: IPassenger): Promise<IPassenger> {
		return this.http
			.delete(`${PASSENGER_API}/${passenger.id}`)
			.toPromise()
			.then((response: Response) => {
				return response.json()
			})
	}
}
