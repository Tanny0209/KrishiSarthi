const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const CropPrice = require("../models/CropPrice");
const router = express.Router();

// Route to scrape data from the external website and return as JSON
router.get("/scrape/today", async (req, res) => {
  try {
    const url = "https://market.todaypricerates.com/Maharashtra-vegetables-price";
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const crops = [];
    
    // Scrape the crops data
    $('table tfoot tr').each((index, element) => {
      const name = $(element).find('td').eq(0).text().trim();  // Vegetable Name
      const unit = $(element).find('td').eq(1).text().trim();  // Unit of Measure
      const market = parseFloat($(element).find('td').eq(2).text().trim().replace('₹', '').replace(',', ''));  // Wholesale Price
      const retail = $(element).find('td').eq(3).text().trim();  // Retail Price (keep as string to include ranges)
      const supermall = $(element).find('td').eq(4).text().trim();  // Shopping Mall Price (keep as string to include ranges)

      // Check if the values are valid before pushing to the array
      if (name && unit && !isNaN(market)) {
        crops.push({
          name,
          unit,
          market,
          retail,
          supermall,
        });
      }
    });

    if (crops.length === 0) {
      throw new Error("No crops found");
    }

    // Optional: Save to MongoDB or update existing records
    await CropPrice.deleteMany();  // Delete old records
    await CropPrice.insertMany(crops);  // Insert new records

    res.json(crops);  // Send the scraped data back as JSON
  } catch (error) {
    console.error("Error scraping crop data:", error);
    res.status(500).json({ message: "Failed to scrape data", error: error.message });
  }
});


module.exports = router;
