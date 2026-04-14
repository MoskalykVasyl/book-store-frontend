import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { NavLink } from 'react-router';

export function AdminSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <NavLink
          to="/admin"
          end
          className={({ isActive }) =>
            `block px-2 py-1 rounded-md transition ${
              isActive
                ? 'bg-primary text-white'
                : 'text-muted-foreground hover:bg-accent'
            }`
          }
        >
          Admin Panel
        </NavLink>
      </SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <NavLink
            to="add-book"
            className={({ isActive }) =>
              `block px-2 py-1 rounded-md transition ${
                isActive
                  ? 'bg-primary text-white'
                  : 'text-muted-foreground hover:bg-accent'
              }`
            }
          >
            Add new book
          </NavLink>
        </SidebarMenuItem>
      </SidebarMenu>
    </Sidebar>
  );
}
