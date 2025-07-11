import State from '@/components/status/State';
import './Invoice.css';
import CustomTable from '@/components/table/CustomTable';
import { invoiceData } from '@/data/invoice';
import FormDialog from '@/components/dialog/FormDialog';
import Register from '../register/Register';
import AlertDialog from '@/components/dialog/AlertDialog';
import Options from '@/components/options/Options';
import { AddCircle, BorderColor, DeleteForever, Preview } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import Loading from '@/components/loading/Loading';
import FullScreenDialog from '@/components/dialog/FullScreenDialog';
import AddDocument from '../documents/AddDocument';
import AddInvoice from './AddInvoice';

export const InvoicesByUser = () => {
  const columns = [
    { header: 'ID', key: 'id', sortable: true },
    { header: 'Invoice Number', key: 'invoiceNumber', sortable: true },
    { header: 'Entity', key: 'entity', sortable: true },
    { header: 'Process Code', key: 'processCode', sortable: true },
    { header: 'Value', key: 'value', sortable: true },
    { header: 'Date', key: 'date', sortable: true },
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
          <FullScreenDialog title="Edit selected Invoice" icon={<BorderColor style={{ width: '14px', height: '14px', color: 'green' }} />}>
            <AddInvoice />
          </FullScreenDialog>
          <AlertDialog title="Delete Item" icon={<DeleteForever style={{ width: '14px', height: '14px', color: 'red' }} />}>
            Are you sure you want to delete this item? This action cannot be undone.
          </AlertDialog>
          <FullScreenDialog title="Preview selected Invoice" icon={<Preview style={{ width: '14px', height: '14px', color: 'magenta' }} />}>
            <AddInvoice />
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
        <div className="invoice-by-user">
          <CustomTable
            data={invoiceData}
            columns={columns}
            rowsPerPage={12}
            table_title="Invoice reviews Management"
            button={
              <FullScreenDialog title="Add new Invoice" label_button="Add Invoice" icon={<AddCircle />}>
                <AddInvoice />
              </FullScreenDialog>
            }
          />
        </div>
      )}
    </>
  );
};

export default InvoicesByUser;
