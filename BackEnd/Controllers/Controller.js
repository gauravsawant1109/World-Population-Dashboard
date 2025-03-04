// const { query } = require('express')
const db = require('../Config/Config')

function TotalPopulation(req, res) {
    try {
        const query1 = 'select sum(population) as TotalPop from country ;'
        db.query(query1, (error, result) => {
            if (error) throw error;
            res.status(200).send({ success: true, TotalPopulation: result[0].TotalPop })
        })
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
};

function AveragePopulation(req, res) {
    try {
        const query2 = 'select avg(population) as AvgPop  from country;'
        db.query(query2, (error, result) => {
            if (error) throw error;
            res.status(200).send({ success: true, AveragePopulation: result[0].AvgPop })
        })
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
};

function TotalCountry(req, res) {
    try {
        const query3 = 'select count(*) as TotalCountry from country;'
        db.query(query3, (error, result) => {
            if (error) throw error;
            res.status(200).send({ success: true, TotalCountry: result[0].TotalCountry })
        })

    } catch (error) {
        res.status(200).send({ error: error.message })
    }
}

function Top10PopCountry(req, res) {
    try {
        const query4 = 'select  c.name ,c.Population,min(cl.Language) as CountryLanguage ,c.Continent,c.Region,c.Capital, c.Code as CountryCode  from country c join countrylanguage cl on cl.CountryCode = c.code  group by c.name ,c.Population,c.Continent,c.Region,c.Capital, c.Code order by  Population  desc limit 10 ;'
        db.query(query4, (error, result) => {
            if (error) throw error;
            res.status(200).send({ success: true, Top10PopCountry: result })
           
            
        })

    } catch (error) {
        res.status(200).send({ error: error.message })
    }
}



function TotalLanguage(req, res) {
    try {
        const query5 = 'select count(Language) as TotalLanguages from countrylanguage;'
        db.query(query5, (error, result) => {
            if (error) throw error;
            res.status(200).send({ success: true, TotalLanguage:result[0].TotalLanguages})
        })

    } catch (error) {
        res.status(400).send({ error: error.message })
    }
}

function CountryArea(req, res) {
    try {
        const query6 = 'select name as CountryName ,SurfaceArea as Area from country order by SurfaceArea desc limit 10;'
        db.query(query6, (error, result) => {
            if (error) throw error;
            res.status(200).send({ success: true, CountryArea: result })
        })

    } catch (error) {
        res.status(200).send({ error: error.message })
    }
}

function CountryGNP(req, res) {
    try {
        const query7 = 'select name,GNP  from country order by GNP desc limit 10;'
        db.query(query7, (error, result) => {
            if (error) throw error;
            res.status(200).send({ success: true, CountryGNP: result })
        })

    } catch (error) {
        res.status(200).send({ error: error.message })
    }
}


function CountryDataTwoLevel(req, res) {
    try {
        const query8 = 'select c.name as country ,cl.Language as language from countrylanguage cl join country c on c.code = cl.CountryCode order by c.name asc limit 50 ;'
        db.query(query8, (error, result) => {
            if (error) throw error;
            res.status(200).send({ success: true, CountryWithLang: result })
        })

    } catch (error) {
        res.status(200).send({ error: error.message })
    }
}




module.exports = {
    TotalPopulation,
    AveragePopulation,
    TotalCountry,
    Top10PopCountry,
    TotalLanguage,
    CountryArea,
    CountryGNP,
    CountryDataTwoLevel
}