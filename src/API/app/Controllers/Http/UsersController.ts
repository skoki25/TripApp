import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController{

    public async index(){
        return User.all()
    }

    public async store({request,response}:HttpContextContract){
        const body =request.body()
        const user = await  User.create(body)
        response.status(201)
        return user
    }

    public async show({params}: HttpContextContract){
        const user = User.findOrFail(params.is)
        return user
    }

    public async update({params,request}:HttpContextContract){
        const user = await User.findOrFail(params.id)
        const body =request.body()
        user.name = body.name
        user.age = body.age
        user.surname = body.surname
        user.save()
        return user
    }

    public async destroy({params}:HttpContextContract){
        const user = await User.findOrFail(params.id)
        return user.delete()
    }
}
