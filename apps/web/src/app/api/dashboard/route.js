export async function loader({ request }) {
  return Response.json({
    beneficiaries: 12500,
    delivered: 48500,
    kitchens: 15,
    finance: { spent: 25000000000, budget: 50000000000 },
    alerts: [
      { id: 1, message: "Keterlambatan pengiriman ke SD Inpres 12", severity: "Critical", created_at: new Date().toISOString() },
      { id: 2, message: "Stok beras menipis di Dapur Sorong Timur", severity: "Warning", created_at: new Date().toISOString() }
    ],
    recent_distributions: [
      { destination_name: "SDN 1 Sorong", portions_delivered: 450, timestamp: new Date().toISOString() },
      { destination_name: "SMPN 3 Sorong", portions_delivered: 600, timestamp: new Date(Date.now() - 3600000).toISOString() },
      { destination_name: "Posyandu Kasih Ibu", portions_delivered: 120, timestamp: new Date(Date.now() - 7200000).toISOString() }
    ],
  });
}
