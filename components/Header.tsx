import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <Link href="/">
              <a className="text-2xl font-bold text-gray-900">MySaaS</a>
            </Link>
            <nav className="ml-10 space-x-4">
              <Link href="/features">
                <a className="text-gray-500 hover:text-gray-900">Features</a>
              </Link>
              <Link href="/pricing">
                <a className="text-gray-500 hover:text-gray-900">Pricing</a>
              </Link>
              <Link href="/about">
                <a className="text-gray-500 hover:text-gray-900">About</a>
              </Link>
              <Link href="/contact">
                <a className="text-gray-500 hover:text-gray-900">Contact</a>
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <a className="text-gray-500 hover:text-gray-900">Login</a>
            </Link>
            <Link href="/signup">
              <a className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Sign Up
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
