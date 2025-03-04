const express = require('express')
const  Router  = express.Router();
const Controller = require('../Controllers/Controller')

Router.get('/TotalPop',Controller.TotalPopulation)

Router.get('/AvgPop',Controller.AveragePopulation)

Router.get('/TotalCountry',Controller.TotalCountry)

Router.get('/Top10PopCountry',Controller.Top10PopCountry)

Router.get('/TotalLanguage',Controller.TotalLanguage)

Router.get('/CountryArea',Controller.CountryArea)

Router.get('/CountryGNP',Controller.CountryGNP)

Router.get('/CountryDataTwoLevel',Controller.CountryDataTwoLevel)


module.exports= Router;