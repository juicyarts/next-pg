import { migrate } from 'drizzle-orm/vercel-postgres/migrator';
import { db } from './db';
import * as dotenv from 'dotenv';

dotenv.config();

migrate(db, {
  migrationsFolder: 'src/db/migrations',
})
  .then(() => {
    console.log('Migration was succesfull!');
  })
  .catch((err) => {
    console.error('Migration failed:', err);
  })
  .finally(() => {
    console.info('Migration finished');
  });
