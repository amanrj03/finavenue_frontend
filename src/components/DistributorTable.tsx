import {
  ChevronLeft,
  ChevronRight,
  Search,
  ChevronRight as BreadcrumbRight,
  Printer,
  SquareArrowOutUpRight 
} from "lucide-react";

interface Distributor {
  id: string;
  name: string;
  area: string;
  onboardedDate: string;
  investors: number;
  amount: string;
  fees: string;
  agreementExpiry: string;
  status: "Active" | "Pending" | "Suspended";
}

const distributors: Distributor[] = [
  {
    id: "01",
    name: "India FinCorp",
    area: "Mumbai",
    onboardedDate: "12 Mar 2023",
    investors: 14,
    amount: "₹18,45,000",
    fees: "1.25%",
    agreementExpiry: "10 Jan 2026",
    status: "Active",
  },
  {
    id: "02",
    name: "India FinCorp",
    area: "Mumbai",
    onboardedDate: "12 Mar 2023",
    investors: 14,
    amount: "₹18,45,000",
    fees: "1.25%",
    agreementExpiry: "10 Jan 2026",
    status: "Active",
  },
  {
    id: "03",
    name: "India FinCorp",
    area: "Mumbai",
    onboardedDate: "12 Mar 2023",
    investors: 14,
    amount: "₹18,45,000",
    fees: "1.25%",
    agreementExpiry: "10 Jan 2026",
    status: "Active",
  },
  {
    id: "04",
    name: "India FinCorp",
    area: "Mumbai",
    onboardedDate: "12 Mar 2023",
    investors: 14,
    amount: "₹18,45,000",
    fees: "1.25%",
    agreementExpiry: "10 Jan 2026",
    status: "Active",
  },
  {
    id: "05",
    name: "India FinCorp",
    area: "Mumbai",
    onboardedDate: "12 Mar 2023",
    investors: 14,
    amount: "₹18,45,000",
    fees: "1.25%",
    agreementExpiry: "10 Jan 2026",
    status: "Active",
  },
  {
    id: "06",
    name: "India FinCorp",
    area: "Mumbai",
    onboardedDate: "12 Mar 2023",
    investors: 14,
    amount: "₹18,45,000",
    fees: "1.25%",
    agreementExpiry: "10 Jan 2026",
    status: "Active",
  },
  {
    id: "07",
    name: "India FinCorp",
    area: "Mumbai",
    onboardedDate: "12 Mar 2023",
    investors: 14,
    amount: "₹18,45,000",
    fees: "1.25%",
    agreementExpiry: "10 Jan 2026",
    status: "Active",
  },
  {
    id: "08",
    name: "India FinCorp",
    area: "Mumbai",
    onboardedDate: "12 Mar 2023",
    investors: 14,
    amount: "₹18,45,000",
    fees: "1.25%",
    agreementExpiry: "10 Jan 2026",
    status: "Active",
  },
  {
    id: "09",
    name: "India FinCorp",
    area: "Mumbai",
    onboardedDate: "12 Mar 2023",
    investors: 14,
    amount: "₹18,45,000",
    fees: "1.25%",
    agreementExpiry: "10 Jan 2026",
    status: "Pending",
  },
  {
    id: "10",
    name: "India FinCorp",
    area: "Mumbai",
    onboardedDate: "12 Mar 2023",
    investors: 14,
    amount: "₹18,45,000",
    fees: "1.25%",
    agreementExpiry: "10 Jan 2026",
    status: "Suspended",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Active":
      return " border border-[#C9CEDD] bg-[#B6F6B8] text-[#0E0E0E]";
    case "Pending":
      return "border border-[#C9CEDD] bg-[#FFDD6D] text-[#0E0E0E]";
    case "Suspended":
      return "border border-[#C9CEDD] bg-[#FFAAAC] text-[#0E0E0E]";
    default:
      return "border border-[#C9CEDD] g-gray-100 text-[#0E0E0E]";
  }
};

