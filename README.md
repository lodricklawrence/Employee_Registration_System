# Employee_Registration_System

# Description

### Project origin
Employee_Registration_System is a full-stack project which i performed as one of the project given by my senior supervisors at Amatics Technologies Company ltd.

### What it can do
Employee_Registration_System is a project whereby the system user registers an employee's name and email credentials from the browser form and the credentials are be sent to the database for storage. 
Also a system user can fetch all the employees from a database and display them in a table in the browser, Also user can edit an employee credantials and update them and lastly the system 
user can delete an employee from the database.

### Technology used
In this project for frontend part i used React.JS and React-bootstrap for styling rendered react components at the browser. I used React.js because it has enable a developer to embedd
html elements inside a javascript file(JSX), So this has made me to save time when developing this system. Also React.JS contains Virtual DOM this helps in rendering components easily 
even when there are changes that have occured within the DOM tree.

In this project for backend part i used Node.JS with Fastify. Also i used prisma ORM for performing Creation, Reading, Updation and Deletion of Employees data in User table from database.

### Challenges and future adding features
One of the challenges faced in this project is implementation of React.JS in frontend part as i was new to it and this it was my first project using React.JS.

One of the features that i will add at this project in the feature is JWT authenitication.

# Installation guide
1. Install Node.js v16.14.2 in your local computer [Node Js](https://nodejs.org/en/).
2. Install Git as a version controller.
3. Copy the project repository directory URL from here.
4. Go to the directory in your computer where you want the cloned project to be placed.
5. Open the command line and run git clone [paste the URL] then run.
6. The project folders named frontend and backend are ready set in your local computer at that specific directory.

### Backend setup
7. Open the Command Line Interface(CLI) in your present directory then run the command cd backend. This will direct you to the backend folder.
8. Inside the backend folder rename example.env file to be .env.
9. After that open the terminal and run the command npm install. This will install all the dependencies present in package.json file into your backend folder.

### Frontend setup
10. Back to your root directory where you can access both frontend and backend cloned folders.
11. Open the Command Line Interface(CLI) in your present directory then run the command cd frontend. This will direct you to the frontend folder.
12. Inside the frontend folder open the terminal and run command npm install. This will install all the dependencies present in package.json file into your frontend folder.

# How to use the project

### Backend use
1. Create a database within your Database Management System either MYSQL, POSTGRESQL or any other.
2. Back to your root directory where you can access both frontend and backend cloned folders.
3. Open the Command Line Interface(CLI) in your present directory then run the command cd backend. This will direct you to the backend folder.
4. Inside the backend folder edit the credentials inside the .env file as instructed inside it. 
5. Within the schema.prisma file is where you I placed my model(database table) named User for more understanding visit [prisma docs](https://www.prisma.io/).
6. Open the terminal and run npx prisma migrate --dev. This will create migration file.
7. Visit your created database you will see a User table has been created with columns Id, email and name.
8. For further database books model updates within schema.prisma file run first npx prisma db pull then after updating the models run npx prisma db push within the CLI.
9. After all this setups run npm start to your terminal to initiate the express server.

### Frontend use
1. Back to your root directory where you can access both frontend and backend cloned folders.
2. Open the Command Line Interface(CLI) in your present directory then run the command cd frontend. This will direct you to the frontend folder.
3. Inside the frontend folder open the terminal and run command npm start inorder to initiate React.JS server.
4. Wait for a moment then you will observe the main route opens at localhost:3000 in your browser.
5. If it hasnot opened at the browser but the server is already initiated then open the browser and write localhost:3000 in the search engine and run.
6. Now both servers frontend and backend are running your are ready to test the functionalities well.

# Project End-points

### Backend
| HTTP Method  | URL |Functionality|
| ------------- | ------------- |-------|
| POST  | /addEmployees  |Adds a new employee in a database User table|
| GET  | /allEmployees   |Fetch's all employees from a database User books table|
| GET  | /idEmployees/:id  |Fetch's a single employee from a database User table|
| PUT  | /idEmployees/:id |Edit's a single employee from a database User table|
| DELETE  | /idEmployees/:id  |Delete's a single employee from a database User table|

### Frontend
| URL |Functionality|
| ------------- |-------|
| /  |Displays a system home page |
| /form   |Displays an Employee registration Form|
| /users  |Displays a table with all Employees Credentials from a database|
| /edit/id |Displays editing form for updating employees credentials|

# Acknowlegements
I obtained Node.Js knowldege from treehouse tutorials [teamtreehouse](https://teamtreehouse.com/) and React.JS knowledge from [React.Js](https://reactjs.org/).

Also I obtained Fastify knowledge from [fastify](https://www.fastify.io/) documentation. Also i used [stackoverflow](https://stackoverflow.com/) and [w3schools](https://www.w3schools.com/) to solve many of challenges i faced when performing this project.

Also i obtained prisma ORM knowledge from [prisma docs](https://www.prisma.io/).

