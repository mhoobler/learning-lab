DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS projects CASCADE;
DROP TABLE IF EXISTS components CASCADE;
DROP TABLE IF EXISTS project_data CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(48) UNIQUE NOT NULL,
  password VARCHAR(48) NOT NULL
);

INSERT INTO users (
  username,
  password
) VALUES (
  'user1',
  '12345'
), (
  'user2',
  '12345'
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

INSERT INTO projects (
  name,
  user_id
) VALUES (
  'user1project1',
  '1'
), (
  'user1project2',
  '1'
), (
  'user2project1',
  '2'
);



CREATE TABLE components (
  id SERIAL PRIMARY KEY,
  short_name VARCHAR(48) NOT NULL,
  long_name VARCHAR(96),
  description TEXT,
  category VARCHAR(48) NOT NULL,
  sub_category VARCHAR(48),
  manufacturer VARCHAR(48),
  image_url VARCHAR(48),
  specs JSON
);


CREATE TABLE project_data (
  id BIGSERIAL PRIMARY KEY,
  component_id INT NOT NULL,
  project_id INT NOT NULL,
  x INT DEFAULT 0,
  y INT DEFAULT 0,
  sprites VARCHAR(48)[],
  data JSON,
  FOREIGN KEY (project_id) REFERENCES projects (id) ON DELETE CASCADE,
  FOREIGN KEY (component_id) REFERENCES components (id) ON DELETE CASCADE
);


INSERT INTO components (
  short_name,
  category
) VALUES (
  'Potentiometer',
  'Potentiometer'
), (
  'LED',
  'LED'
), (
  'Capacitor',
  'Capacitor'
), (
  'SP-1605',
  'Audio'
);

