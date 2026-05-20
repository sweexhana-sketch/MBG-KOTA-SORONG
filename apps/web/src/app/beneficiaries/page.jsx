import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Plus, Search, Filter, Download } from "lucide-react";

export default function BeneficiariesPage() {
  const { data: beneficiaries, isLoading } = useQuery({
    queryKey: ["beneficiaries"],
    queryFn: async () => {
      const res = await fetch("/api/beneficiaries");
      return res.json();
    },
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-playfair text-[#1A1A1A]">
            Data Penerima Manfaat
          </h1>
          <p className="text-gray-500">
            Manajemen basis data siswa, balita, ibu hamil, dan lansia
          </p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white text-gray-700 font-bold px-4 py-2 rounded-xl border border-gray-200 flex items-center gap-2 hover:bg-gray-50">
            <Download size={18} />
            Export Excel
          </button>
          <button className="bg-[#D32F2F] text-white font-bold px-6 py-2 rounded-xl flex items-center gap-2 hover:bg-[#B71C1C] shadow-lg shadow-red-200">
            <Plus size={18} />
            Tambah Penerima
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row gap-4 justify-between">
          <div className="flex items-center gap-4 bg-gray-50 px-4 py-2 rounded-lg flex-1 max-w-md">
            <Search size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Cari nama atau NIK..."
              className="bg-transparent border-none focus:outline-none text-sm w-full"
            />
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100">
              <Filter size={16} /> Filter Kategori
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100">
              <Filter size={16} /> Filter Wilayah
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
                  Nama Penerima
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
                  Kategori
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
                  Lokasi/Sekolah
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
                  Status Gizi
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {isLoading ? (
                <tr>
                  <td colSpan="5" className="p-8 text-center text-gray-500">
                    Memuat data...
                  </td>
                </tr>
              ) : (
                beneficiaries?.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <p className="font-bold text-gray-800">{item.name}</p>
                      <p className="text-xs text-gray-400">
                        NIK: 91710101XXXX0001
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase ${
                          item.category === "Siswa"
                            ? "bg-blue-100 text-blue-700"
                            : item.category === "Balita"
                              ? "bg-purple-100 text-purple-700"
                              : "bg-orange-100 text-orange-700"
                        }`}
                      >
                        {item.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {item.location}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 rounded-full ${item.nutrition_status === "Normal" ? "bg-green-500" : "bg-red-500"}`}
                        ></div>
                        <span className="text-sm font-medium">
                          {item.nutrition_status}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-blue-600 font-bold text-xs hover:underline mr-4">
                        Edit
                      </button>
                      <button className="text-red-600 font-bold text-xs hover:underline">
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
