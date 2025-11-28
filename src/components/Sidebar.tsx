import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  UserCheck,
  Building2,
  BarChart3,
  Bell,
  Archive,
  Calendar,
  BarChart2,
  BookOpen,
  Settings,
  ChevronRight,
  CircleSmall,
  Maximize2 
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "#" },
  {
    icon: Users,
    label: "Investors",
    href: "#",
    submenu: true,
  },
  {
    icon: UserCheck,
    label: "Distributors",
    href: "#",
    active: true,
    submenu: true,
    expanded: true,
    subitems: [
      { label: "Associated Investors", href: "#" },
      { label: "Performance Overview", href: "#" },
      { label: "Agreement Status & Docs", href: "#" },
      { label: "Documents & Compliance", href: "#" },
    ],
  },
  {
    icon: Building2,
    label: "Funds",
    href: "#",
    submenu: true,
  },
  {
    icon: BarChart3,
    label: "Invested Companies",
    href: "#",
    submenu: true,
  },
  {
    icon: BarChart2,
    label: "Investment Records",
    href: "#",
    submenu: true,
  },
  {
    icon: Maximize2 ,
    label: "Workflow & Automation",
    href: "#",
    submenu: true,
  },
  { icon: Bell, label: "Notifications", href: "#", submenu: true },
  { icon: Archive, label: "Document Repository", href: "#", submenu: true },
  { icon: Calendar, label: "Compliance Calendar", href: "#", submenu: true },
  { icon: BarChart2, label: "Reports", href: "#", submenu: true },
  { icon: BookOpen, label: "Knowledge Base / CMS", href: "#", submenu: true },
  { icon: Settings, label: "Settings & Permissions", href: "#", submenu: true },
];

function Sidebar() {
  const [expandedItems, setExpandedItems] = useState(new Set(["Distributors"]));

  const toggleExpanded = (label: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(label)) {
      newExpanded.delete(label);
    } else {
      newExpanded.add(label);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div className="w-72 bg-white border-r border-gray-200 overflow-y-auto [&::-webkit-scrollbar]:hidden">
      <nav className="p-4">
        <div className="space-y-1">
          {menuItems.map((item) => {
            const isExpanded = expandedItems.has(item.label);
            const Icon = item.icon;

            return (
              <div key={item.label}>
                <button
                  onClick={() => item.submenu && toggleExpanded(item.label)}
                  className={`group w-full h-10 flex items-center justify-between px-4 py-3 rounded-[10px] transition-colors ${
                    isExpanded
                      ? "bg-[#2B3E9E] text-white"
                      : "text-gray-700 hover:bg-[#2B3E9E] hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={20} />
                    <span className="text-sm font-normal">{item.label}</span>
                  </div>
                  {item.submenu && (
                    <ChevronRight
                      size={16}
                      className={`transition-transform ${
                        isExpanded ? "rotate-90" : ""
                      }`}
                    />
                  )}
                </button>

                {item.expanded && item.subitems && isExpanded && (
                  <div>
                    {item.subitems.map((subitem) => (
                      <button
                        key={subitem.label}
                        className="w-full h-10 mt-2 flex items-center justify-between px-4 py-3  rounded-[10px] transition-colors text-gray-700 hover:bg-[#5C6DEF] hover:text-[#FFFFFF]"
                      >
                        <div className="flex items-center gap-3">
                          <CircleSmall className="font-bold" />
                          <span className="text-sm font-normal">
                            {subitem.label}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
