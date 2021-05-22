module.exports = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'test123*',
    database: 'blog',
    seeds: ['src/database/seed/**/*{.ts,.js}'],
    factories: ['src/database/factory/**/*{.ts,.js}'],
    entities: ['src/models/**/*.ts'],
    migrations: ['src/database/migration/*.ts'],
    cli: {
        migrationsDir: 'src/database/migration'
    }
};