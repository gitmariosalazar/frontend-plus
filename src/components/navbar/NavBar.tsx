import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { icons, list_menu, menuicons } from '../../assets/assets';
import './NavBar.css';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import UserMenu from './UserMenu';

interface MenuItem {
  state: string;
  menu: string;
  to: string;
  title: string;
  icon: string;
  submenu?: SubmenuItem[];
}

interface SubmenuItem {
  to: string;
  title: string;
  icon: string;
}

export const Navbar: React.FC = () => {
  // Simulación de autenticación y usuario
  const [user, setUser] = useState<{ name: string; isAuthenticated: boolean } | null>(null);
  const [menu, setMenu] = useState<string>('home');
  const [iconbar, setIconbar] = useState<boolean>(true);

  const fetchUser = async () => {
    // Simula la obtención del usuario desde un contexto o API.
    const simulatedUser = {
      name: 'Mario',
      isAuthenticated: true
    };
    setUser(simulatedUser);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const menuList: MenuItem[] = user?.isAuthenticated ? list_menu : list_menu.filter((menu) => menu.state === 'public');

  useEffect(() => {
    console.log(menu);
  }, [menu]);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/" onClick={() => setMenu('home')}>
          <img className="logo" src={icons.logosenb} alt="Logo" />
        </Link>
        <div id="movile" className="menubar">
          <img
            src={iconbar ? menuicons.menubar : menuicons.close}
            alt="Menu Icon"
            className="icon-menu-bar"
            onClick={() => setIconbar(!iconbar)}
          />
        </div>
      </div>
      <div id="list-menu" className={iconbar ? 'navbar-list list-active' : 'navbar-list'}>
        <ul className="navbar-menu">
          {menuList.map((item, index) => (
            <li key={index} className="menu-item">
              <Link
                to={item.to}
                className={menu === item.menu ? 'active menu-link' : 'menu-link'}
                onClick={() => {
                  setMenu(item.menu);
                  setIconbar(!iconbar);
                }}
              >
                <img src={item.icon} alt={`${item.title} Icon`} className="icon-menu" />
                {item.title}
              </Link>
              {item.submenu && item.submenu.length > 0 && (
                <ul className="submenu">
                  {item.submenu.map((subitem, subindex) => (
                    <li key={subindex} className="submenu-list">
                      <Link
                        to={subitem.to}
                        className="item-submenu"
                        onClick={() => {
                          setMenu(item.menu);
                          setIconbar(!iconbar);
                        }}
                      >
                        <img src={subitem.icon} alt={`${subitem.title} Icon`} className="icon-menu" />
                        <p>{subitem.title}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-right">
        <div className="navbar-search-icon notification">
          <Link to="/login">
            <NotificationsIcon />
          </Link>
          <div className="dot"></div>
        </div>
        <UserMenu isAuthenticated onLogout={()=>{}}/>
      </div>
    </div>
  );
};
