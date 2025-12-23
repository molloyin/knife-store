import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="max-w-6xl mx-auto bg-zinc-900 rounded-lg shadow-lg border border-zinc-800 mb-4">
      <div className="p-6 pb-4">
        <div className="text-center mb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            OBJECTIVE RESOURCE GROUP
          </h1>
          <p className="text-sm md:text-base text-gray-400 font-medium tracking-wide">
            Custom Knives • Built for Purpose • Veteran Owned
          </p>
        </div>
        
        <div className="border-t border-zinc-800 pt-4 mt-4">
          <div className="flex flex-wrap justify-center gap-2">
            <Link href="/" className="flex-1 min-w-[120px]">
              <button className="w-full bg-zinc-950 border border-zinc-700 px-6 py-3 rounded-md text-sm font-semibold text-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200">
                Home
              </button>
            </Link>
            <Link href="/knifelist" className="flex-1 min-w-[120px]">
              <button className="w-full bg-zinc-950 border border-zinc-700 px-6 py-3 rounded-md text-sm font-semibold text-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200">
                Shop Knives
              </button>
            </Link>
            <Link href="/about" className="flex-1 min-w-[120px]">
              <button className="w-full bg-zinc-950 border border-zinc-700 px-6 py-3 rounded-md text-sm font-semibold text-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200">
                About
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

// export function Header() {
//   return (
//     <div className="text-center">
//       <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
//         OBJECTIVE RESOURCE GROUP
//       </h1>
//       <p className="text-sm md:text-base text-gray-400 font-medium tracking-wide">
//         Custom Knives  Built for Purpose / Veteran Owned
//       </p>
//     </div>
//   );
// }

// export function NavLinks() {
//   return (
//     <div className="flex flex-wrap justify-center gap-2">
//       <Link href="/" className="flex-1 min-w-[120px]">
//         <button className="w-full bg-zinc-950 border border-zinc-700 px-6 py-3 rounded-md text-sm font-semibold text-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200">
//           Home
//         </button>
//       </Link>
//       <Link href="/knifelist" className="flex-1 min-w-[120px]">
//         <button className="w-full bg-zinc-950 border border-zinc-700 px-6 py-3 rounded-md text-sm font-semibold text-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200">
//           Shop Knives
//         </button>
//       </Link>
//       <Link href="/about" className="flex-1 min-w-[120px]">
//         <button className="w-full bg-zinc-950 border border-zinc-700 px-6 py-3 rounded-md text-sm font-semibold text-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200">
//           About
//         </button>
//       </Link>
//     </div>
//   );
// }
