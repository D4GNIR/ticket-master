/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router
  .group(() => {
    router.get('/tickets', '#controllers/tickets_controller.index')
    router.post('/tickets', '#controllers/tickets_controller.store')
    router.get('/tickets/:id', '#controllers/tickets_controller.show')
    router.put('/tickets/:id', '#controllers/tickets_controller.update')
    router.delete('/tickets/:id', '#controllers/tickets_controller.destroy')
  })
  .prefix('/api')
