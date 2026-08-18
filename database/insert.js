const {sequelize, Product, Supplier} = require('./make')

const { Sequelize, DataTypes } = require('sequelize');

async function insert(){
    await sequelize.authenticate();
    await sequelize.sync();

    const Phone = await Product.create({
        NomeProduto: 'Galaxy A10',
        Descricao: 'Smartphone não muito eficiente...'
    });
    
    const Gabinete = await Product.create({
        NomeProduto: 'Mancer 2.0',
        Descricao: 'gabinete parrudo :)'
    });
    
    const Carrefour = await Supplier.create({
        NomeEmpresa: 'Carrefour LTDA',
        CNPJ: '00.000.000.00-00',
        NomeContatoPrincipal: 'Ana Luiza',
    });
}

insert()
