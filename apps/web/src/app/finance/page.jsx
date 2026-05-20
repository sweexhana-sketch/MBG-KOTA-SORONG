import React from "react";
import { Wallet, PieChart, FileText, ArrowUpRight } from "lucide-react";

export default function FinancePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-playfair text-[#1A1A1A]">
          Manajemen Keuangan
        </h1>
        <p className="text-gray-500">
          Monitoring realisasi anggaran dan pembayaran supplier
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-[#D32F2F] to-[#B71C1C] p-8 rounded-3xl text-white shadow-xl">
          <div className="flex justify-between items-start mb-8">
            <div>
              <p className="text-white/60 text-sm font-bold uppercase">
                Total Anggaran MBG 2026
              </p>
              <h2 className="text-4xl font-playfair mt-1">Rp 14.2 Miliar</h2>
            </div>
            <div className="p-3 bg-white/10 rounded-2xl">
              <Wallet size={32} />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>Realisasi Penggunaan</span>
                <span>45%</span>
              </div>
              <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                <div className="bg-[#FFC107] h-full w-[45%]"></div>
              </div>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-white/10">
              <span className="text-sm text-white/60">
                Sisa Anggaran: Rp 7.8 Miliar
              </span>
              <button className="text-xs font-bold bg-white text-[#D32F2F] px-4 py-2 rounded-lg">
                Rincian APBD
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-xl text-green-600">
                <PieChart size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">
                  Tagihan Terbayar
                </p>
                <p className="text-xs text-gray-500">Bulan Mei 2026</p>
              </div>
            </div>
            <p className="text-lg font-bold text-gray-900">Rp 2.1 M</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-amber-100 rounded-xl text-amber-600">
                <FileText size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">
                  Tagihan Menunggu
                </p>
                <p className="text-xs text-gray-500">12 Invoice Aktif</p>
              </div>
            </div>
            <p className="text-lg font-bold text-gray-900">Rp 450 Juta</p>
          </div>
        </div>
      </div>
    </div>
  );
}
