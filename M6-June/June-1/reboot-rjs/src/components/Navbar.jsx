const Navbar = () => {
  return (
    <nav 
      className="bg-purple-700 p-4 flex items-center justify-center"
      aria-label="Main navigation"
    >
      <div className="font-bold text-white text-3xl flex items-center gap-3">
        TODO 
        <span className="text-[16px]">by</span> - 
        <span className="bg-white text-black px-3 py-1 rounded-2xl">
          team<span className="text-purple-700">Shinobi</span>
        </span>
      </div>
    </nav>
  )
}

export default Navbar