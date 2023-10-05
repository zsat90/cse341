// genterates a swagger.json file based on my routes/index.js file.
const swaggerAutogen = require('swagger-autogen');

const doc = {
  info: {
    title: 'Contacts API',
    description: 'API for CSE-341 Contacts'
  },
  host: 'localhost:3000',
  schemes: ['http']
};

const outputFiles = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFiles, endpointsFiles, doc);
