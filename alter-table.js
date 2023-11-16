import { sql } from './db.js';

sql`
    ALTER TABLE videos
    RENAME COLUMN descripton TO description;
`.then(() => {
    console.log('Coluna description alterada');
});
