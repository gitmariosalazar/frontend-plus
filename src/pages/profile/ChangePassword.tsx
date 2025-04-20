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

interface ChangePasswordFormInputs {
  email: string;
  password: string;
}

const API_URL = '';

export const ChangePassword = () => {
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
  } = useForm<ChangePasswordFormInputs>();

  const onSubmit: SubmitHandler<ChangePasswordFormInputs> = (data) => {
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
        <div className="edit-profile">
          <div className="login-boxs">
            <div className="profile-container-edit">
              <div className="login-box">
                <div className="profile-edit-header">
                  <h3 className="profile-title">My Profile</h3>
                  <div className="photo-user">
                    <img src={icons.user_icon} alt="" className="photo-edit-user" />
                  </div>
                </div>
                <div className="input-horizontal-1">
                  <div className="input-box fp-content">
                    <InputPassword
                      label="Current Secret Key"
                      type="password"
                      placeholder="Enter your current password"
                      name="password"
                      value={watch('password') || ''}
                      onChange={(e) => {
                        setValue('password', e.target.value);
                        trigger('password');
                      }}
                      error={errors.password?.message || null}
                      resetError={() => trigger('password')}
                      validator={(value) =>
                        value.length >= 6 ? { isValid: true } : { isValid: false, msg: 'Password must be at least 6 characters' }
                      }
                      leftIcon={icons.key}
                    />
                  </div>
                  <div className="input-box fp-content">
                    <InputPassword
                      label="Repeat Secret Key"
                      type="password"
                      placeholder="Confirm your password"
                      name="password"
                      value={watch('password') || ''}
                      onChange={(e) => {
                        setValue('password', e.target.value);
                        trigger('password');
                      }}
                      error={errors.password?.message || null}
                      resetError={() => trigger('password')}
                      validator={(value) =>
                        value.length >= 6 ? { isValid: true } : { isValid: false, msg: 'Password must be at least 6 characters' }
                      }
                      leftIcon={icons.key}
                    />
                  </div>
                  <div className="input-box fp-content">
                    <InputPassword
                      label="Repeat Secret Key"
                      type="password"
                      placeholder="Confirm your password"
                      name="password"
                      value={watch('password') || ''}
                      onChange={(e) => {
                        setValue('password', e.target.value);
                        trigger('password');
                      }}
                      error={errors.password?.message || null}
                      resetError={() => trigger('password')}
                      validator={(value) =>
                        value.length >= 6 ? { isValid: true } : { isValid: false, msg: 'Password must be at least 6 characters' }
                      }
                      leftIcon={icons.key}
                    />
                  </div>
                </div>
                <div className="edit-user-btn">
                  <button className="btn-edit-user">
                    <div className="btn-content-profile">
                      <div className="btn-text">
                        {' '}
                        <Update />
                      </div>
                      <div className="btn-text"> Update Password</div>
                    </div>
                  </button>

                  <button className="btn-edit-user-cancel">
                    <div className="btn-content-profile">
                      <div className="btn-text">
                        {' '}
                        <HighlightOffRounded />
                      </div>
                      <div className="btn-text"> Cancel</div>
                    </div>
                  </button>
                </div>
                <hr className="separator" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChangePassword;
