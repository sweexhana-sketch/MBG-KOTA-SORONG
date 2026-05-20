import React from "react";
import { User, Lock, Bell, Palette, Globe } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-playfair text-[#1A1A1A]">
          Pengaturan Sistem
        </h1>
        <p className="text-gray-500">
          Manajemen profil, aksesibilitas, dan preferensi sistem
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1 space-y-2">
          <button className="w-full text-left px-4 py-3 bg-white border border-gray-200 rounded-xl font-bold text-[#D32F2F] shadow-sm flex items-center gap-3">
            <User size={18} /> Profil Akun
          </button>
          <button className="w-full text-left px-4 py-3 text-gray-600 hover:bg-white rounded-xl font-medium flex items-center gap-3">
            <Lock size={18} /> Keamanan & Role
          </button>
          <button className="w-full text-left px-4 py-3 text-gray-600 hover:bg-white rounded-xl font-medium flex items-center gap-3">
            <Bell size={18} /> Notifikasi
          </button>
          <button className="w-full text-left px-4 py-3 text-gray-600 hover:bg-white rounded-xl font-medium flex items-center gap-3">
            <Palette size={18} /> Tampilan Papua
          </button>
        </div>

        <div className="lg:col-span-3 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-8">
          <section>
            <h3 className="text-lg font-bold text-gray-800 mb-6">
              Profil Instansi
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase">
                  Nama Instansi
                </label>
                <input
                  type="text"
                  defaultValue="Sekretariat Daerah Kota Sorong"
                  className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-[#D32F2F] outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase">
                  Wilayah Administratif
                </label>
                <input
                  type="text"
                  defaultValue="Papua Barat Daya"
                  className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:ring-2 focus:ring-[#D32F2F] outline-none"
                />
              </div>
            </div>
          </section>

          <section className="pt-8 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold text-gray-800">
                  Mode Batik Cenderawasih
                </h4>
                <p className="text-sm text-gray-500">
                  Aktifkan motif visual Papua di seluruh dashboard
                </p>
              </div>
              <div className="w-12 h-6 bg-[#D32F2F] rounded-full relative p-1 cursor-pointer">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </section>

          <div className="flex justify-end">
            <button className="bg-[#D32F2F] text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-red-200">
              Simpan Perubahan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