function DistributorTable() {
  return (
    <>
      <div className="flex items-center gap-2 mb-4 sm:mb-6 px-1">
        <span className="text-xs sm:text-sm text-[#0E0E0E]">Distributor</span>
        <BreadcrumbRight size={14} className="text-gray-400" />
        <span className="text-xs sm:text-sm font-medium text-gray-900">
          All Distributor
        </span>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-[36px] font-bold text-gray-900 mb-4 sm:mb-0">
          All Distributor
        </h1>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <button className="flex items-center gap-1 sm:gap-2 px-3 py-1 sm:px-4 sm:py-2 border border-gray-300 rounded-lg text-xs sm:text-sm text-gray-700 font-medium hover:bg-gray-50 transition-colors">
            <span>Export</span>
            <SquareArrowOutUpRight size={14} />
          </button>
          <button className="flex items-center gap-1 sm:gap-2 px-3 py-1 sm:px-4 sm:py-2 border border-gray-300 rounded-lg text-xs sm:text-sm text-gray-700 font-medium hover:bg-gray-50 transition-colors">
            <span>Print</span>
            <Printer size={14} />
          </button>
          <button className="px-4 py-1 sm:px-6 sm:py-2 bg-[#2B3E9E] text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
            + Add New Distributor
          </button>
        </div>
      </div>

      <div className="border border-[#C9CEDD] rounded-[10px] p-2 sm:p-4">
        <div className="mb-4 flex gap-2 sm:gap-4 flex-wrap">
          <div className="flex-1 min-w-[150px] sm:min-w-64">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-3 top-2.5 text-[#3E496B]"
              />
              <input
                type="text"
                placeholder="Search by name / email"
                className="w-full h-10 pl-10 pr-4 py-2 border border-gray-300 rounded-[10px] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-[#C9CEDD]"
              />
            </div>
          </div>
          <select className="px-3 py-2 border border-gray-300 rounded-[10px] text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer min-w-[120px]">
            <option>Status</option>
            <option>Active</option>
            <option>Pending</option>
            <option>Suspended</option>
          </select>
          <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer min-w-[120px]">
            <option>Area</option>
          </select>
          <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer hidden md:block">
            <option>Agreement Expiry Range</option>
          </select>
          <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer min-w-20">
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
        </div>

        <div className="bg-white border-t border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-max"> 
              <thead>
                <tr className="bg-[#5C6DEF] text-white">
                  <th className="px-4 py-2 text-center text-xs sm:text-sm font-semibold whitespace-nowrap">
                    #
                  </th>
                  <th className="px-4 py-2 text-center text-xs sm:text-sm font-semibold whitespace-nowrap">
                    Distributor Name
                  </th>
                  <th className="px-4 py-2 text-center text-xs sm:text-sm font-semibold whitespace-nowrap">
                    Area
                  </th>
                  <th className="px-4 py-2 text-center text-xs sm:text-sm font-semibold whitespace-nowrap">
                    Date
                  </th>
                  <th className="px-4 py-2 text-center text-xs sm:text-sm font-semibold whitespace-nowrap">
                    Investors
                  </th>
                  <th className="px-4 py-2 text-center text-xs sm:text-sm font-semibold whitespace-nowrap">
                    Amount (₹)
                  </th>
                  <th className="px-4 py-2 text-center text-xs sm:text-sm font-semibold whitespace-nowrap">
                    Fees %
                  </th>
                  <th className="px-4 py-2 text-center text-xs sm:text-sm font-semibold whitespace-nowrap">
                    Expiry
                  </th>
                  <th className="px-4 py-2 text-center text-xs sm:text-sm font-semibold whitespace-nowrap">
                    Status
                  </th>
                  <th className="px-4 py-2 text-center text-xs sm:text-sm font-semibold whitespace-nowrap">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {distributors.map((distributor) => (
                  <tr
                    key={distributor.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-4 py-3 text-xs sm:text-[14px] text-[#0E0E0E] whitespace-nowrap">
                      {distributor.id}
                    </td>
                    <td className="px-4 py-3 text-xs sm:text-[14px] text-[#0E0E0E] whitespace-nowrap">
                      {distributor.name}
                    </td>
                    <td className="px-4 py-3 text-xs sm:text-[14px] text-[#0E0E0E] whitespace-nowrap">
                      {distributor.area}
                    </td>
                    <td className="px-4 py-3 text-xs sm:text-[14px] text-[#0E0E0E] whitespace-nowrap">
                      {distributor.onboardedDate}
                    </td>
                    <td className="px-4 py-3 text-xs sm:text-[14px] text-[#0E0E0E] whitespace-nowrap text-center">
                      {distributor.investors}
                    </td>
                    <td className="px-4 py-3 text-xs sm:text-[14px] text-[#0E0E0E] whitespace-nowrap text-right">
                      {distributor.amount}
                    </td>
                    <td className="px-4 py-3 text-xs sm:text-[14px] text-[#0E0E0E] whitespace-nowrap text-center">
                      {distributor.fees}
                    </td>
                    <td className="px-4 py-3 text-xs sm:text-[14px] text-[#0E0E0E] whitespace-nowrap">
                      {distributor.agreementExpiry}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-block px-2 py-1 sm:px-3 sm:py-2 rounded-[10px] text-xs text-center ${getStatusColor(
                          distributor.status
                        )}`}
                      >
                        {distributor.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                        <button className="px-2 py-1 text-xs text-[#0E0E0E] border border-[#5C6DEF] rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap">
                          Manage
                        </button>
                        <button className="px-2 py-1 text-xs text-[#0E0E0E] border border-[#5C6DEF] rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap">
                          View
                        </button>
                        <button className="px-2 py-1 text-xs text-[#0E0E0E] border border-[#5C6DEF] rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap">
                          Edit
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-gray-50 border-t border-gray-200 px-4 py-3 sm:px-6 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs sm:text-sm text-[#0E0E0E]">
            Show Results 10 of 123456
          </span>
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              className="p-1 sm:p-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors"
              disabled
            >
              <ChevronLeft size={14} className="text-[#0E0E0E]" />
            </button>
            <button className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-blue-600 text-white font-medium text-xs sm:text-sm">
              1
            </button>
            <button className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg border border-gray-300 text-gray-700 font-medium text-xs sm:text-sm hover:bg-gray-100 transition-colors">
              2
            </button>
            <button className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg border border-gray-300 text-gray-700 font-medium text-xs sm:text-sm hover:bg-gray-100 transition-colors">
              3
            </button>
            <button className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg border border-gray-300 text-gray-700 font-medium text-xs sm:text-sm hover:bg-gray-100 transition-colors">
              4
            </button>
            <button className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg border border-gray-300 text-gray-700 font-medium text-xs sm:text-sm hover:bg-gray-100 transition-colors hidden sm:block">
              5
            </button>
            <button className="p-1 sm:p-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors">
              <ChevronRight size={14} className="text-[#0E0E0E]" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DistributorTable;