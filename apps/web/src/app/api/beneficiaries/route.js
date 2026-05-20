import sql from "@/app/api/utils/sql";

export async function GET() {
  try {
    const data = await sql`SELECT * FROM beneficiaries ORDER BY name ASC`;
    return Response.json(data);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, category, location, nutrition_status } = body;
    const result = await sql`
      INSERT INTO beneficiaries (name, category, location, nutrition_status)
      VALUES (${name}, ${category}, ${location}, ${nutrition_status})
      RETURNING *
    `;
    return Response.json(result[0]);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
