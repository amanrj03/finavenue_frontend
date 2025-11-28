import { Search, ChevronDown, Menu, LogOut } from "lucide-react";
import Sidebar from "../components/Sidebar";
import DistributorTable from "../components/DistributorTable";
import logo from "../assets/finavenue-logo.png";
interface DashboardProps {
  onLogout: () => void;
}

export default function Dashboard({ onLogout }: DashboardProps) {
  return (
    <div className="flex h-screen bg-gray-50 flex-col">
      <div className="fixed top-0 left-0 right-0 z-20 bg-white border-b border-gray-200 flex">
        <div className="flex items-center gap-2 sm:gap-4 px-4 sm:px-6 py-3 border-r border-gray-200 lg:w-72 bg-white">
          <div className="w-8 h-8 sm:w-[50px] sm:h-[50px] bg-white rounded-full flex items-center justify-center shadow border-2 border-[#5C6DEF]">
            <img
              src={logo}
              alt="Finavenue Logo"
              className="h-6 w-auto sm:h-12 object-contain"
            />
          </div>

          <p className="hidden md:block text-[#2B3E9E] text-base sm:text-[24px] font-semibold tracking-wide">
            Finavenue
          </p>
        </div>

        <div className="flex-1 px-4 sm:px-8 py-4 flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-2 sm:gap-4 flex-1">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Menu size={20} className="text-[#2B3E9E]" />
            </button>
            <div className="relative hidden sm:block w-40 md:w-64">
              <Search
                size={18}
                className="absolute left-3 top-2.5 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 border border-[#C9CEDD] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="w-3 h-3 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow border-2 border-[#5C6DEF]">
                <img
                  src={logo}
                  alt="Finavenue Logo"
                  className="w-2 h-2 sm:w-8 sm:h-8 object-contain"
                />
              </div>

              <span className="hidden sm:block text-sm font-medium text-gray-900">
                Admin
              </span>

              <ChevronDown
                size={16}
                className="text-gray-600 hidden sm:block"
              />
            </div>
            <button
              onClick={onLogout}
              className="flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 bg-[#5C6DEF] text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              <LogOut size={16} />
              <span className="hidden sm:block">Log Out</span>
            </button>
          </div>
        </div>
      </div>

      <div className="pt-16 sm:pt-[72px] flex h-screen w-full">
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        <div className="flex-1 flex flex-col min-w-0">
          <main className="flex-1 overflow-auto p-4 sm:p-8">
            <DistributorTable />
          </main>
        </div>
      </div>
    </div>
  );
}
