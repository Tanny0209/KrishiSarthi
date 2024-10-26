const mongoose = require('mongoose');
const CropRecommendation = require('./models/CropRecommendation');

const crops = [
 
];

async function insertCrops() {
  try {
    await mongoose.connect('mongodb+srv://krishisarthi0:ZiT6OAEKbsXwwiAH@krishisarthi.6j38d.mongodb.net/?retryWrites=true&w=majority&appName=KrishiSarthi', { useNewUrlParser: true, useUnifiedTopology: true });
    await CropRecommendation.insertMany(crops);
    console.log('Crops inserted successfully!');
  } catch (error) {
    console.error('Error inserting crops:', error);
  } finally {
    await mongoose.disconnect();
  }
}

insertCrops();
