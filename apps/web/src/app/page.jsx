import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Users,
  Utensils,
  Warehouse,
  Wallet,
  AlertTriangle,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const StatCard = ({ icon: Icon, label, value, subValue, color }) => (
  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
    <div className="flex items-center gap-4">
      <div className={`p-4 rounded-xl ${color}`}>
        <Icon className="text-white" size={24} />
      </div>
      <div>
        <p className="text-sm text-gray-500 font-medium">{label}</p>
        <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
        {subValue && <p className="text-xs text-gray-400 mt-1">{subValue}</p>}
      </div>
    </div>
  </div>
);

export default function DashboardPage() {
  const { data: stats, isLoading } = useQuery({
    queryKey: ["dashboard-stats"],
    queryFn: async () => {
      const res = await fetch("/api/dashboard");
      if (!res.ok) throw new Error("Network error");
      return res.json();
    },
  });

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-96">
        Loading Dashboard...
      </div>
    );

  const chartData = [
    { day: "Sen", porsi: 4200 },
    { day: "Sel", porsi: 4500 },
    { day: "Rab", porsi: 4300 },
    { day: "Kam", porsi: 4800 },
    { day: "Jum", porsi: 4600 },
    { day: "Sab", porsi: 4400 },
    { day: "Min", porsi: 4700 },
  ];

  const COLORS = ["#D32F2F", "#FFC107", "#2E7D32", "#0288D1"];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-playfair text-[#1A1A1A]">
          Ringkasan Real-time
        </h1>
        <p className="text-gray-500 mt-1">
          Monitoring program Makan Bergizi Gratis Kota Sorong
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={Users}
          label="Total Penerima"
          value={stats?.beneficiaries?.toLocaleString() || "0"}
          subValue="+120 minggu ini"
          color="bg-[#D32F2F]"
        />
        <StatCard
          icon={Utensils}
          label="Porsi Terkirim"
          value={stats?.delivered?.toLocaleString() || "0"}
          subValue="Target: 50.000 porsi"
          color="bg-[#FFC107]"
        />
        <StatCard
          icon={Warehouse}
          label="Dapur Aktif"
          value={stats?.kitchens || "0"}
          subValue="Sertifikasi Halal 100%"
          color="bg-[#2E7D32]"
        />
        <StatCard
          icon={Wallet}
          label="Realisasi Anggaran"
          value={`Rp ${(stats?.finance?.spent / 1e9).toFixed(1)}M`}
          subValue={`Dari total Rp ${(stats?.finance?.budget / 1e9).toFixed(1)}M`}
          color="bg-[#0288D1]"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Trend Distribusi */}
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-gray-800 flex items-center gap-2">
              <TrendingUp size={20} className="text-[#2E7D32]" />
              Trend Distribusi 7 Hari Terakhir
            </h3>
            <select className="bg-gray-50 border-none rounded-lg text-sm font-bold text-gray-600 px-3 py-2">
              <option>Semua Kecamatan</option>
              <option>Sorong Barat</option>
              <option>Sorong Timur</option>
            </select>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorPorsi" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#D32F2F" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#D32F2F" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f0f0f0"
                />
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#9ca3af", fontSize: 12 }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#9ca3af", fontSize: 12 }}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: "12px",
                    border: "none",
                    boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="porsi"
                  stroke="#D32F2F"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorPorsi)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Alerts & Critical Status */}
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="font-bold text-gray-800 mb-6 flex items-center gap-2">
            <AlertTriangle size={20} className="text-[#D32F2F]" />
            Alert & Kendala Lapangan
          </h3>
          <div className="space-y-4">
            {stats?.alerts?.map((alert) => (
              <div
                key={alert.id}
                className={`p-4 rounded-xl border-l-4 ${alert.severity === "Critical" ? "bg-red-50 border-red-500" : "bg-amber-50 border-amber-500"}`}
              >
                <div className="flex justify-between items-start mb-1">
                  <span
                    className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${alert.severity === "Critical" ? "bg-red-200 text-red-700" : "bg-amber-200 text-amber-700"}`}
                  >
                    {alert.severity}
                  </span>
                  <span className="text-[10px] text-gray-400">Baru saja</span>
                </div>
                <p className="text-sm font-medium text-gray-800 leading-tight">
                  {alert.message}
                </p>
                <button className="mt-3 text-xs font-bold text-[#D32F2F] flex items-center gap-1 hover:underline">
                  Eskalasi Cepat <ArrowRight size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Distributions */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <h3 className="font-bold text-gray-800">Distribusi Terkini</h3>
            <button className="text-[#D32F2F] text-sm font-bold hover:underline">
              Lihat Semua
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
                    Tujuan
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
                    Porsi
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
                    Waktu
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {stats?.recent_distributions?.map((dist, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-bold text-gray-800 text-sm">
                        {dist.destination_name}
                      </p>
                      <p className="text-xs text-gray-400">
                        Wilayah Sorong Barat
                      </p>
                    </td>
                    <td className="px-6 py-4 font-bold text-gray-700 text-sm">
                      {dist.portions_delivered}
                    </td>
                    <td className="px-6 py-4 text-gray-500 text-sm">
                      {new Date(dist.timestamp).toLocaleTimeString()}
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-green-100 text-green-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                        Selesai
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Gizi Status Distribution */}
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="font-bold text-gray-800 mb-6">Status Gizi Penerima</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={[
                    { name: "Normal", value: 75 },
                    { name: "Stunting", value: 15 },
                    { name: "Kurang Gizi", value: 10 },
                  ]}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {COLORS.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-1 gap-2 mt-4">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#D32F2F]"></div>
                <span className="text-gray-600">Normal</span>
              </div>
              <span className="font-bold text-gray-800">75%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FFC107]"></div>
                <span className="text-gray-600">Stunting</span>
              </div>
              <span className="font-bold text-gray-800">15%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#2E7D32]"></div>
                <span className="text-gray-600">Kurang Gizi</span>
              </div>
              <span className="font-bold text-gray-800">10%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
