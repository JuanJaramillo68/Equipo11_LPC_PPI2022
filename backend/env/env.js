const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host: 'bnnbkzztjcxscxmfv2ir-mysql.services.clever-cloud.com',
    user: 'uqtupighsc7kvhih',
    password: 'khPsJaioa084IX8aaV2O',
    database: 'bnnbkzztjcxscxmfv2ir',
    multipleStatements: true
});

mysqlConnection.connect( function(err){
    if(err){
        console.error(err);
        return;
    } else {
        console.log('Base de datos conectada!');
    }
})

module.exports = mysqlConnection;