const carController = require('../controllers/carController');

const routes = [
    {
        method: 'GET',
        url: '/api/cars',
        handler: carController.getCars
    },
    {
        method: 'GET',
        url: '/api/cars/:id',
        handler: carController.getSingleCar
    },
    {
        method: 'POST',
        url: '/api/cars',
        handler: carController.addCar,
        schema: {
            description: 'add new car',
            tags: ['user', 'code'],
            summary: 'Add New Car',
            params: {
              type: 'object',
              properties: {
                id: {
                  type: 'string',
                  description: 'user id'
                }
              }
            }
        }
      },
      {
        method: 'PUT',
        url: '/api/cars/:id',
        handler: carController.updateCar
      },
      {
        method: 'DELETE',
        url: '/api/cars/:id',
        handler: carController.deleteCar
      }
]

module.exports = routes;