import React from "react";
import { Activity, Radio, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function MonitoringPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-playfair text-[#1A1A1A]">
            Monitoring Real-time
          </h1>
          <p className="text-gray-500">
            Live feed aktivitas operasional di lapangan
          </p>
        </div>
        <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-lg font-bold text-sm">
          <Radio size={16} className="animate-pulse" /> Live System Active
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h3 className="font-bold text-gray-800 mb-6">Timeline Operasional</h3>
          <div className="space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-100">
            <div className="relative pl-8">
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-green-500 border-4 border-white shadow-sm flex items-center justify-center">
                <CheckCircle2 size={12} className="text-white" />
              </div>
              <div className="flex justify-between">
                <p className="font-bold text-sm">
                  Produksi Dapur Sorong Timur Selesai
                </p>
                <span className="text-xs text-gray-400">09:45 WIT</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                2,000 porsi siap didistribusikan ke 5 sekolah.
              </p>
            </div>
            <div className="relative pl-8">
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-amber-500 border-4 border-white shadow-sm flex items-center justify-center">
                <Activity size={12} className="text-white" />
              </div>
              <div className="flex justify-between">
                <p className="font-bold text-sm">
                  Kurir B-4422-AX Dalam Perjalanan
                </p>
                <span className="text-xs text-gray-400">10:12 WIT</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Menuju SD Inpres 22 Sorong. Estimasi tiba 15 menit.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
            <div className="flex items-center gap-3 text-red-700 mb-4 font-bold">
              <AlertTriangle size={20} /> Eskalasi Kritis
            </div>
            <div className="p-4 bg-white rounded-xl shadow-sm border border-red-100">
              <p className="text-sm font-bold text-gray-800">
                Gangguan Jalan di Km 10
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Menghambat rute pengiriman ke Sorong Utara. Re-routing armada
                sedang diproses.
              </p>
              <button className="w-full mt-4 bg-[#D32F2F] text-white py-2 rounded-lg text-sm font-bold">
                Respon Lapangan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
