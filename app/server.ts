import { CraigslistScrapeService } from './services/CraigslistScrape.service';
import express from 'express';

import { CraigslistController } from './controllers';

const app: express.Application = express();

const port = process.env.port || 3001;

app.use('/craigslist', CraigslistController);
const craigslistScrapeService: CraigslistScrapeService = new CraigslistScrapeService();
const result = craigslistScrapeService.AveragePrice("2015 Honda Accord");
// const results = craigslistScrapeService.CardMetaData("2010 Honda Accord");
// const otherResults = craigslistScrapeService.AveragePrice("2016 Honda Accord", "Missouri");
// console.log(otherResults);




app.listen(port, () => {
    console.log("listening, always listening...");
});