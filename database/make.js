const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
});

async function make(){
    const User = sequelize.define('User', {
        username: DataTypes.STRING,
        birthday: DataTypes.DATE,
    });
    
    await sequelize.sync();
    
    const jane = await User.create({
        username: 'janedoe',
        birthday: new Date(1980, 6, 20),
    });
    const users = await User.findAll();
}

make()
console.log('tabelas criadas com sucesso!')
