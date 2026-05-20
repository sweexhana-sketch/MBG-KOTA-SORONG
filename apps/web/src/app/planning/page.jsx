import React from "react";
import { Calendar, Utensils, CheckCircle2 } from "lucide-react";

export default function PlanningPage() {
  const menuPlans = [
    {
      day: "Senin",
      menu: "Papeda, Ikan Kuah Kuning, Buah Matoa",
      calories: 650,
      status: "Approved",
    },
    {
      day: "Selasa",
      menu: "Nasi Merah, Ayam Bakar Bumbu Papua, Sayur Paku",
      calories: 720,
      status: "Approved",
    },
    {
      day: "Rabu",
      menu: "Ubi Rebus, Keladi Goreng, Ikan Asar, Sambal Roa",
      calories: 680,
      status: "Pending",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-playfair text-[#1A1A1A]">
            Perencanaan Menu Gizi
          </h1>
          <p className="text-gray-500">
            Penyusunan jadwal menu mingguan berbasis kearifan lokal
          </p>
        </div>
        <button className="bg-[#FFC107] text-[#1A1A1A] px-6 py-2 rounded-xl font-bold flex items-center gap-2">
          <Calendar size={18} /> Buat Jadwal Baru
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {menuPlans.map((plan, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-[#F4F1EA] rounded-xl flex flex-col items-center justify-center border border-gray-200">
                <span className="text-[10px] font-bold text-gray-400 uppercase">
                  Hari
                </span>
                <span className="font-bold text-[#D32F2F]">{plan.day}</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800">{plan.menu}</h4>
                <div className="flex items-center gap-4 mt-1">
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <Utensils size={14} /> {plan.calories} kkal
                  </span>
                  <span
                    className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${
                      plan.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {plan.status}
                  </span>
                </div>
              </div>
            </div>
            <button className="text-sm font-bold text-[#D32F2F] px-4 py-2 border border-[#D32F2F] rounded-lg hover:bg-red-50">
              Detail Nutrisi
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
