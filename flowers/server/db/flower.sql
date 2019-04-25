DROP TABLE flowers;

CREATE TABLE flowers(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  sun VARCHAR(255),
  water VARCHAR(255),
  soil VARCHAR(255)
);



INSERT INTO flowers (name, sun, water, soil) VALUES ('Monstera', 'Bright but indirect light', 'Moist but not too wet', 'Good potting compost');
INSERT INTO flowers (name, sun, water, soil) VALUES ('Fern', 'Bright but indirect light', 'Evenly moist but not too wet', 'Good potting compost');
INSERT INTO flowers (name, sun, water, soil) VALUES ('Mother-In-Laws Tongue', 'Bright indirect but tolerates some shade', 'Only water when dry compost', 'Good potting compost');
INSERT INTO flowers (name, sun, water, soil) VALUES ('Air Plant', 'Bright but indirect light', 'Misting with water a couple of times a week', 'Doesnt need to grow in compost');
INSERT INTO flowers (name, sun, water, soil) VALUES ('Venus Flytrap', 'Bright filtered or direct light', 'Pot inside of saucer with some water', 'Specialist carnivous compost');
