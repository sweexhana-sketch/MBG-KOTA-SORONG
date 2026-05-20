import sql from "@/app/api/utils/sql";

export async function GET() {
  try {
    const data = await sql`
      SELECT d.*, k.name as kitchen_name 
      FROM distribution d
      JOIN kitchens k ON d.kitchen_id = k.id
      ORDER BY d.timestamp DESC
    `;
    return Response.json(data);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
