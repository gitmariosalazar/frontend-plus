import { createUserAdapter } from '@/adapters';
import { useFetchAndLoad } from '@/hooks';
import { createUser, modifyUser } from '@/redux/states/user';
import { AppStore } from '@/redux/store';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import InputLabel from '@/components/input/InputLabel';
import { icons } from '@/assets/assets';
import InputPassword from '@/components/input/InputPassword';
import { Link } from 'react-router-dom';
import { HighlightOffRounded, Save, Update } from '@mui/icons-material';
import Loading from '@/components/loading/Loading';
import '../Login/Login.css';
import { useEffect, useState } from 'react';
import './Profile.css';

interface EditProfileFormInputs {
  email: string;
  password: string;
}

const API_URL = '';

export const Profile = () => {
  const [loading, setLoading] = useState(true); // Estado inicial para mostrar la carga

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Cambia a false después de 10 segundos
    }, 500); // 10,000 ms = 10 segundos

    return () => clearTimeout(timer); // Limpia el temporizador al desmontar el componente
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
  } = useForm<EditProfileFormInputs>();

  const onSubmit: SubmitHandler<EditProfileFormInputs> = (data) => {
    console.log('Form Data:', data);
  };

  const google = () => {
    window.open(API_URL + '/auth/google', '_self');
  };

  const twitter = () => {
    window.open(API_URL + '/auth/twitter', '_self');
  };

  const facebook = () => {
    window.open(API_URL + '/auth/facebook', '_self');
  };

  const github = () => {
    window.open(API_URL + '/auth/github', '_self');
  };

  return (
    <>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="profile">
          <div className="profile-container">
            <div className="profile-box">
              <div className="profile-description">
                <div className="profile-photo">
                  <img src={icons.mariosalazar} alt="" className="logo" />
                </div>
                <p className="profile-name">Mario Salazar</p>
                <div className="description-user">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint consequuntur quo voluptate vel asperiores nam maxime,
                    dolor, voluptatibus deserunt pariatur ipsa similique fugit!
                  </p>
                </div>
              </div>
            </div>
            <div className="profile-box">
              <div className="profile-content">
                <div className="profile-right">
                  <div className="profile-info">
                    <h3 className="item-title">Full Name</h3>
                    <p className="item-label">Mario Salazar</p>
                  </div>
                  <div className="profile-info">
                    <h3 className="item-title">Card ID</h3>
                    <p className="item-label">1003938477</p>
                  </div>
                </div>
                <div className="profile-right">
                  <div className="profile-info">
                    <h3 className="item-title">Phone Number</h3>
                    <p className="item-label">0994532438</p>
                  </div>
                  <div className="profile-info">
                    <h3 className="item-title">Email Address</h3>
                    <p className="item-label">mariosalazar.ms.10@gmail.com</p>
                  </div>
                </div>
                <div className="profile-right">
                  <div className="profile-info">
                    <h3 className="item-title">Birth Date</h3>
                    <p className="item-label">02-02-1995</p>
                  </div>
                  <div className="profile-info">
                    <h3 className="item-title">Address</h3>
                    <p className="item-label">Ibarra - El Tejar</p>
                  </div>
                </div>
                <div className="profile-right">
                  <div className="profile-info">
                    <h3 className="item-title">User Rol</h3>
                    <p className="item-label">Admin User</p>
                  </div>
                  <div className="profile-info">
                    <h3 className="item-title">Permissions</h3>
                    <ul className="perimission">
                      <li className="permission-list">Permission A</li>
                      <li className="permission-list">Permission B</li>
                      <li className="permission-list">Permission C</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
