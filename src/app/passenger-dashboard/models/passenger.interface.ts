export interface IPassenger {
	id: number
	fullName: string
	checkedIn: boolean
	checkInDate?: number
	children?: IChild[]
}

export interface IChild {
	name: string
	age: number
}
