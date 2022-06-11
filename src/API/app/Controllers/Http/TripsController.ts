import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Trip from 'App/Models/Trip'
import Users from 'Database/migrations/1651872045744_users'

export default class TripsController {

    public async index(){
        const trip = await Trip.query()
            .preload("typTrip")
            .preload("tripPrice")
            .preload("users")
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
