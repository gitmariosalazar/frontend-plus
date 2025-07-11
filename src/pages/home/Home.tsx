import './Home.css';
import CustomTable from '@/components/table/CustomTable';
import { invoiceData } from '@/data/invoice';
import Register from '../register/Register';
import { AppStore } from '@/redux/store';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import InputLabel from '@/components/input/InputLabel';
import { icons, menuicons } from '@/assets/assets';
import InputPassword from '@/components/input/InputPassword';
import { Link } from 'react-router-dom';
import {
  AccountCircle,
  BarChart,
  Close,
  Edit,
  InventoryOutlined,
  KeyRounded,
  LogoutRounded,
  Menu,
  Notifications,
  Save,
  Security,
  Settings,
  TextSnippet
} from '@mui/icons-material';
import Loading from '@/components/loading/Loading';
import '../Login/Login.css';
import { useEffect, useState } from 'react';
import Documents from '../documents/Documents';
import NotificationsPage from '../notifications/NotificationsPage';
import Invoices from '../invoices/Invoces';
import Process from '../process/Process';
import DocumentsByUser from '../documents/DocumentsByUser';
import InvoicesByUser from '../invoices/InvocesByUser';
import ProcessByUser from '../process/ProcessByUser';
import EditProfile from '../profile/EditProfile';
import ChangePassword from '../profile/ChangePassword';
import Profile from '../profile/Profile';
interface LoginFormInputs {
  email: string;
  password: string;
}

export const Home = () => {
  const [loading, setLoading] = useState(true); // Status initial to show loading
  const [active, setActive] = useState(false);
  const [modal, setModal] = useState<string>('profile');

  const getModal = (modal: string) => {
    switch (modal) {
      case 'profile':
        return <Profile />;
      case 'edit_profile':
        return <EditProfile />;
      case 'edit_password':
        return <ChangePassword />;
      case 'invoices':
        return <InvoicesByUser />;
      case 'documents':
        return <DocumentsByUser />;
      case 'process':
        return <ProcessByUser />;
      case 'notifications':
        return <NotificationsPage />;
    }
  };

  const handleClickMenu = (active: boolean) => {
    setActive(!active);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Change to false after ten seconds
    }, 500); // 10,000 ms = 10 seconds

    return () => clearTimeout(timer); // Clean the temporize
  }, []);
  const dispatch = useDispatch();
  const userState = useSelector((store: AppStore) => store.user);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    trigger,
    watch
  } = useForm<LoginFormInputs>();

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="home">
          <div className="home-container">
            <div className="home-box-left">
              <div className="home-sidebar">
                <div className="home-menu">
                  <div className="home-menu-header">
                    <div className="menu-header">
                      <p>MAIN MENU</p>
                      <div className="menu-active" onClick={() => handleClickMenu(active)}>
                        {active ? <Menu /> : <Close />}
                      </div>
                    </div>
                    <div className={active ? 'menu-home-list active-menu' : 'menu-home-list'}>
                      <div className="menu-list-content">
                        <div className="menu-list-items">
                          <button
                            className={modal === 'profile' ? 'btn-menu-home active' : 'btn-menu-home'}
                            onClick={() => {
                              setModal('profile');
                            }}
                          >
                            <div className="menu-list-icon">
                              <AccountCircle />
                            </div>
                            <div className="menu-list-text">Public profile</div>
                          </button>
                          <button
                            className={modal === 'edit_profile' ? 'btn-menu-home active' : 'btn-menu-home'}
                            onClick={() => {
                              setModal('edit_profile');
                            }}
                          >
                            <div className="menu-list-icon">
                              <Edit />
                            </div>
                            <div className="menu-list-text">Edit User</div>
                          </button>
                          <button
                            className={modal === 'edit_password' ? 'btn-menu-home active' : 'btn-menu-home'}
                            onClick={() => {
                              setModal('edit_password');
                            }}
                          >
                            <div className="menu-list-icon">
                              <Security />
                            </div>
                            <div className="menu-list-text">Change Password</div>
                          </button>
                          <button
                            className={modal === 'notifications' ? 'btn-menu-home active' : 'btn-menu-home'}
                            onClick={() => {
                              setModal('notifications');
                            }}
                          >
                            <div className="menu-list-icon">
                              <Notifications />
                            </div>
                            <div className="menu-list-text">Notifications</div>
                          </button>
                          <button
                            className={modal === 'process' ? 'btn-menu-home active' : 'btn-menu-home'}
                            onClick={() => {
                              setModal('process');
                            }}
                          >
                            <div className="menu-list-icon">
                              <BarChart />
                            </div>
                            <div className="menu-list-text">My process</div>
                          </button>
                          <button
                            className={modal === 'documents' ? 'btn-menu-home active' : 'btn-menu-home'}
                            onClick={() => {
                              setModal('documents');
                            }}
                          >
                            <div className="menu-list-icon">
                              <TextSnippet />
                            </div>
                            <div className="menu-list-text">My Documents</div>
                          </button>
                          <button
                            className={modal === 'invoices' ? 'btn-menu-home active' : 'btn-menu-home'}
                            onClick={() => {
                              setModal('invoices');
                            }}
                          >
                            <div className="menu-list-icon">
                              <InventoryOutlined />
                            </div>
                            <div className="menu-list-text">My Invoices</div>
                          </button>
                          <button className={`btn-menu-home ${active}`}>
                            <div className="menu-list-icon">
                              <LogoutRounded />
                            </div>
                            <div className="menu-list-text">Logout</div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-box-right">{getModal(modal)}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
