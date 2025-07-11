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
import {
  CategoryOutlined,
  CorporateFareOutlined,
  DataArrayTwoTone,
  DataObjectTwoTone,
  DateRangeRounded,
  Email,
  FileUploadOutlined,
  HighlightOffRounded,
  Looks5Rounded,
  NotesOutlined,
  PaymentOutlined,
  Save,
  SaveOutlined,
  ThirteenMpRounded,
  Update
} from '@mui/icons-material';
import Loading from '@/components/loading/Loading';
import { useEffect, useState } from 'react';
import '../Login/Login.css';
import '../profile/Profile.css';
import '../documents/AddDocument.css';

interface EditProfileFormInputs {
  email: string;
  password: string;
}

const API_URL = '';

export const AddProcess = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
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
        <div className="add-document">
          <div className="add-document-container">
            <div className="add-document-box">
              {' '}
              <div className="input-horizontal-2">
                <div className="input-box-h">
                  <InputLabel
                    label="Process Number"
                    type="text"
                    placeholder="PR-BC6CEC01"
                    name="fullname"
                    value={watch('email') || ''}
                    onChange={(e) => {
                      setValue('email', e.target.value);
                      trigger('email');
                    }}
                    error={errors.email?.message || null}
                    resetError={() => trigger('email')}
                    rightIcon={<ThirteenMpRounded />}
                  />
                </div>
                <hr className="separator" />
                <div className="input-box-h">
                  <InputLabel
                    label="Adjudicate Value"
                    type="number"
                    placeholder="2569.25"
                    name="email"
                    value={watch('email') || ''}
                    onChange={(e) => {
                      setValue('email', e.target.value);
                      trigger('email');
                    }}
                    error={errors.email?.message || null}
                    resetError={() => trigger('email')}
                    rightIcon={<Looks5Rounded />}
                  />
                </div>
              </div>
              <hr className="separator-inputs" />
              <div className="input-horizontal-1">
                <div className="input-box">
                  <InputLabel
                    label="Entidad Contratante"
                    type="email"
                    placeholder="Airmax Telecom S.A"
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
                    rightIcon={<CorporateFareOutlined />}
                  />
                </div>
                <div className="input-box">
                  <InputLabel
                    label="Plazo de Ejecucion"
                    type="email"
                    placeholder="Object ejecution"
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
                    rightIcon={<DateRangeRounded />}
                  />
                </div>
                <div className="input-box">
                  <InputLabel
                    label="Objeto de Proceso"
                    type="email"
                    placeholder="Object process"
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
                    rightIcon={<DataArrayTwoTone />}
                  />
                </div>
              </div>
            </div>
            <div className="add-document-box">
              <div className="input-horizontal-2">
                <div className="input-box-h">
                  <InputLabel
                    label="Forma de Pago"
                    type="text"
                    placeholder="Transferencia Bancaria"
                    name="fullname"
                    value={watch('email') || ''}
                    onChange={(e) => {
                      setValue('email', e.target.value);
                      trigger('email');
                    }}
                    error={errors.email?.message || null}
                    resetError={() => trigger('email')}
                    rightIcon={<PaymentOutlined />}
                  />
                </div>
                <hr className="separator" />
                <div className="input-box-h">
                  <InputLabel
                    label="Categoria"
                    type="text"
                    placeholder="category"
                    name="email"
                    value={watch('email') || ''}
                    onChange={(e) => {
                      setValue('email', e.target.value);
                      trigger('email');
                    }}
                    error={errors.email?.message || null}
                    resetError={() => trigger('email')}
                    rightIcon={<CategoryOutlined />}
                  />
                </div>
              </div>

              <div className="input-horizontal-1">
                <div className="input-box">
                  <InputLabel
                    label="Descripcion"
                    type="email"
                    placeholder="Enter your description"
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
                    rightIcon={<NotesOutlined />}
                  />
                </div>
                <div className="input-box">
                  <InputLabel
                    label="Documentos"
                    type="email"
                    placeholder="Agregar documentos"
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
                    rightIcon={<FileUploadOutlined />}
                  />
                </div>
              </div>
              <hr className="separator-inputs" />
              <div className="input-horizontal-2">
                <div className="input-box-h">
                  <InputLabel
                    label="Funcionario Encargado"
                    type="text"
                    placeholder="mariosalazar.ms.10@gmail.com"
                    name="fullname"
                    value={watch('email') || ''}
                    onChange={(e) => {
                      setValue('email', e.target.value);
                      trigger('email');
                    }}
                    error={errors.email?.message || null}
                    resetError={() => trigger('email')}
                    rightIcon={<Email />}
                  />
                </div>
                <hr className="separator" />
                <div className="input-box-h">
                  <InputLabel
                    label="Vigencia"
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
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="edit-user-btn">
            <button className="btn-edit-user">
              <div className="btn-content-profile">
                <div className="btn-text">
                  {' '}
                  <SaveOutlined />
                </div>
                <div className="btn-text"> Save</div>
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
        </div>
      )}
    </>
  );
};

export default AddProcess;
