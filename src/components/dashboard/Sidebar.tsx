
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Book,
  ShoppingCart, 
  ChartBar, 
  Settings,
  LogOut
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarLinkProps {
  to: string;
  icon: React.ElementType;
  children: React.ReactNode;
  onClick?: () => void;
}

const SidebarLink = ({ to, icon: Icon, children, onClick }: SidebarLinkProps) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) => cn(
        "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
        isActive 
          ? "bg-primary text-white font-medium" 
          : "text-gray-600 hover:bg-gray-100"
      )}
    >
      <Icon size={18} />
      <span>{children}</span>
    </NavLink>
  );
};

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isCollapsed, toggleSidebar }: SidebarProps) => {
  return (
    <aside className={cn(
      "fixed left-0 top-0 bottom-0 z-20 flex flex-col border-r bg-white transition-all duration-300",
      isCollapsed ? "w-[70px]" : "w-[250px]"
    )}>
      <div className="flex h-14 items-center gap-2 border-b px-4">
        {!isCollapsed && (
          <h1 className="text-lg font-bold tracking-tight">
            ANKIT BOOK STORE
          </h1>
        )}
        <button 
          onClick={toggleSidebar}
          className="ml-auto rounded-md p-2 hover:bg-gray-100"
        >
          {isCollapsed ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          )}
        </button>
      </div>
      
      <nav className="flex-1 overflow-auto py-4 px-3">
        <div className="flex flex-col gap-2">
          <SidebarLink to="/dashboard" icon={Book}>
            {!isCollapsed && "Books"}
          </SidebarLink>
          <SidebarLink to="/dashboard/orders" icon={ShoppingCart}>
            {!isCollapsed && "Orders"}
          </SidebarLink>
          <SidebarLink to="/dashboard/analytics" icon={ChartBar}>
            {!isCollapsed && "Analytics"}
          </SidebarLink>
          <SidebarLink to="/dashboard/settings" icon={Settings}>
            {!isCollapsed && "Settings"}
          </SidebarLink>
        </div>
      </nav>
      
      <div className="border-t p-3">
        <NavLink
          to="/"
          className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100"
        >
          <LogOut size={18} />
          {!isCollapsed && "Logout"}
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
