import { Pool } from "pg";

let pool: Pool | null = null;

export function getPool(): Pool {
  try{
  if (!pool) {
    const connectionString = "postgresql://neondb_owner:npg_q2xn1pJYgAuN@ep-super-poetry-ae4r6bim-pooler.c-2.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
    //process.env.DATABASE_URL;
   // console.log(" connectionString ",connectionString)
    if (!connectionString) {
      throw new Error("DATABASE_URL is not set");
    }

    pool = new Pool({ connectionString });
  }

  return pool;
}catch(error){
  console.log(error)
}
}

export async function closePool(): Promise<void> {
  if (pool) {
    await pool.end();
    pool = null;
  }
}
