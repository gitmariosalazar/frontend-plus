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
  Newspaper,
  NotesOutlined,
  PaymentOutlined,
  Portrait,
  Save,
  SaveOutlined,
  ThirteenMpRounded,
  ThirtyFps,
  Title,
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

export const AddDocument = () => {
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
    {
      value: 1,
      label: 'Payment Receipt',
      description: 'Document that certifies the completion of a payment to a supplier or contractor'
    },
    {
      value: 2,
      label: 'Invoice',
      description: 'Document issued by a supplier detailing the goods or services provided and their cost'
    },
    {
      value: 3,
      label: 'Contract',
      description: 'Official document that establishes the terms and conditions of an agreement between the public entity and the supplier'
    },
    {
      value: 4,
      label: 'Minutes',
      description: 'Formal document that records decisions, agreements, or events related to the procurement process'
    },
    {
      value: 5,
      label: 'Terms of Reference (TOR)',
      description: 'Document that describes the requirements and specifications for the procurement of goods or services'
    },
    {
      value: 6,
      label: 'Purchase Request',
      description: 'Document that initiates the purchasing process, specifying the required goods or services'
    },
    {
      value: 7,
      label: 'Purchase Order',
      description: 'Formal authorization of the purchase, sent to the supplier for the provision of goods or services'
    },
    {
      value: 8,
      label: 'Goods Reception Report',
      description: 'Document that verifies that goods or services have been delivered according to contract terms'
    },
    {
      value: 9,
      label: 'Supplier Evaluation',
      description: 'Report evaluating the quality and compliance of the supplier after each purchase'
    },
    {
      value: 10,
      label: 'Proposal Evaluation Report',
      description: 'Summary of the proposals received and the evaluation criteria used to select the supplier'
    },
    {
      value: 11,
      label: 'Conformity Report',
      description: 'Certificate of conformity, ensuring that goods or services meet specifications and standards'
    },
    {
      value: 12,
      label: 'Purchase Justification',
      description: 'Argument that supports the necessity of a purchase, usually in non-bidding processes'
    },
    {
      value: 13,
      label: 'Amendment Contract',
      description: 'Additional contract that modifies the terms of a previous one, to adjust deadlines, amounts, or other aspects'
    },
    {
      value: 14,
      label: 'Process Closure Report',
      description: 'Final document confirming that the procurement process has been successfully completed'
    },
    {
      value: 15,
      label: 'Budget Certification',
      description: 'Certificate ensuring there are sufficient funds to cover the purchase cost'
    }
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
                    label="Total Value"
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
                    label="Titulo de Documento"
                    type="email"
                    placeholder="TDR Document"
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
                    rightIcon={<Title />}
                  />
                </div>
                <div className="input-box">
                  <div className="input-horizontal-2">
                    <div className="input-box-h">
                      <InputLabel
                        label="Fecha de Solicitud"
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
                        label="Fecha de Recepcion"
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
                    label="Document Number"
                    type="text"
                    placeholder="DOC-00525"
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
                    label="Subir Documento en PDF"
                    type="email"
                    placeholder="Agregar documento"
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
                    label="Elaborado por"
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
                    rightIcon={<Portrait />}
                  />
                </div>
                <hr className="separator" />
                <div className="input-box-h">
                  <SelectLabel
                    label="Tipo de documento"
                    options={paymentOptions}
                    value={selectedOption}
                    onChange={handleChange}
                    placeholder="Choose a document type"
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

export default AddDocument;
