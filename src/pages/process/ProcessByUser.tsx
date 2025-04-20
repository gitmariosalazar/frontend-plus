import State from '@/components/status/State';
import './Process.css';
import CustomTable from '@/components/table/CustomTable';
import FormDialog from '@/components/dialog/FormDialog';
import Register from '../register/Register';
import AlertDialog from '@/components/dialog/AlertDialog';
import Options from '@/components/options/Options';
import {
  AddCircle,
  BorderColor,
  Check,
  CheckBox,
  Close,
  CloseOutlined,
  CloseRounded,
  CloseSharp,
  DeleteForever,
  Key,
  Preview
} from '@mui/icons-material';
import Loading from '@/components/loading/Loading';
import { useEffect, useState } from 'react';
import { processData } from '@/data/process';
import FullScreenDialog from '@/components/dialog/FullScreenDialog';
import AddProcess from './AddProcess';

export const ProcessByUser = () => {
  const columns = [
    { header: 'Process Code', key: 'process_code', sortable: true },
    { header: 'Entity', key: 'entity', sortable: true },
    { header: 'Object Process', key: 'object_process', sortable: true },
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
          <FullScreenDialog title="Edit selected process" icon={<BorderColor style={{ width: '14px', height: '14px', color: 'green' }} />}>
            <AddProcess />
          </FullScreenDialog>
          <AlertDialog title="Delete Item" icon={<DeleteForever style={{ width: '14px', height: '14px', color: 'red' }} />}>
            Are you sure you want to delete this item? This action cannot be undone.
          </AlertDialog>
          <FullScreenDialog title="Preview selected Process" icon={<Preview style={{ width: '14px', height: '14px', color: 'magenta' }} />}>
            <AddProcess />
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
        <div className="process-by-user">
          <CustomTable
            data={processData}
            columns={columns}
            rowsPerPage={12}
            table_title="Review Process Management"
            button={
              <FullScreenDialog title="Add new process" label_button="Add Process" icon={<AddCircle />}>
                <AddProcess />
              </FullScreenDialog>
            }
          />
        </div>
      )}
    </>
  );
};

export default ProcessByUser;
