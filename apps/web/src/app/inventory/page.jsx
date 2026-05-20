import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Package, AlertCircle, ShoppingCart } from "lucide-react";

export default function InventoryPage() {
  const { data: inventory, isLoading } = useQuery({
    queryKey: ["inventory"],
    queryFn: async () => {
      const res = await fetch("/api/inventory");
      return res.json();
    },
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-playfair text-[#1A1A1A]">
            Logistik & Stok
          </h1>
          <p className="text-gray-500">
            Monitoring bahan pokok dan lauk pauk lokal
          </p>
        </div>
        <button className="bg-[#2E7D32] text-white px-6 py-2 rounded-xl font-bold flex items-center gap-2">
          <ShoppingCart size={18} /> Buat Pengadaan
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {inventory?.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase">
                  {item.category}
                </p>
                <h4 className="text-lg font-bold text-gray-800">
                  {item.item_name}
                </h4>
              </div>
              {item.quantity <= item.critical_level && (
                <div className="bg-red-100 text-red-600 p-2 rounded-lg animate-pulse">
                  <AlertCircle size={20} />
                </div>
              )}
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {item.quantity} {item.unit}
                </p>
                <p className="text-xs text-gray-500">
                  Batas Kritis: {item.critical_level} {item.unit}
                </p>
              </div>
              <button className="text-sm font-bold text-[#2E7D32] hover:underline">
                Detail Stok
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
