import { IPassenger } from "./models/passenger.interface"

export class PassengerDashboardService {
	public getPassengers(): IPassenger[] {
		return [
			{
				checkInDate: null,
				checkedIn: false,
				children: [{ name: "Ted", age: 13 }, { name: "Alice", age: 18 }],
				fullName: "Rose",
				id: 1,
			},
			{
				checkInDate: 149160600000,
				checkedIn: true,
				children: null,
				fullName: "Stephen",
				id: 2,
			},
		]
	}
}