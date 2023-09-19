# Resource Wall
Resource Wall is a resource sharing site that allows users to save and share learning resources (like tutorials, blogs and videos) in a central place, publicly available to any user.  
It has been built using CSS, JavaScript, and EJS for the frontend, and NodeJS, Express, and PostgreSQL for the backend.

## Final Product

**Homepage with All Resources:**

!["View of Homepage with All Resources"](/public/docs/screenshots/homepage-screenshot.jpg)

**View of My Favourites:**

!["View of My Favourites"](/public/docs/screenshots/my-favourites-screenshot.jpg)

**View Details of Specific Resource:**

!["View of My Favourites"](/public/docs/screenshots/show-single-resource-screenshot.jpg)

**Add New Resource:**

!["View of Add New Resource page"](/public/docs/screenshots/add-new-resource-screenshot.jpg)

**User Profile View:**

!["View of User Profile page"](/public/docs/screenshots/my-profile-screenshot.jpg)

## Purpose
This project was created, designed, and built by: 
* [devvaru](https://github.com/Devvaru)
* [shivangi0109](https://github.com/shivangi0109)
* [kazvee](https://github.com/kazvee)  

for our Midterm Project at [Lighthouse Labs](https://www.lighthouselabs.ca/en/web-development-flex-program).

### Project Goals 
* Build a web app from start to finish using the tech and approaches learned to date
* Turn requirements into a working product
* Practice architecting an app in terms of UI/UX, Routes/API and Database
* Manage a multi-developer project with git version control
* Simulate the working world where we do not always get to select our colleagues, tech stack, or product features
* Collaborate, communicate, and project manage
* Simulate on the job structures and supports
* Practice demoing an app in a presentation to help prepare for the final project and employer interviews

### Project Outcomes & Learning Achievements
While working to build this project to successful completion, we: 
* Used git best practices (sans rebase) when working on a project with multiple members (branching and merging often), as well as the GitHub workflow (pull requests).
* Used the major steps of software development to execute the project; user stories, wireframes, ERD, Routes, etc.
* Collaborated effectively as a team to decide how to break out the work, setting up a good team structure and a pleasant and positive work dynamic.
* Engaged in a simulated on the job environment.
* Prepared and planned how to tailor our communication and presentation approach for a technical as well as and non-technical audience.
* Presented a web development project to a technical and non-technical audience.
* Had a lot of fun! 😃

## Features

### 📚 Save & Categorize Resources
Users can save external URLs along with a title, description, and image, and organize them using suggested topic categories

### 🔍 Search 
Search feature enables users to find already-saved resources that have been created by any user

### 🗨️ Comments 
Users can add a comment to any resource, for others to view

### 🤩 Update User Profile
Users can view and update their profile

### ⭐ Ratings 
Users can rate any resource

### 💙 Likes
Users can 'like' a resource, to add it to their favourites for quick access at a later time

### 📑 'My Resources' View
Users can view their entire collection of saved resources, including ones they have 'liked', in a single place

### 📖 Detailed Resource View
Users can view details about a single resource, the average user rating, and any comments added

## Dependencies
* [Express](https://expressjs.com/)
* [NodeJS](https://nodejs.org/) 10.x or above
* [npm](https://www.npmjs.com/) 5.x or above
* [cookie-session](https://www.npmjs.com/package/cookie-session)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [nodemon](https://www.npmjs.com/package/nodemon)
* [node-postgres](https://node-postgres.com)
* [Morgan](https://www.npmjs.com/package/morgan)
* [EJS](https://ejs.co/)
* [PostgreSQL](https://www.postgresql.org/) 6.x
* [jQuery](https://jquery.com/)
* [SASS](https://www.npmjs.com/package/sass/)

## Installation

### Getting Started
1. Fork this repository to your own GitHub account.
2. Clone your fork onto your local device.
3. Install all dependencies using the `npm install` (or `npm i`) command.

### Set up Database
4. In a terminal window, connect to your PostgreSQL environment using `psql` and your login credentials.
   * In some environments, the `startpostgres` command may need to be run first.
5. Create a new database using the `CREATE DATABASE resourcewall;` command, where 'resourcewall' is the name you want to call this new db.
6. Connect to the new database with the `\c resourcewall` command, where 'resourcewall' is whichever name you chose for your new db in the the previous step.

### Add Database Credentials to dotenv file (`.env`) 
7. Using the provided `.env.example` file as a template, create a new file named `.env` in the same folder.
8. Add your database name, username, and password.
    * Note: If running the app locally, the `DB_HOST` would be `localhost`, and for PostgreSQL the `PORT` will usually be `5432`.
    * For security reasons, the `.env` file has been added to the `.gitignore` file, so these sensitive details will not accidentally be published to GitHub.

### Fix Node-Sass Binary Binding Issue
9. Build the binding for your current node environment by running `npm rebuild node-sass` to recompile the package

### Set up Tables & Data
10. From the root folder, run the `npm run db:reset` command. It runs through each database schema (table definitions) and seeds (inserts) file, in order, and executes them against the database.
    * This command should be run each time there is a change to the database schema or seeds.
    * **Note:** you will lose all newly created (test) data each time this is run, since the schema files will tend to DROP the tables and recreate them.

### Start the App
11. Ensure you are running `psql`.
12. From the project root folder, start the web server using the `npm run local` command. The app will be served at [http://localhost:8080/](http://localhost:8080/).
13. Navigate to [http://localhost:8080/](http://localhost:8080/) in your browser.
14. Start adding or browsing resources! 🙂

## Acknowledgements & Thanks
* Photos provided by [Pexels](https://www.pexels.com/)
* Icons provided by [Avataaars](https://getavataaars.com/)
