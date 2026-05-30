import { neon } from '@neondatabase/serverless';

const sql = neon('postgresql://neondb_owner:npg_gzQ2rXwBp5eA@ep-red-thunder-a1o03x16-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require');

async function testDb() {
  try {
    const result = await sql`
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public';
    `;
    console.log("Tables in database:", result.map(r => r.table_name));
  } catch (error) {
    console.error("Database connection error:", error);
  }
}

testDb();
