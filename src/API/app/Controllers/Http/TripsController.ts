import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Trip from 'App/Models/Trip'
export default class TripsController {

    public async index(){
        const trips = await Trip.query()
            .preload("typTrip")
            .preload("tripPrice")
            .preload("users", (query) => {
                query.pivotColumns(['number_of_person'])
            })

        trips.forEach((trip) =>{
            trip.users.forEach(user =>{
                user.number_of_person = user.$extras.pivot_number_of_person
                user.serialize()
            })
        })
        return trips
    }

    public async store({request,response}:HttpContextContract){
        const body =request.body()
        const trip = await  Trip.create(body)
        response.status(201)
        return trip
    }

    public async tripShow({params}: HttpContextContract){
        return Trip.findOrFail(params.id);
    }

    public async tripUserShow({params}: HttpContextContract){
        const trip  = Trip.findOrFail(params.id);
        return (await trip).$getRelated('Users');
        
    }
}
