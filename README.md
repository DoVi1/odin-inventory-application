# The Odin Project | Inventory Application

This Inventory App allows users to manage categories and items from an inventory database, providing the ability to perform CRUD operations on the inventory.

## First configuration

### 1 - Set env variables

The application requires a postgresql database to work.

The access to the database must be done in a local .env file.

See the sample file sample.env in root directory for the required env variables.

Rename the file .env and update the variables with your postgresql credentials.

### 2 - Initialize the database

The following command will put some data in the database:

npm run seed

## Run the application locally

Start your postgresql server using:

sudo service postgresql start

Start the application and watch for code changes

npm run dev

Open the application in a browser using the following url:

http://127.0.0.1:3000/

