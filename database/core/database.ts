import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: "ondojung.mycafe24.com",
    user: "ondojung",
    password: "hyseo0207*",
    database: "ondojung",
    charset: 'utf8mb4',
    multipleStatements: true,
    typeCast: function (field, next) {
        if (field.type === "VAR_STRING" || field.type === "STRING" || field.type === "BLOB" || field.type === 'VARBINARY') {
            
            return field.buffer()?.toString('utf8');
        }
        
        
        return next();
    }
});

export default pool;