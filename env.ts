const database: object = {
    host: process.env.DATATABE_HOST,
    port: process.env.DATATABE_PORT,
    user: process.env.DATATABE_USER,
    password: process.env.DATATABE_PASSWORD,
    name: process.env.DATATABE_NAME,
}

console.log(database);
