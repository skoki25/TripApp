/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() =>{
    Route.group(()=>{
        Route.get('/user','UsersController.index')
        Route.get('/user/:id','UsersController.show')
        Route.post('/user','UsersController.store')
        Route.put('/user/:id','UsersController.update')
        Route.delete('/user','UsersController.delete')
        Route.get('/trip','TripsController.index')
        Route.get('/trip/:id','TripsController.tripShow')
        Route.get('/trip/user/:id','TripsController.tripUserShow')

        Route.post('/trip','TripsController.sore')
    }).middleware('auth')

    Route.post('/register','AuthController.register')
    Route.post('/login','AuthController.login')

}).prefix('api')




