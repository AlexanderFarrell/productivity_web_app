import pg from "pg";
const {Pool} = pg;

export let database_pool;

export function database_init(config) {
    database_pool = new Pool({
        host: config.database.host,
        user: config.database.username,
        password: config.database.password,
        port: config.database.port | 5432,
        database: config.database.database,
        max: config.database.max_connections | 5
    });
}

export async function query(sql, ...params) {
    return (await database_pool.query(sql, params)).rows;
}

export async function query_first(sql, ...params) {
    const rows = (await database_pool.query(sql, params)).rows
    return (rows.length > 0) ? rows[0] : null;
}

export async function execute(sql, ...params) {
    return database_pool.query(sql, params);
}