## Available Scripts

In the project directory, you can run postgres db:

### `docker build .`

This will create a postgres docker image.

### `docker run --name some-postgres -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword -d postgres`

This will create a postgres "some-postgres" being the container name and "postgres" the image name you created.

### `docker exec -it postgres-container psql -U postgres`

The above command helps you interact with your postgres db to create databases and tables.

### `CREATE TABLE details (ID SERIAL PRIMARY KEY,firstname VARCHAR(30),lastname VARCHAR(30),email VARCHAR(30),message VARCHAR(30));`

### `CREATE TABLE userdetails (ID SERIAL PRIMARY KEY,firstname VARCHAR(30),lastname VARCHAR(30),email VARCHAR(30),country VARCHAR(30),sector VARCHAR(30),phone VARCHAR(30));`

The above commands create SQL tables.

In the project directory, you can run express server:

### `docker build .`

Run server express container:

### `docker run -d -p 4000:4000 image_name`

Enjoy coding!!!