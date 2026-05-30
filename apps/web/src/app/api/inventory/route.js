let mockInventory = [
  { id: 1, name: "Beras Premium", category: "Bahan Pokok", unit: "kg", quantity: 500, min_stock: 200, supplier: "Bulog Sorong", price_per_unit: 14000 },
  { id: 2, name: "Minyak Goreng", category: "Bahan Pokok", unit: "liter", quantity: 150, min_stock: 50, supplier: "PT Bintang Mas", price_per_unit: 16000 },
  { id: 3, name: "Daging Ayam", category: "Protein Hewani", unit: "kg", quantity: 45, min_stock: 50, supplier: "Peternakan Lokal", price_per_unit: 45000 },
  { id: 4, name: "Telur Ayam", category: "Protein Hewani", unit: "butir", quantity: 3000, min_stock: 1000, supplier: "Peternakan Ayam Maju", price_per_unit: 2500 },
  { id: 5, name: "Sayur Kangkung", category: "Sayuran", unit: "ikat", quantity: 200, min_stock: 100, supplier: "Petani Aimas", price_per_unit: 3000 },
  { id: 6, name: "Ikan Tongkol", category: "Protein Hewani", unit: "kg", quantity: 30, min_stock: 100, supplier: "TPI Jembatan Puri", price_per_unit: 35000 },
];

export async function GET() {
  return Response.json(mockInventory);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const newEntry = {
      id: Date.now(),
      ...body
    };
    mockInventory = [...mockInventory, newEntry];
    return Response.json(newEntry, { status: 201 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
