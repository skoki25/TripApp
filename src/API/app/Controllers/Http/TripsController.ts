import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Trip from 'App/Models/Trip'
export default class TripsController {

    public async index(){
        const trip = await Trip.query()
            .preload("typTrip")
            .preload("tripPrice")
            .preload("users", (query) => {
                query.pivotColumns(['number_of_person'])
            })
            console.log("Daaa")
        return trip
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
