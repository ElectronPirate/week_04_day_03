DROP TABLE flowers;

CREATE TABLE flowers(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  light VARCHAR(255),
  water VARCHAR(255),
  temperature VARCHAR(255),
  humidity VARCHAR(255),
  feed VARCHAR(255),
  height_growth VARCHAR(255),
  toxicity VARCHAR(255),
  origin VARCHAR(255),
  monday VARCHAR(255),
  tuesday VARCHAR(255),
  wednesday VARCHAR(255),
  thursday VARCHAR(255),
  friday VARCHAR(255),
  saturday VARCHAR(255),
  sunday VARCHAR(255),
  image VARCHAR(255)
);



INSERT INTO flowers (
  name, light, water, temperature, humidity, feed, height_growth, toxicity, origin, image) VALUES (
'Satin Pothos',
'Moderate light levels',
'Water when slightly dry. Drought tolerant. Too much water will kill the plant',
'Happy in room temperatures from 15-24°C',
'Prefers increased levels of humidity but will tolerate normal conditions',
'Apply a weak general purpose fertiliser during the summer',
'Moderate to slow growing. Trails will grow to 3m. Cut back to maintain desired length',
'Mildly toxic to humans, harmful to pets. Keep away from children and animals',
'Southeast Asia', 'satin.jpg');
INSERT INTO flowers (
  name, light, water, temperature, humidity, feed, height_growth, toxicity, origin, image) VALUES (
'Jade Plant',
'Bright, indirect sun light. A few hours of direct sunlight a day would not go amiss. It will tolerate some degree of shade but will not do as well',
'Water well then allow the soil to dry out before watering again. Crassula does not like having its roots sitting in water',
'Average room temperatures of 15-24°C with a minimum of 10°C',
'Normal humidity conditions, although they will tolerate higher levels and dont mind being misted',
'A weak solution of liquid fertiliser once a month or so',
'Average height 50-80cm. Ultimate height can reach over 120cm. Slow growing once established',
'Known to be poisonous to pets. Keep away from animals',
'This is a nursery produced hybrid', 'jade.jpg');
INSERT INTO flowers (
  name, light, water, temperature, humidity, feed, height_growth, toxicity, origin, image) VALUES (
'Autograph Tree',
'Clusia rosea like lots of bright light and thrive outdoors in full sun in tropical climates. Grown indoors as houseplants, they will cope with medium light levels and some degree of shade',
'Water well, keeping the soil moist at all times, however these are tough plants and can resist periods of drought',
'Average to warm household temperatures between 16-29°C are ideal and the warmer the better. Will not tolerate cooler temperatures below 10°C',
'lusia rosea enjoy high humidity levels. Place on a shallow gravel tray filled with water and mist regularly. A spell outside in warm summer rain or a session in the shower works wonders',
'Liquid fertiliser can be applied during the growing season',
'Grown outside as a tree this plant can reach heights of 6m. Indoors they can be kept as compact houseplants between 50-100cm. Clusia rosea is fast growing',
'An irritant if eaten. Keep out of reach of children and animals',
'Caribbean', 'autograph.jpg');
INSERT INTO flowers (
  name, light, water, temperature, humidity, feed, height_growth, toxicity, origin, image) VALUES (
'Light Green Beetle Radiator Plant',
'Peperomia angulata are fine in moderate light conditions and will tolerate shade. Avoid direct sunlight. They do really well under fluorescent lights, making them ideal for the office or basement flat',
'Water when the soil has almost dried out, Radiator Plants don’t like to be over-watered. Use soft water if possible and water from below. Water is stored in the leaves making these plants drought resistant',
'Average to warm temperatures from 18-24°C but can cope with as low as 10°C at a push. Avoid draughts',
'Peperomia enjoy raised humidity levels but most of the time they do just fine in normal household conditions',
'Apply a half-strength balanced fertiliser once or twice during the growing season',
'Ultimate height 20-30cm and slow growing',
'Not toxic',
'Florida, Mexico and the Caribbean', 'radiator.jpg');
INSERT INTO flowers (
  name, light, water, temperature, humidity, feed, height_growth, toxicity, origin, image) VALUES (
'Boston Fern',
'Moderate light requirements, anywhere from bright, indirect sunlight to light shade',
'Keep the soil moist at all times. Water when the surface becomes slightly dry. Do not overwater and use lukewarm, soft water where possible',
'Average household temperatures 16-24°C, but no lower than 12°C. Avoid cold draughts',
'These ferns prefer higher humidity levels and dont do well in dry air conditions. Do not place near radiators etc',
'Liquid fertiliser can be applied occasionally during the growing season',
'Ultimate height 1m. Fast growing',
'Not toxic',
'North America', 'fern.jpg');
INSERT INTO flowers (
  name, light, water, temperature, humidity, feed, height_growth, toxicity, origin, image) VALUES (
'Swiss Cheese Plant',
'Prefers bright, indirect light but will tolerate moderate shade. Avoid direct sunlight',
'Water when the soil has started to dry out',
'Monstera deliciosa likes warm conditions from 18-27°C. Anything lower than this will reduce the plants growth rate. It will tolerate 12°C and above but keep away from cold draughts',
'Happy with average to high humidity levels. Cannot cope in dry air situations',
'Feed once a month with a balanced fertiliser during the growing period',
'Use a moss pole to support the plant (the roots will cling to this for support) or cut back if it gets too big. Slow to moderate growth, but depends upon the conditions',
'Leaves are poisonous, keep away from pets and children',
'Mexico and Central America', 'monstera.jpg');
INSERT INTO flowers (
  name, light, water, temperature, humidity, feed, height_growth, toxicity, origin, image) VALUES (
'Chinese Money Plant',
'Moderate to bright, indirect light but will tolerate partial shade. Avoid direct sunlight',
'Water when the soil has begun to dry out. Note: the leaves will begin to droop if the plant needs to be watered. Don’t let the plant sit in water',
'Average to warm temperatures from 16-24°C but can cope with as low as 10°C',
'Pilea peperomioides need fairly high humidity levels. Use a pebble tray or water surround',
'Apply a half-strength balanced fertiliser once or twice a month during the growing season',
'Ultimate height 25-30cm and fast growing',
'Not toxic',
'Southern China', 'money.jpg');
INSERT INTO flowers (
  name, light, water, temperature, humidity, feed, height_growth, toxicity, origin, image) VALUES (
'Peace Lily',
'Moderate to bright, indirect light preferred. Will adapt to lower light levels',
'Keep the soil moist at all times. Allow the top of the soil to dry out slightly before watering. The plant will start to droop if it needs more water. Ensure adequate drainage',
'Average room temperatures from 18-24°C but can cope with as low as 12°C in winter',
'Enjoys increased levels of humidity if possible. Mist regularly',
'Apply a weak dose of a liquid fertiliser once or twice a month during the growing season',
'Ultimate height 70cm. Moderate growth rate',
'Mildly toxic if eaten',
'South America', 'lily.jpg');
INSERT INTO flowers (
  name, light, water, temperature, humidity, feed, height_growth, toxicity, origin, image) VALUES (
'Zenzi ZZ Plant',
'Shade tolerant house plant. Happy anywhere from low to bright light, however avoid direct sunlight',
'Water when slightly dry. Drought tolerant. Do not over-water',
'Average to cool room temperatures from 15-24°C but can cope with as low as 8°C',
'Doesnt need high humidity levels',
'Apply a weak dose of a liquid fertiliser once a month during the growing season',
'Ultimate height 30-45cm. Slow to moderate growth rate depending upon conditions',
'Mildly toxic if ingested',
'East Africa', 'zenzi.jpg');
