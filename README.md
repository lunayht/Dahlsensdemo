This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run migrate`
Create database table. <br>
Before this, please create a user and database in mysql based on the following info: 
- `host: 'localhost'` 
- `user: 'lauretta'`
- `password: 'dahlsens'`
- `database: 'dahlsens'` 

Edit `server/config/database.js` for different usecase. <br>
Useful link: [Create User and Database](https://www.a2hosting.sg/kb/developer-corner/mysql/managing-mysql-databases-and-users-from-the-command-line) , [Reset password using ALTER command MySQL 5.7.6 or later](https://stackoverflow.com/questions/33467337/reset-mysql-root-password-using-alter-user-statement-after-install-on-mac)

### `npm run dev`

Runs `npm run start` and `npm run start:server` concurrently.<br>
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.<br>
Backend server will be running on port 5000. 

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
