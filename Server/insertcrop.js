const mongoose = require('mongoose');
const CropRecommendation = require('./models/CropRecommendation');

const crops =[    {
  "name": "Onion",
  "image": "https://www.jiomart.com/images/product/original/590003515/onion-1-kg-product-images-o590003515-p590003515-1-202408070949.jpg?im=Resize=(420,420)",
  "seedSelection": "Choose high-yield varieties like Bhima Super or N-53 that are resistant to local diseases. Ensure seeds are fresh and sourced from reputable suppliers. Look for varieties suited for the local climate to enhance growth potential.",
  "soilPreparation": "Onions thrive in well-drained sandy loam soil with a pH of 6.0-7.5. Prepare the soil by tilling and incorporating organic matter such as compost to improve fertility. Conduct a soil test to adjust nutrient levels. Ensure good drainage to prevent bulb rot.",
  "planting": "Sow seeds about 1 inch deep, spacing them 4-6 inches apart. The ideal planting time is from October to December, aligning with the kharif season. Thin seedlings to ensure proper airflow and bulb development. Water gently after sowing to promote germination.",
  "waterManagement": "Onions require consistent moisture, especially during bulb formation. Water the plants regularly, ensuring the soil remains moist but not waterlogged. Employ drip irrigation for efficient water use and to minimize fungal diseases. Monitor soil moisture levels closely.",
  "fertilizer": "Incorporate well-rotted manure before planting. Use a balanced NPK fertilizer (10:20:20) during land preparation and side-dress during bulb formation for optimal growth. Regularly monitor nutrient levels and adjust fertilization as needed.",
  "diseases": "Common diseases include downy mildew and onion fly. Implement crop rotation and maintain field hygiene to minimize disease risk. Use resistant varieties and regularly inspect plants for early signs of infection.",
  "pesticides": "Monitor for pests like thrips and onion maggots; use neem oil or insecticidal soap for control. Apply chemical pesticides only when necessary and in accordance with safety guidelines. Ensure minimal pesticide residues by following pre-harvest intervals.",
  "harvesting": "Harvest onions when the tops begin to yellow and fall over, usually 90-120 days after planting. Cure harvested bulbs in a well-ventilated area to enhance shelf life. Store in a cool, dry place to prevent spoilage.",
  "benefits": "Onions are a staple vegetable in Indian cuisine, providing good income for farmers. Their cultivation improves soil health through crop rotation. Onions are rich in antioxidants and vitamins, contributing to local food security.",
  "district": "Jalgaon"
},
{
  "name": "Cotton",
  "image": "https://cdn.britannica.com/18/156618-050-39339EA2/cotton-harvesting.jpg",
  "seedSelection": "Opt for high-yielding hybrid varieties such as Bt Cotton for better pest resistance and yield. Ensure seeds are sourced from certified suppliers to avoid disease. Select varieties that are adaptable to local climatic conditions for optimal growth.",
  "soilPreparation": "Cotton prefers well-drained, loamy soil with a pH of 6.0-7.5. Prepare the soil by plowing and incorporating organic matter to improve fertility. Conduct a soil test to adjust nutrient levels and improve soil structure. Ensure good drainage to prevent waterlogging.",
  "planting": "Sow seeds 1-2 inches deep, spacing them 3-4 feet apart. The ideal planting time is from June to July, coinciding with the monsoon season. Thin seedlings to prevent overcrowding, ensuring proper air circulation and light penetration.",
  "waterManagement": "Cotton requires moderate watering, especially during flowering and boll development. Water deeply once a week, adjusting frequency based on rainfall. Drip irrigation is recommended to optimize water usage and reduce weed growth.",
  "fertilizer": "Incorporate well-rotted manure before planting. Use a balanced NPK fertilizer (20:20:20) during land preparation and apply supplementary nitrogen during the growing season to enhance yield. Regularly monitor for nutrient deficiencies.",
  "diseases": "Common diseases include wilt and root rot. Implement crop rotation to minimize disease incidence and inspect plants regularly for signs of infection. Use resistant varieties and maintain good field sanitation to manage outbreaks.",
  "pesticides": "Monitor for pests like bollworms and aphids; use integrated pest management practices to control populations. Apply chemical pesticides only when necessary, following local regulations and safety guidelines. Ensure minimal pesticide residues by adhering to pre-harvest intervals.",
  "harvesting": "Harvest cotton bolls when they are dry and fluffy, typically 180-200 days after planting. Handle cotton carefully to avoid damaging fibers. Store harvested cotton in a dry, well-ventilated area to prevent moisture damage.",
  "benefits": "Cotton is a cash crop that provides significant income for farmers in Jalgaon. Its cultivation supports local textile industries and contributes to economic development. Growing cotton can improve soil structure through deep-root systems.",
  "district": "Jalgaon"
},
{
  "name": "Pomegranate",
  "image": "https://m.media-amazon.com/images/I/611a1wD9ZGL.jpg",
  "seedSelection": "Choose high-yield varieties like Bhagwa or Kandhari, known for their sweet taste and good market value. Ensure seeds are sourced from reputable nurseries and suited to local climate conditions for optimal growth.",
  "soilPreparation": "Pomegranate thrives in well-drained, sandy loam to clay loam soil with a pH of 6.0-7.5. Prepare the soil by tilling and incorporating organic matter like compost. Conduct a soil test to optimize nutrient levels. Ensure good drainage to prevent root rot.",
  "planting": "Plant young pomegranate saplings during the onset of the monsoon season. Space plants 10-12 feet apart to allow for proper growth. Water thoroughly after planting to establish roots, and mulch around the base to retain moisture.",
  "waterManagement": "Pomegranate requires moderate irrigation; avoid waterlogging. Water plants deeply every 2-3 weeks during the dry season. Drip irrigation is ideal for maintaining moisture levels without saturating the soil. Monitor for signs of drought stress.",
  "fertilizer": "Incorporate well-rotted manure before planting and use a balanced NPK fertilizer (10:20:20) during the growing season to support growth and fruit development. Regularly monitor for nutrient deficiencies and adjust fertilization as needed.",
  "diseases": "Common diseases include leaf spot and fruit rot. Implement crop rotation and maintain good field hygiene to minimize disease incidence. Use resistant varieties and regularly inspect plants for early signs of infection.",
  "pesticides": "Monitor for pests like fruit flies and aphids; use organic control methods such as neem oil. Apply chemical pesticides only when necessary and according to local regulations. Ensure minimal pesticide residues by adhering to pre-harvest intervals.",
  "harvesting": "Harvest pomegranates when they are fully ripe, usually 6-7 months after flowering. Check for a uniform color and metallic sound when tapped. Handle harvested fruits carefully to avoid bruising, and store in a cool, dry place.",
  "benefits": "Pomegranates are a nutritious fruit rich in antioxidants and vitamins. Their cultivation provides farmers with good market value and contributes to the local economy. Growing pomegranates promotes sustainable agriculture and enhances biodiversity.",
  "district": "Jalgaon"
},
{
  "name": "Guava",
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtPyELGVQNozZiOZHNQrD1HXHQWekfmNFDPw&s",
  "seedSelection": "Opt for varieties like Allahabad Safeda or White Guava, known for their sweet taste and disease resistance. Ensure seeds are sourced from reputable suppliers to avoid disease. Choose varieties suitable for local climatic conditions to enhance growth potential.",
  "soilPreparation": "Guava prefers well-drained, sandy loam soil with a pH of 6.0-7.5. Prepare the soil by tilling and incorporating organic matter like compost to enhance fertility. Conduct a soil test to optimize nutrient levels. Ensure good drainage to prevent waterlogging.",
  "planting": "Plant guava saplings during the monsoon season, spacing them 10-15 feet apart. Water thoroughly after planting to establish roots. Prune young plants to encourage branching and better fruiting in the future.",
  "waterManagement": "Guava requires moderate irrigation; ensure the soil remains moist but not waterlogged. Water plants deeply every 2-3 weeks, adjusting based on rainfall. Drip irrigation is ideal for maintaining moisture levels efficiently.",
  "fertilizer": "Incorporate well-rotted manure before planting and use a balanced NPK fertilizer (10:10:10) during the growing season to support healthy growth. Regularly monitor for nutrient deficiencies and adjust fertilization accordingly.",
  "diseases": "Common diseases include wilt and fruit rot. Implement crop rotation and maintain good field hygiene to minimize disease risk. Use resistant varieties and inspect plants regularly for early signs of infection.",
  "pesticides": "Monitor for pests like fruit flies and leaf-eating caterpillars; use neem oil or insecticidal soap for control. Apply chemical pesticides only when necessary, adhering to local regulations and safety guidelines. Ensure minimal pesticide residues by following pre-harvest intervals.",
  "harvesting": "Harvest guavas when they are fully ripe, usually 4-6 months after flowering. Check for a fragrant aroma and slight softness when gently squeezed. Handle harvested fruits carefully to avoid bruising, and store in a cool, dry place.",
  "benefits": "Guavas are a nutritious fruit, rich in vitamins and fiber. Their cultivation offers good income for farmers and contributes to local food security. Growing guavas promotes sustainable agriculture and biodiversity.",
  "district": "Jalgaon"
},
{
  "name": "Capsicum",
  "image": "https://www.jiomart.com/images/product/original/590003662/green-capsicum-500-g-product-images-o590003662-p590003662-1-202408070949.jpg?im=Resize=(420,420)",
  "seedSelection": "Choose hybrid varieties like K 322 or hybrids suited for the local climate, known for high yield and disease resistance. Ensure seeds are sourced from certified suppliers for better quality. Opt for varieties with good market demand to maximize income.",
  "soilPreparation": "Chili prefers well-drained loamy soil with a pH of 6.0-7.0. Prepare the soil by plowing and incorporating organic matter like compost to enhance fertility. Conduct a soil test to ensure optimal nutrient levels. Proper drainage is crucial to prevent root diseases.",
  "planting": "Sow seeds about ¼ inch deep in nursery trays or directly in the field, spacing them 2-3 feet apart. The ideal planting time is from June to September, aligning with the kharif season. Thin seedlings to ensure adequate spacing and airflow.",
  "waterManagement": "Chili requires moderate watering, especially during flowering and fruit setting. Water plants deeply once a week, adjusting frequency based on rainfall. Drip irrigation is recommended for efficient water use and to minimize fungal diseases.",
  "fertilizer": "Incorporate well-rotted manure before planting. Use a balanced NPK fertilizer (20:20:20) during land preparation and apply supplementary nutrients during the growing season to enhance yield. Regularly monitor for nutrient deficiencies.",
  "diseases": "Common diseases include blight and anthracnose. Implement crop rotation to minimize disease incidence and inspect plants regularly for early signs of infection. Use resistant varieties and maintain good field hygiene.",
  "pesticides": "Monitor for pests like aphids and whiteflies; use neem oil or insecticidal soap for control. Apply chemical pesticides only when necessary, following local regulations and safety guidelines. Ensure minimal pesticide residues by adhering to pre-harvest intervals.",
  "harvesting": "Harvest chili peppers when they reach the desired size and color, usually 60-90 days after planting. Cut peppers carefully to avoid damaging the plant. Store harvested chilies in a cool, dry place to prolong freshness.",
  "benefits": "Chilies are a popular spice in Indian cuisine, providing good income for farmers. Their cultivation can improve soil health through crop rotation. Growing chilies contributes to local food security and promotes sustainable agriculture.",
  "district": "Jalgaon"
}  ];

module.exports = crops;

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
