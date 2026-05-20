import sql from "@/app/api/utils/sql";

export async function GET() {
  try {
    const data = await sql`SELECT * FROM kitchens ORDER BY name ASC`;
    return Response.json(data);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
