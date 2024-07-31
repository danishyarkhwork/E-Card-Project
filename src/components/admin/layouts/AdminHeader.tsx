// src/components/admin/AdminHeader.tsx
import Link from "next/link";

const AdminHeader = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Admin Panel</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/admin">Dashboard</Link>
            </li>
            {/* Add more admin navigation links as needed */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default AdminHeader;
