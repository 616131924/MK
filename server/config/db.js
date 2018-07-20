const Sequelize = require('sequelize');

const yiyouji = new Sequelize('mysql://root:sise@localhost/yiyouji_test',{
    define:{
        timestamps: false
    }
})

module.exports ={
    yiyouji
}