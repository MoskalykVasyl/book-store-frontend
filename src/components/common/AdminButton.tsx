import { Link } from "react-router";


export function AdminButton() {
  return (
    <Link
      to="admin"
      className="group relative inline-flex items-center justify-center overflow-hidden
                 px-3 py-2 ml-3 rounded-full
                 bg-linear-to-r from-blue-600 to-indigo-900
                 text-white font-bold text-sm tracking-wider
                 shadow-lg shadow-blue-500/50
                 animate-pulse-glow
                 hover:scale-110 hover:shadow-blue-500/70
                 transition-all duration-300"
    >
      {/* Ефект "блиску", що пробігає по кнопці */}
      <span
        className="absolute inset-0 w-1/3 h-full 
                   bg-linear-to-r from-transparent via-white/40 to-transparent
                   animate-shine"
      />

      <span className="relative z-10 flex items-center gap-1.5">
        ⚙️ ADMIN
      </span>

      {/* Маленький пульсуючий індикатор в кутку */}
      <span className="absolute -top-1 right-0 flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-ping" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500" />
      </span>
    </Link>
  );
}