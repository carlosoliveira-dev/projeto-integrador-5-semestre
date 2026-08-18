const { Sequelize, DataTypes } = require('sequelize');

function makeDatabase(DatabaseName){
    if (!DatabaseName){
        console.log('erro: DatabaseName não fornecido.')
        return
    }
    const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: DatabaseName,
        define: {
        freezeTableName: true
        },
        logging: false,
    });
    
    return sequelize
}

async function makeTables(sequelizeInstance){
    const Product = sequelizeInstance.define('Produto', {
        NomeProduto: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Descricao: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        CodigoBarras: DataTypes.STRING,
        QuantidadeEstoque: DataTypes.STRING,
        Categoria: DataTypes.STRING,
        DataValidade: DataTypes.DATEONLY,
        Imagem: DataTypes.STRING
    });
    
    const Supplier = sequelizeInstance.define('Fornecedor', {
        NomeEmpresa: {
            type: DataTypes.STRING,
            allowNull: false
        },
        CNPJ: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        NomeContatoPrincipal: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Endereco: DataTypes.STRING,
        Telefone: DataTypes.STRING,
        Email: DataTypes.STRING,
    });
    
    Product.belongsToMany(Supplier, { 
        through: 'ProdutoFornecedor',
        foreignKey: 'produtoId'
    });
    
    Supplier.belongsToMany(Product, { 
        through: 'ProdutoFornecedor',
        foreignKey: 'fornecedorId'
    });

    await sequelizeInstance.sync();
    
    return { Product: Product, Supplier: Supplier }
}

module.exports = {makeDatabase, makeTables}
