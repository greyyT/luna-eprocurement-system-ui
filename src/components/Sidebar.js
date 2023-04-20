import { NavLink } from 'react-router-dom';
import { publicRoutes } from '~/routes';

function Sidebar() {
  return (
    <nav className="fixed left-0 top-0 bottom-0 w-80 bg-[#F3F6F9]">
      <div className="flex items-center p-4">
        <img src="/images/icons/lunar-client.png" className="w-20" alt="" />
        <div className="font-bold text-2xl text-primary">
          <h1>Lunar</h1>
          <h1>eProcurement</h1>
        </div>
      </div>
      <div className="mx-6 line"></div>
      <div className="flex flex-col gap-2 pt-4">
        {publicRoutes.map((route, index) => {
          return (
            <NavLink
              className={({ isActive }) =>
                (isActive ? 'bg-white text-primary before:block svg-primary ' : 'text-[#191C24] before:hidden ') +
                'relative pl-6 h-[54px] mr-6 hover:text-primary transition-all flex items-center before:top-0 before:h-full before:bg-primary before:absolute before:left-0 before:w-1 hover:before:block hover:bg-white rounded-r-[60px] link-hover'
              }
              key={index}
              to={route.path}
            >
              <div className="w-8 p-2 rounded-full mr-4 bg-white">
                <img src={route.icon} className="w-full" alt="" />
              </div>
              <p>{route.title}</p>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}

export default Sidebar;
