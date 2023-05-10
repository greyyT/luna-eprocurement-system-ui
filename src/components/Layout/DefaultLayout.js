import Sidebar from '../Sidebar';

function DefaultLayout({ children }) {
  return (
    <div>
      <Sidebar />
      <main className="pl-70 h-screen bg-mainBg">
        <div className="flex h-20 bg-white"></div>
        <div className="line"></div>
        <div>{children}</div>
      </main>
    </div>
  );
}

export default DefaultLayout;
