import type { ReactNode } from "react";
import AdminHeader from "@/components/admin/layouts/AdminHeader";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <AdminHeader />
      <main>{children}</main>
    </div>
  );
}
