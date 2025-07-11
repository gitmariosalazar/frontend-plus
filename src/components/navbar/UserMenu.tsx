import { useCallback, useState } from 'react';
import Avatar from './Avatar';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';
import {
  Login,
  Settings,
  HowToReg,
  AccountCircle,
  ArrowDropDown,
  Edit,
  Notifications,
  PowerSettingsNew,
  Cancel,
  Close,
  CloseOutlined,
  ManageAccounts
} from '@mui/icons-material';
import BackDrop from './BackDrop';
import './UserMenu.css';
import { icons } from '@/assets/assets';

interface User {
  photo: string;
  name: string;
  email: string;
}

interface UserMenuProps {
  user?: User;
  isAuthenticated: boolean;
  onLogout: () => void;
}

const UserMenu: React.FC<UserMenuProps> = ({ user, isAuthenticated, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      <div className="relative z-30">
        <div className="user-menu-trigger" onClick={toggleOpen}>
          <Avatar src={isAuthenticated ? user?.photo : 'https://i.postimg.cc/CxVYM67x/user-icon.png'} height={30} width={30} />
          <span className="user-name-text">{!isAuthenticated ? user?.name : 'Mario Salazar'}</span>
          <ArrowDropDown />
        </div>
        {isOpen && (
          <div className="user-menu">
            {isAuthenticated ? (
              <div>
                <div className="user-head">
                  <div className="user-box">
                    <img src={icons.mario} alt="Google" />
                    <span className="user-span">MAS</span>
                  </div>
                  <div className="user-box-right">
                    <div className="signout">
                      <CloseOutlined
                        style={{ fontSize: 30 }}
                        onClick={() => {
                          setIsOpen(false);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="user-details">
                  <div className="user-image">
                    <Avatar src={user?.photo || icons.mariosalazar} height={90} width={90} />
                  </div>
                  <div className="user-details-right">
                    <p className="user-name">{user?.name || 'Mario Salazar'}</p>
                    <p className="user-email">{user?.email || 'mariosalazar.ms.10@gmail.com'}</p>
                    <Link to="/" className="user-link">
                      My Microsoft account
                    </Link>
                    <Link to="/" className="user-link">
                      My Profile
                    </Link>
                  </div>
                </div>
                <hr />
                <div className="user-footer">
                  <Link to="/" className="link-menu">
                    <MenuItem onClick={toggleOpen}>
                      <div className="sub-menu-user">
                        <ManageAccounts className="mr-1" style={{ fontSize: 20 }} />
                        <p>Manage Account</p>
                      </div>
                    </MenuItem>
                  </Link>
                  <Link to="/" className="link-menu">
                    <MenuItem onClick={toggleOpen}>
                      <div className="sub-menu-user">
                        <Edit className="mr-1" style={{ fontSize: 20 }} />
                        <p>Edit User</p>
                      </div>
                    </MenuItem>
                  </Link>{' '}
                  <Link to="/" className="link-menu">
                    <MenuItem onClick={toggleOpen}>
                      <div className="sub-menu-user">
                        <Settings className="mr-1" style={{ fontSize: 20 }} />
                        <p>Settings</p>
                      </div>
                    </MenuItem>
                  </Link>{' '}
                  <Link to="/" className="link-menu">
                    <MenuItem onClick={toggleOpen}>
                      <div className="sub-menu-user">
                        <Notifications className="mr-1" style={{ fontSize: 20 }} />
                        <p>Notifications</p>
                      </div>
                    </MenuItem>
                  </Link>{' '}
                  <Link to="/" className="link-menu">
                    <MenuItem onClick={toggleOpen}>
                      <div className="sub-menu-user"> 
                        <PowerSettingsNew className="mr-1" style={{ fontSize: 20 }} />
                        <p>Logout</p>
                      </div>
                    </MenuItem>
                  </Link>
                </div>
              </div>
            ) : (
              <div>
                <Link to="/login">
                  <MenuItem onClick={toggleOpen}>
                    <div className="sub-menu-user">
                      <Login className="mr-2" style={{ fontSize: 20 }} />
                      <p>Login</p>
                    </div>
                  </MenuItem>
                </Link>
                <Link to="/register">
                  <MenuItem onClick={toggleOpen}>
                    <div className="sub-menu-user">
                      <HowToReg className="mr-2" style={{ fontSize: 20 }} />

                      <p>Register</p>
                    </div>
                  </MenuItem>
                </Link>
                <Link to="/">
                  <MenuItem onClick={toggleOpen}>
                    <div className="sub-menu-user">
                      {' '}
                      <Settings className="mr-2" style={{ fontSize: 20 }} />
                      <p>Settings</p>
                    </div>
                  </MenuItem>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
      {isOpen ? <BackDrop onClick={toggleOpen} /> : null}
    </>
  );
};

export default UserMenu;
