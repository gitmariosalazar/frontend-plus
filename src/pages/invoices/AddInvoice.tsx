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
  ContactEmergencyOutlined,
  CorporateFareOutlined,
  DataArrayTwoTone,
  DataObjectTwoTone,
  DateRangeRounded,
  Email,
  FileUploadOutlined,
  HighlightOffRounded,
  Looks5Rounded,
  MonetizationOnOutlined,
  NotesOutlined,
  PaymentOutlined,
  Save,
  SaveOutlined,
  ThirteenMpRounded,
  ThirtyFps,
  Update
} from '@mui/icons-material';
import Loading from '@/components/loading/Loading';
import { useEffect, useState } from 'react';
import '../Login/Login.css';
import '../profile/Profile.css';
import '../documents/AddDocument.css';
import SelectLabel from '@/components/input/SelectedLabel';

interface EditProfileFormInputs {
  email: string;
  password: string;
}

const API_URL = '';

export const AddInvoice = () => {
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
const paymentOptions = [
  { value: 1, label: 'Credit Card', description: 'Borrow funds for goods/services' },
  { value: 2, label: 'Debit Card', description: 'Directly deducts from account' },
  { value: 3, label: 'Bank Transfer', description: 'Transfer funds between accounts' },
  { value: 4, label: 'Cash', description: 'Physical currency' },
  { value: 5, label: 'Mobile Payment', description: 'Payments via mobile apps' },
  { value: 6, label: 'PayPal', description: 'Secure online payments' }
];
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (option: any) => {
    setSelectedOption(option);
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
                    label="Invoice Value"
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
                  <div className="input-horizontal-2">
                    <div className="input-box-h">
                      <InputLabel
                        label="Fecha de Emision"
                        type="date"
                        placeholder="Transferencia Bancaria"
                        name="fullname"
                        value={watch('email') || ''}
                        onChange={(e) => {
                          setValue('email', e.target.value);
                          trigger('email');
                        }}
                        error={errors.email?.message || null}
                        resetError={() => trigger('email')}
                      />
                    </div>
                    <hr className="separator" />
                    <div className="input-box-h">
                      <InputLabel
                        label="Fecha de Remision"
                        type="date"
                        placeholder="category"
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
            </div>
            <div className="add-document-box">
              <div className="input-horizontal-2">
                <div className="input-box-h">
                  <InputLabel
                    label="Invoice Number"
                    type="text"
                    placeholder="001-005-00525"
                    name="fullname"
                    value={watch('email') || ''}
                    onChange={(e) => {
                      setValue('email', e.target.value);
                      trigger('email');
                    }}
                    error={errors.email?.message || null}
                    resetError={() => trigger('email')}
                    rightIcon={<ThirtyFps />}
                  />
                </div>
                <hr className="separator" />
                <div className="input-box-h">
                  <InputLabel
                    label="Entity RUC"
                    type="text"
                    placeholder="1001590650001"
                    name="email"
                    value={watch('email') || ''}
                    onChange={(e) => {
                      setValue('email', e.target.value);
                      trigger('email');
                    }}
                    error={errors.email?.message || null}
                    resetError={() => trigger('email')}
                    rightIcon={<ContactEmergencyOutlined />}
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
                    label="Subir Factura en PDF"
                    type="email"
                    placeholder="Agregar documento de factura"
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
                    label="Responsable Encargado"
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
                  <SelectLabel
                    label="Payment Method"
                    options={paymentOptions}
                    value={selectedOption}
                    onChange={handleChange}
                    placeholder="Choose a payment method"
                    name="paymentMethod"
                    required
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

export default AddInvoice;
