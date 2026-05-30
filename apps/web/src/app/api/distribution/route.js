let mockDistributions = [
  { id: 1, kitchen_id: 1, kitchen_name: "Dapur Sorong Barat", destination_name: "SDN 1 Sorong", destination_type: "school", portions_delivered: 450, vehicle_plate: "PB 1234 SA", driver_name: "Budi", status: "delivered", timestamp: new Date(Date.now() - 3600000).toISOString() },
  { id: 2, kitchen_id: 2, kitchen_name: "Dapur Sorong Timur", destination_name: "SMPN 3 Sorong", destination_type: "school", portions_delivered: 600, vehicle_plate: "PB 5678 SB", driver_name: "Andi", status: "in_transit", timestamp: new Date().toISOString() },
  { id: 3, kitchen_id: 1, kitchen_name: "Dapur Sorong Barat", destination_name: "Posyandu Harapan", destination_type: "posyandu", portions_delivered: 150, vehicle_plate: "PB 9012 SC", driver_name: "Ciko", status: "pending", timestamp: new Date().toISOString() },
];

export async function GET() {
  return Response.json(mockDistributions);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const newEntry = {
      id: Date.now(),
      kitchen_name: "Dapur Satuan", // Mock name
      ...body,
      timestamp: new Date().toISOString()
    };
    mockDistributions = [newEntry, ...mockDistributions];
    return Response.json(newEntry, { status: 201 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
