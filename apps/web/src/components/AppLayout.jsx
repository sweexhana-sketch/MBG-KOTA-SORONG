import React, { useState, useEffect } from "react";
import {
  LayoutDashboard,
  Utensils,
  Truck,
  Users,
  Warehouse,
  Package,
  Wallet,
  Activity,
  FileBarChart,
  Settings,
  Bell,
  Search,
  Menu as MenuIcon,
  X,
} from "lucide-react";
import { Link, useLocation } from "react-router";

const SidebarItem = ({ icon: Icon, label, href, active }) => (
  <Link
    to={href}
    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
      active
        ? "bg-[#FFC107] text-[#1A1A1A] font-bold shadow-lg"
        : "text-white/80 hover:bg-white/10 hover:text-white"
    }`}
  >
    <Icon size={20} />
    <span className="text-sm font-medium">{label}</span>
  </Link>
);

export default function AppLayout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const pathname = location.pathname;

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/" },
    { icon: Utensils, label: "Perencanaan Menu", href: "/planning" },
    { icon: Truck, label: "Distribusi", href: "/distribution" },
    { icon: Users, label: "Data Penerima", href: "/beneficiaries" },
    { icon: Warehouse, label: "Dapur Satuan", href: "/kitchens" },
    { icon: Package, label: "Logistik & Stok", href: "/inventory" },
    { icon: Wallet, label: "Keuangan", href: "/finance" },
    { icon: Activity, label: "Monitoring Real-time", href: "/monitoring" },
    { icon: FileBarChart, label: "Laporan & Audit", href: "/reports" },
    { icon: Settings, label: "Pengaturan", href: "/settings" },
  ];

  return (
    <div className="min-h-screen bg-[#F4F1EA] flex font-roboto">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;500;700&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
        
        .papua-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L100 50L50 100L0 50Z' fill='%23D32F2F' fill-opacity='0.05'/%3E%3C/svg%3E");
        }
      `}</style>

      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } bg-[#D32F2F] transition-all duration-300 flex flex-col fixed h-full z-50`}
      >
        <div className="p-6 flex items-center justify-between">
          {isSidebarOpen && (
            <div className="flex flex-col">
              <h1 className="text-white font-playfair text-xl leading-tight">
                MBG SORONG
              </h1>
              <span className="text-white/60 text-[10px] uppercase tracking-widest font-bold">
                Sistem Informasi Makan Bergizi
              </span>
            </div>
          )}
          <button
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="text-white hover:bg-white/10 p-1 rounded"
          >
            {isSidebarOpen ? <X size={20} /> : <MenuIcon size={24} />}
          </button>
        </div>

        <nav className="flex-1 px-3 space-y-1 overflow-y-auto custom-scrollbar">
          {menuItems.map((item) => (
            <SidebarItem
              key={item.href}
              {...item}
              active={pathname === item.href}
            />
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FFC107] flex items-center justify-center font-bold text-[#1A1A1A]">
              WA
            </div>
            {isSidebarOpen && (
              <div className="flex flex-col">
                <span className="text-white text-sm font-bold">
                  Walikota Sorong
                </span>
                <span className="text-white/60 text-xs">Administrator</span>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-20"} papua-pattern`}
      >
        {/* Header */}
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-8 sticky top-0 z-40">
          <div className="flex items-center gap-4 bg-gray-100 px-4 py-2 rounded-full w-96">
            <Search size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Cari data, laporan, atau monitoring..."
              className="bg-transparent border-none focus:outline-none text-sm w-full"
            />
          </div>

          <div className="flex items-center gap-6">
            <button className="relative text-gray-500 hover:text-[#D32F2F]">
              <Bell size={22} />
              <span className="absolute -top-1 -right-1 bg-[#D32F2F] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold border-2 border-white">
                3
              </span>
            </button>
            <div className="h-8 w-[1px] bg-gray-200"></div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-bold text-gray-800">
                  Sekretariat Daerah
                </p>
                <p className="text-[10px] text-gray-500 uppercase font-bold">
                  Kota Sorong, Papua Barat Daya
                </p>
              </div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Lambang_Kota_Sorong.png"
                alt="Logo Sorong"
                className="h-10 object-contain"
              />
            </div>
          </div>
        </header>

        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
