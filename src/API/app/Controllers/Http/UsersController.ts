import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules} from '@ioc:Adonis/Core/Validator'

import User from 'App/Models/User'

export default class UsersController{

    public async index(){
        return User.all()
    }

    public async store({request,response}:HttpContextContract){

        const validatios = await schema.create({
            username:schema.string({},[
                rules.unique({table:'users',column:'username'})
            ]),
            password: schema.string({},[
                    rules.confirmed()
            ])
        })

        const body = request.body();
        const user = await  User.create(body)
        return user
    }

    public async show({params}: HttpContextContract){
        const user = User.findOrFail(params.id)
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
