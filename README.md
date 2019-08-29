This project is built on MERN stack, was bootstrapped with [create-react-app](https://github.com/facebook/create-react-app). ([MySQL](https://dev.mysql.com/downloads/): database, [Express](https://expressjs.com/): web framework for NodeJS, [React](https://reactjs.org/): JS library for UI, [NodeJS](https://nodejs.org/en/): server/back end) 

## Available Scripts

In the project directory, you can run:

### `npm install` or `npm i`
To install all required dependencies for this project.

### `pip install -r requirements.txt`
To install all required libraries for python to run detection. 

### `npm run migrate`
Create database table. <br>
Before this, please create a user and database in mysql based on the following info: 
- `host: 'localhost'` 
- `user: 'lauretta'`
- `password: 'dahlsens'`
- `database: 'dahlsens'` 

Edit `server/config/database.js` for different usecase. <br>
Useful links: [Install MySQL](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/), [Create User and Database](https://www.a2hosting.sg/kb/developer-corner/mysql/managing-mysql-databases-and-users-from-the-command-line) , [Reset password using ALTER command  for MySQL<=5.7.6](https://stackoverflow.com/questions/33467337/reset-mysql-root-password-using-alter-user-statement-after-install-on-mac) <br>

After migrations,please log in to your mysql user and change the data type of b64img under table cameras to LONGTEXT: 
- mysql -u lauretta -p
- use dahlsens;
- ALTER TABLE `cameras` MODIFY `b64img` LONGTEXT`;
- quit

### `npm run dev`

Runs `npm run start` and `npm run start:server` concurrently.<br>
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.<br>
Backend server will be running on port 5000. 

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Remarks
Before running the app, please disable [Same-Origin Policy in Chrome to fix no 'Access-Control-Allow-Origin' header issue](https://www.codevoila.com/post/75/how-to-disable-same-origin-policy-in-chrome). For Firefox user, please install this [extension](https://addons.mozilla.org/en-US/firefox/addon/cors-everywhere/) to bypass CORS policy. <br>
More info about [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).