import sql from "@/app/api/utils/sql";

export async function GET(request) {
  try {
    const stats = await sql.transaction([
      sql`SELECT count(*) as total_beneficiaries FROM beneficiaries`,
      sql`SELECT sum(portions_delivered) as total_delivered FROM distribution`,
      sql`SELECT count(*) as total_kitchens FROM kitchens WHERE is_certified = true`,
      sql`SELECT sum(spent_amount) as total_spent, sum(allocated_amount) as total_budget FROM finance`,
      sql`SELECT * FROM alerts WHERE is_resolved = false ORDER BY created_at DESC LIMIT 5`,
      sql`SELECT destination_name, portions_delivered, timestamp FROM distribution ORDER BY timestamp DESC LIMIT 5`,
    ]);

    return Response.json({
      beneficiaries: parseInt(stats[0][0].total_beneficiaries),
      delivered: parseInt(stats[1][0].total_delivered || 0),
      kitchens: parseInt(stats[2][0].total_kitchens),
      finance: {
        spent: parseFloat(stats[3][0].total_spent || 0),
        budget: parseFloat(stats[3][0].total_budget || 0),
      },
      alerts: stats[4],
      recent_distributions: stats[5],
    });
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: "Failed to fetch dashboard stats" },
      { status: 500 },
    );
  }
}
