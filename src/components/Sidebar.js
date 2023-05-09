function Sidebar() {
  return (
    <nav className="fixed left-0 top-0 bottom-0 w-70 bg-white sidebar-shadow">
      <div className="flex items-center gap-5 p-6">
        <img src="/images/icons/lunar-client.svg" className="w-10" alt="" />
        <p className="font-inter text-black font-semibold">Lunar e-Procurement</p>
      </div>
      <div className="flex flex-col gap-2 pt-4"></div>
    </nav>
  );
}

export default Sidebar;
