const Sequelize = require('sequelize');
const sequelize = new Sequelize('kennsmusic', 'postgres', 'k12323', {
    dialect: 'postgres',
    host: 'localhost',
})

sequelize.authenticate().then(
    () => console.log("connected to your db"),
    (error) => console.log("there was an error", error)
)


module.exports =  sequelize;