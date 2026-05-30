let mockKitchens = [
  { id: 1, name: "Dapur Sorong Barat", address: "Jl. Jend. Sudirman", kelurahan: "Kofarkor", kecamatan: "Sorong Barat", capacity: 5000, status: "active", halal_cert: true, pic_name: "Ibu Siti", pic_phone: "081234567890" },
  { id: 2, name: "Dapur Sorong Timur", address: "Jl. Basuki Rahmat KM 8", kelurahan: "Klamana", kecamatan: "Sorong Timur", capacity: 4500, status: "active", halal_cert: true, pic_name: "Bapak Rudi", pic_phone: "082345678901" },
  { id: 3, name: "Dapur Klademak", address: "Jl. Pendidikan", kelurahan: "Klademak", kecamatan: "Sorong", capacity: 3000, status: "maintenance", halal_cert: true, pic_name: "Ibu Maria", pic_phone: "083456789012" },
  { id: 4, name: "Dapur Malaingkedi", address: "Perumahan Pemda", kelurahan: "Malaingkedi", kecamatan: "Malaimsimsa", capacity: 4000, status: "active", halal_cert: false, pic_name: "Bapak Yanto", pic_phone: "084567890123" },
];

export async function GET() {
  return Response.json(mockKitchens);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const newEntry = {
      id: Date.now(),
      ...body
    };
    mockKitchens = [...mockKitchens, newEntry];
    return Response.json(newEntry, { status: 201 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
