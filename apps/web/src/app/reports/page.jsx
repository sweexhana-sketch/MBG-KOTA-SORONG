import React from "react";
import { FileBarChart, FileText, Download, Filter } from "lucide-react";

export default function ReportsPage() {
  const reports = [
    {
      title: "Laporan Gizi Bulanan - Mei 2026",
      type: "PDF",
      date: "20 Mei 2026",
      size: "2.4 MB",
    },
    {
      title: "Audit Keuangan Dapur Satuan Q1",
      type: "Excel",
      date: "15 Mei 2026",
      size: "1.1 MB",
    },
    {
      title: "Data Evaluasi Stunting Kota Sorong",
      type: "PDF",
      date: "10 Mei 2026",
      size: "4.8 MB",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-playfair text-[#1A1A1A]">
            Laporan & Audit
          </h1>
          <p className="text-gray-500">
            Generate laporan resmi untuk Walikota dan Instansi Pusat
          </p>
        </div>
        <button className="bg-[#D32F2F] text-white px-6 py-2 rounded-xl font-bold flex items-center gap-2">
          <FileBarChart size={18} /> Generate Report Baru
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h3 className="font-bold text-gray-800">Arsip Laporan Digital</h3>
          <button className="flex items-center gap-2 text-sm text-gray-500 font-medium">
            <Filter size={16} /> Filter Periode
          </button>
        </div>
        <div className="divide-y divide-gray-100">
          {reports.map((report, idx) => (
            <div
              key={idx}
              className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`p-3 rounded-xl ${report.type === "PDF" ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}
                >
                  {report.type === "PDF" ? (
                    <FileText size={24} />
                  ) : (
                    <FileBarChart size={24} />
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{report.title}</h4>
                  <p className="text-xs text-gray-400">
                    Generated: {report.date} • {report.size}
                  </p>
                </div>
              </div>
              <button className="p-2 text-gray-400 hover:text-[#D32F2F] hover:bg-red-50 rounded-lg transition-colors">
                <Download size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
