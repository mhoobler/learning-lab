DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS speakers;
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS components;
DROP TABLE IF EXISTS project_data;
DROP TABLE IF EXISTS potentiometers;
DROP TABLE IF EXISTS leds;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(48) UNIQUE NOT NULL,
  password VARCHAR(48) NOT NULL
);

CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  name VARCHAR(48) NOT NULL,
  user_id INT NOT NULL,
  created TIMESTAMP DEFAULT now(),
  updated TIMESTAMP DEFAULT now(),
  UNIQUE (user_id, name),
  FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);

CREATE TABLE components(
  id SERIAL PRIMARY KEY,
  short_name VARCHAR(48) NOT NULL,
  long_name VARCHAR(96),
  description TEXT,
  category VARCHAR(48) NOT NULL,
  sub_category VARCHAR(48),
  manufacturer VARCHAR(48),
  image_url VARCHAR(48),
  max_rating INT,
  min_rating INT
);


CREATE TABLE project_data (
  id BIGSERIAL PRIMARY KEY,
  component_id INT NOT NULL,
  project_id INT NOT NULL,
  x INT DEFAULT 0,
  y INT DEFAULT 0,
  sprites VARCHAR(48)[],
  FOREIGN KEY (project_id) REFERENCES projects (id) ON DELETE CASCADE,
  FOREIGN KEY (component_id) REFERENCES components (id) ON DELETE CASCADE
);

CREATE TABLE potentiometers (
  pin1 VARCHAR(48),
  pin2 VARCHAR(48),
  pin3 VARCHAR(48)
) INHERITS (project_data);

CREATE TABLE leds (
  pin1 VARCHAR(48),
  pin2 VARCHAR(48)
) INHERITS (project_data);


CREATE TABLE speakers (
  pin1 VARCHAR(48),
  pin2 VARCHAR(48)
) INHERITS (project_data);

INSERT INTO components (
  short_name,
  category,
) VALUES (
  "Potentiometer",
  "Potentiometer",
);

INSERT INTO components (
  short_name,
  category,
) VALUES (
  "LED",
  "LED",
);

INSERT INTO components (
  short_name,
  category,
) VALUES (
  "Capacitor",
  "Capacitor",
);

INSERT INTO components (
  short_name,
  category,
) VALUES (
  "SP-1605",
  "Audio",
);
