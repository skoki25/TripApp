import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Trip from 'App/Models/Trip'

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
}
