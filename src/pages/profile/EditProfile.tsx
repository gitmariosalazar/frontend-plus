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

export const EditProfile = () => {
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
                <div className="input-horizontal-2">
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
                <hr className="separator-inputs" />
                <div className="input-horizontal-2">
                  <div className="input-box-h">
                    <InputLabel
                      label="Card ID"
                      type="text"
                      placeholder="1003938477"
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
                      label="Bird Date"
                      type="date"
                      placeholder="02-02-1995"
                      name="email"
                      value={watch('email') || ''}
                      onChange={(e) => {
                        setValue('email', e.target.value);
                        trigger('email');
                      }}
                      error={errors.email?.message || null}
                      resetError={() => trigger('email')}
                      //rightIcon={icons.phone}
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
                  <div className="input-box">
                    <InputLabel
                      label="Address"
                      type="email"
                      placeholder="Enter your address"
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
                          return { isValid: false, msg: 'Address is required' };
                        }
                        if (!emailRegex.test(value)) {
                          return { isValid: false, msg: 'Invalid email format' };
                        }
                        return { isValid: true };
                      }}
                      rightIcon={icons.location}
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

export default EditProfile;
