import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Warehouse, ShieldCheck, Users } from "lucide-react";

export default function KitchensPage() {
  const { data: kitchens, isLoading } = useQuery({
    queryKey: ["kitchens"],
    queryFn: async () => {
      const res = await fetch("/api/kitchens");
      return res.json();
    },
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-playfair text-[#1A1A1A]">
          Unit Dapur Satuan
        </h1>
        <p className="text-gray-500">
          Manajemen produksi dan sertifikasi dapur
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {kitchens?.map((k) => (
          <div
            key={k.id}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex"
          >
            <div className="w-1/3 bg-gray-100 flex items-center justify-center p-8">
              <Warehouse size={48} className="text-gray-300" />
            </div>
            <div className="p-6 flex-1">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-800">{k.name}</h3>
                {k.is_certified && (
                  <span className="flex items-center gap-1 text-green-600 text-[10px] font-bold uppercase">
                    <ShieldCheck size={14} /> Terverifikasi
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500 mb-4">{k.location}</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-bold">
                    Kapasitas
                  </p>
                  <p className="font-bold">{k.capacity} Porsi/Hari</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase font-bold">
                    Koordinator
                  </p>
                  <p className="font-bold">{k.coordinator}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
