const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite',
    define: {
    freezeTableName: true
    },
});

const Product = sequelize.define('Produto', {
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

const Supplier = sequelize.define('Fornecedor', {
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

async function make(){
    await sequelize.sync();
}

make()
console.log('tabelas criadas com sucesso!')

module.exports = {sequelize, Product, Supplier}
