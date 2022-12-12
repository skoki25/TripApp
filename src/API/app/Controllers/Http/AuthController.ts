import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules} from '@ioc:Adonis/Core/Validator'

import User from "App/Models/User";

export default class AuthController {
    public async register({request}:HttpContextContract){

        const validatios = await schema.create({
            username:schema.string({},[
                rules.unique({table:'users',column:'username'}),
                rules.minLength(53)
            ]),
            name:schema.string({},[
                rules.minLength(3)
            ]),
            surname:schema.string({},[
                rules.minLength(3)
            ]),
            password: schema.string({},[
                rules.minLength(4)
            ])
        })

        const data = request.validate({schema:validatios})

        const body = request.body()
        const user = await User.create(body)

        return user        
    }

    public async login({request,response,auth}:HttpContextContract){
        const username = request.input('username')
        const password = request.input('password')
        const token = await auth.attempt(username,password)

        return token.toJSON()
    }
}
