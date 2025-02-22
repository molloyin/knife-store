export default function Navbar() {
    return (
      <div className="max-w-4xl mx-auto">
        <Header />
        <NavLinks />
      </div>
    );
  }
  
  export function Header() {
    return (
      <div className="border-[0.5px] border-white p-4 w-full text-left">
        <p className="text-3xl font-bold tracking-wide pb-1">
          OBJECTIVE RESOURCE GROUP
        </p>
        <p className="text-sm font-medium tracking-widest">
          CUSTOM KNIVES / BUILT FOR PURPOSE
        </p>
      </div>
    );
  }
  
  export function NavLinks() {
    return (
      <div className="w-full mx-auto mt-4">
        <div className="flex justify-between gap-4">
          <button className="flex-1 border-[0.5px] border-white px-6 py-2 uppercase text-sm tracking-widest hover:bg-white hover:text-black transition text-center">
            Home
          </button>
          <button className="flex-1 border-[0.5px] border-white px-6 py-2 uppercase text-sm tracking-widest hover:bg-white hover:text-black transition text-center">
            Knives
          </button>
          <button className="flex-1 border-[0.5px] border-white px-6 py-2 uppercase text-sm tracking-widest hover:bg-white hover:text-black transition text-center">
            About
          </button>
        </div>
      </div>
    );
  }