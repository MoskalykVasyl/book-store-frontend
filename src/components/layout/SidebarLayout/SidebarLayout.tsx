import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AdminSidebar } from "../AdminSidebar/AdminSidebar"

export default function SidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className='h-full'>
        <AdminSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}