// src/components/frontend/Header.tsx
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My App</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            {/* Add more frontend navigation links as needed */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
