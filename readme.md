#Dockerize postgres
##Pull Postgres docker image from dockerhub
docker pull postgres

##Spin up postgres container "some-pstgres" is the container name and "postgres" is the image name
docker run --name some-postgres -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword -d postgres

##Access the postgres container
docker exec -it postgres-container psql -U postgres

##Run postgres SQL commands
CREATE TABLE details (
  ID SERIAL PRIMARY KEY,
  firstname VARCHAR(30),
  lastname VARCHAR(30),
  email VARCHAR(30),
  message VARCHAR(30)
);

CREATE TABLE userdetails (
  ID SERIAL PRIMARY KEY,
  firstname VARCHAR(30),
  lastname VARCHAR(30),
  email VARCHAR(30),
  country VARCHAR(30),
  sector VARCHAR(30),
  phone VARCHAR(30)
);

#Run server
##Build backend image
docker build .

##Spin up backend container
docker run -d -p 4000:4000 image-name
