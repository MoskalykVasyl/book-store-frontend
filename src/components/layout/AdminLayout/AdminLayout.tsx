import { Outlet } from "react-router"
import SidebarLayout from "../SidebarLayout/SidebarLayout"


export const AdminLayout = () => {
  return (
    <div >
        <SidebarLayout >
        <Outlet />
        </SidebarLayout>
    </div>
  )
}
