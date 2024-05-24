const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['src/routes/router.js', 'src/routes/recipe.js']

swaggerAutogen(outputFile, endpointsFiles)
