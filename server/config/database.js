export default {
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'lauretta',
        password: 'dahlsens',
        database: 'dahlsens',
        charset: 'utf8'
    },
    migrations: {
        tableName: 'migrations',
        directory: process.cwd() + '/server/migrations'
    },
    debug: true
}
