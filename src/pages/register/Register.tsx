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
import { Save } from '@mui/icons-material';
import Loading from '@/components/loading/Loading';
import '../Login/Login.css';
import { useEffect, useState } from 'react';

interface LoginFormInputs {
  email: string;
  password: string;
}

const API_URL = '';

export const Register = () => {
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
  } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
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
        <div className="login-page">
          <div className="login-boxs">
            <div className="info-page">
              <div className="logo-info">
                <p>Welcome to the public procurement control and monitoring system</p>
              </div>
              <img src={icons.backend} alt="" className="logo-entity" />
            </div>
          </div>
          <div className="login-boxs">
            <div className="login">
              <div className="login-container-register">
                <div className="login-box">
                  <h3 className="login-title">
                    Welcome to Register Page
                    <div className="logo-user">
                      <img src={icons.user_icon} alt="" className="logo-sigin" />
                    </div>
                  </h3>
                  <div className="input-horizantal-2">
                    <div className="input-box-h">
                      <InputLabel
                        label="Full Name"
                        type="text"
                        placeholder="Mario Salazar"
                        name="fullname"
                        value={watch('email') || ''}
                        onChange={(e) => {
                          setValue('email', e.target.value);
                          trigger('email');
                        }}
                        error={errors.email?.message || null}
                        resetError={() => trigger('email')}
                        rightIcon={icons.user_icon}
                      />
                    </div>
                    <hr className="separator" />
                    <div className="input-box-h">
                      <InputLabel
                        label="Phone Number"
                        type="text"
                        placeholder="0994532438"
                        name="email"
                        value={watch('email') || ''}
                        onChange={(e) => {
                          setValue('email', e.target.value);
                          trigger('email');
                        }}
                        error={errors.email?.message || null}
                        resetError={() => trigger('email')}
                        rightIcon={icons.phone}
                      />
                    </div>
                  </div>
                  <div className="input-horizontal-1">
                    <div className="input-box">
                      <InputLabel
                        label="Email Address"
                        type="email"
                        placeholder="Enter your email address"
                        name="email"
                        value={watch('email') || ''}
                        onChange={(e) => {
                          setValue('email', e.target.value);
                          trigger('email');
                        }}
                        error={errors.email?.message || null}
                        resetError={() => trigger('email')}
                        validator={(value: string) => {
                          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                          if (!value) {
                            return { isValid: false, msg: 'Email is required' };
                          }
                          if (!emailRegex.test(value)) {
                            return { isValid: false, msg: 'Invalid email format' };
                          }
                          return { isValid: true };
                        }}
                        rightIcon={icons.email}
                      />
                    </div>

                    <div className="input-box fp-content">
                      <InputPassword
                        label="Secret Key"
                        type="password"
                        placeholder="Enter your password"
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
                  <div className="login-btn">
                    <button className="btn-login">
                      <div className="btn-content-register">
                        <div className="btn-text">
                          {' '}
                          <Save />
                        </div>
                        <div className="btn-text"> Register me</div>
                      </div>
                    </button>
                  </div>
                  <div className="no-account">
                    <p>{'Do you have an account?'}</p>
                    <Link to="/" className="sign-up">
                      Sign In
                    </Link>
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

export default Register;
