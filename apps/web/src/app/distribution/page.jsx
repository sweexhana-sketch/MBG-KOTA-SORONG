import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Truck, MapPin, Clock } from "lucide-react";

export default function DistributionPage() {
  const { data: distributions, isLoading } = useQuery({
    queryKey: ["distribution"],
    queryFn: async () => {
      const res = await fetch("/api/distribution");
      return res.json();
    },
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-playfair text-[#1A1A1A]">
          Manajemen Distribusi
        </h1>
        <p className="text-gray-500">
          Tracking logistik dari dapur ke titik penerima
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
              <Truck size={20} />
            </div>
            <h4 className="font-bold text-gray-800">Armada Aktif</h4>
          </div>
          <p className="text-2xl font-bold">12 Kendaraan</p>
          <p className="text-xs text-gray-400 mt-1">Status: Operasional</p>
        </div>
        {/* ... more status cards ... */}
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 font-bold text-gray-800">
          Log Pengiriman Hari Ini
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">
                  Tujuan
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">
                  Dapur
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">
                  Status
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase">
                  Driver
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {distributions?.map((d) => (
                <tr key={d.id}>
                  <td className="px-6 py-4 font-medium">
                    {d.destination_name}
                  </td>
                  <td className="px-6 py-4 text-gray-500">{d.kitchen_name}</td>
                  <td className="px-6 py-4">
                    <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                      {d.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500">
                    {d.driver_name || "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
