const pool = require('./db');

async function test() {
    try {
        const connection = await pool.getConnection();
        console.log("MySQL 연결 성공!");
        connection.release();
    } catch (err) {
        console.error("연결 실패", err);
    }
}

test();
