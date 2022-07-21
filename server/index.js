import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/images', express.static('images'));

app.use('/api', routes)


const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://admin:RIz43lrl0ee04djI@cluster0.zdkfr.mongodb.net/test?retryWrites=true&w=majority');
        app.listen(4000, () => console.log(`Сервер запущен на порте 4000...`));
    } catch (e) {
        console.error('Error', e.message);
        process.exit(1);
    }
};

await start();
