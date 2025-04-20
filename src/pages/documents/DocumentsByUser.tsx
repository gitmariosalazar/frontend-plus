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
import AddDocument from './AddDocument';

export const DocumentsByUser = () => {
  const columns = [
    { header: 'Process Code', key: 'process_code', sortable: true },
    { header: 'Document Title', key: 'document_title', sortable: true },
    { header: 'File', key: 'file', sortable: true },
    { header: 'Date', key: 'date', sortable: true },
    {
      header: 'Is Valid',
      key: 'isvalid',
      render: (value: boolean) => {
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
              <h3>Are you sure of change status?</h3>
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
          <FullScreenDialog
            title="Preview selected document"
            icon={<Preview style={{ width: '14px', height: '14px', color: 'magenta' }} />}
          >
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
        <div className="documents-by-user">
          <CustomTable
            data={documentsData}
            columns={columns}
            rowsPerPage={11}
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

export default DocumentsByUser;

