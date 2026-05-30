let mockBeneficiaries = [
  { id: 1, name: "Ahmad Yelipele", nik: "9271010101100001", age: 10, gender: "L", address: "Jl. Basuki Rahmat", kelurahan: "Klamana", kecamatan: "Sorong Timur", school_name: "SDN 1 Sorong", nutrition_status: "normal", category: "siswa" },
  { id: 2, name: "Maria Kambuaya", nik: "9271010101100002", age: 8, gender: "P", address: "Jl. Pendidikan", kelurahan: "Klademak", kecamatan: "Sorong", school_name: "SD Inpres 12", nutrition_status: "stunting", category: "siswa" },
  { id: 3, name: "Yohanes Waimbo", nik: "9271010101100003", age: 4, gender: "L", address: "Kpg. Baru", kelurahan: "Kampung Baru", kecamatan: "Sorong Barat", school_name: "Posyandu Harapan", nutrition_status: "kurang_gizi", category: "balita" },
  { id: 4, name: "Siti Kalsum", nik: "9271010101100004", age: 28, gender: "P", address: "Rufei", kelurahan: "Rufei", kecamatan: "Sorong Barat", school_name: "-", nutrition_status: "normal", category: "bumil" },
  { id: 5, name: "Stevanus Kalami", nik: "9271010101100005", age: 11, gender: "L", address: "Klamono", kelurahan: "Klamono", kecamatan: "Sorong", school_name: "SMPN 3 Sorong", nutrition_status: "normal", category: "siswa" },
];

export async function loader({ request }) {
  const url = new URL(request.url);
  const search = url.searchParams.get("search")?.toLowerCase() || "";
  const status = url.searchParams.get("status") || "";
  
  let filtered = mockBeneficiaries;
  if (search) {
    filtered = filtered.filter(b => b.name.toLowerCase().includes(search) || b.nik.includes(search));
  }
  if (status) {
    filtered = filtered.filter(b => b.nutrition_status === status);
  }
  
  return Response.json(filtered);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const newEntry = {
      id: Date.now(),
      ...body,
      nutrition_status: body.nutrition_status || "normal"
    };
    mockBeneficiaries = [newEntry, ...mockBeneficiaries];
    return Response.json(newEntry, { status: 201 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
