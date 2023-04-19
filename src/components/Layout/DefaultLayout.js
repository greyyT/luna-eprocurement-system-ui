import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
  return (
    <div>
      <Sidebar />
      <main className="pl-80">
        <div className="">{children}</div>
      </main>
    </div>
  );
}

export default DefaultLayout;
