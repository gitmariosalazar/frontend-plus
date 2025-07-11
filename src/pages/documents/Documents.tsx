import State from '@/components/status/State';
import './Documents.css';
import CustomTable from '@/components/table/CustomTable';
import FormDialog from '@/components/dialog/FormDialog';
import Register from '../register/Register';
import AlertDialog from '@/components/dialog/AlertDialog';
import Options from '@/components/options/Options';
import { AddCircle, BorderColor, Check, CheckBox, Close, CloseOutlined, CloseRounded, CloseSharp, DeleteForever, HighlightOffRounded, Key, Preview } from '@mui/icons-material';
import { documentsData } from '@/data/documents';
import { useEffect, useState } from 'react';
import Loading from '@/components/loading/Loading';
import FullScreenDialog from '@/components/dialog/FullScreenDialog';
import AddProcess from '../process/AddProcess';
import AddDocument from './AddDocument';
import SelectLabel from '@/components/input/SelectedLabel';

export const Documents = () => {

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
        description:
          'Official document that establishes the terms and conditions of an agreement between the public entity and the supplier'
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
  const columns = [
    { header: 'Process Code', key: 'process_code', sortable: true },
    { header: 'Document Title', key: 'document_title', sortable: true },
    { header: 'File', key: 'file', sortable: true },
    { header: 'Date', key: 'date', sortable: true },
    {
      header: 'Is Valid',
      key: 'isvalid',
      render: (value:boolean) => {
        return (
          <div className="is-valid">
            <FormDialog
              title="Change status Item"
              icon={
                value ? (
                  <CheckBox style={{ width: '14px', height: '14px', color: 'green' }} />
                ) : (
                  <HighlightOffRounded style={{ width: '14px', height: '14px', color: 'red' }} />
                )
              }
            >
              <SelectLabel
                label="Tipo de documento"
                options={paymentOptions}
                value={selectedOption}
                onChange={handleChange}
                placeholder="Choose a document type"
                name="paymentMethod"
                required
              />
            </FormDialog>
          </div>
        );
      }
    },
    {
      header: 'Status',
      key: 'status',
      render: (value: { code: number; name: string }) => <State code={value.code} label={value.name} />
    },
    {
      header: 'Options',
      key: 'options',
      render: () => (
        <div className="custom-table-options">
          <FullScreenDialog title="Edit document selected" icon={<BorderColor style={{ width: '14px', height: '14px', color: 'green' }} />}>
            <AddDocument />
          </FullScreenDialog>
          <AlertDialog title="Delete Item" icon={<DeleteForever style={{ width: '14px', height: '14px', color: 'red' }} />}>
            Are you sure you want to delete this item? This action cannot be undone.
          </AlertDialog>
          <FullScreenDialog title="Preview selected document" icon={<Preview style={{ width: '14px', height: '14px', color: 'magenta' }} />}>
            <AddDocument />
          </FullScreenDialog>
          <Options />
        </div>
      )
    }
  ];
  const [loading, setLoading] = useState(true); // Estado inicial para mostrar la carga

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Cambia a false después de 10 segundos
    }, 500); // 10,000 ms = 10 segundos

    return () => clearTimeout(timer); // Limpia el temporizador al desmontar el componente
  }, []);
  return (
    <>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="documents">
          <CustomTable
            data={documentsData}
            columns={columns}
            rowsPerPage={12}
            table_title="Documents reviews Management"
            button={
              <FullScreenDialog title="Add new Document" label_button="Add Document" icon={<AddCircle />}>
                <AddDocument />
              </FullScreenDialog>
            }
          />
        </div>
      )}
    </>
  );
};

export default Documents;

