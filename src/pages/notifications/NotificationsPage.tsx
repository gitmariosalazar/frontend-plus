import FormDialog from '@/components/dialog/FormDialog';
import React, { useEffect, useState } from 'react'
import Register from '../register/Register';
import AlertDialog from '@/components/dialog/AlertDialog';
import Options from '@/components/options/Options';
import { BorderColor, DeleteForever, Preview } from '@mui/icons-material';
import State from '@/components/status/State';
import Loading from '@/components/loading/Loading';
import CustomTable from '@/components/table/CustomTable';
import { notificationsData } from '@/data/notifications';
import './NotificationsPage.css'

const NotificationsPage = () => {
  const columns = [
    { header: 'ID', key: 'id_notifications', sortable: true },
    {
      header: 'Details',
      key: 'details',
      render: (value: { subject: string, message: string }) => {
        console.log('Row data:', value); // Depurar datos
        const subject = value.subject || 'No subject available';
        const message = value.message || 'No message available';
        return (
          <div className='details-notifications'>
            <strong>{subject}</strong>
            <br />
            <span>{message}</span>
          </div>
        );
      },
    },
    { header: 'Status', key: 'status', sortable: true },
    { header: 'Priority', key: 'priority', sortable: true },
    {
      header: 'Options',
      key: 'options',
      render: () => (
        <div className="custom-table-options">
          <FormDialog title="Edit Item" icon={<BorderColor style={{ width: '14px', height: '14px', color: 'green' }} />}>
            <Register />
          </FormDialog>
          <AlertDialog title="Delete Item" icon={<DeleteForever style={{ width: '14px', height: '14px', color: 'red' }} />}>
            Are you sure you want to delete this item? This action cannot be undone.
          </AlertDialog>
          <FormDialog title="View Item" icon={<Preview style={{ width: '14px', height: '14px', color: 'magenta' }} />}>
            <Register />
          </FormDialog>
          <Options />
        </div>
      )
    }
  ];


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="notifications">
          <CustomTable
            data={notificationsData}
            columns={columns}
            rowsPerPage={8}
            table_title="Notifications Management"
            button={''}
          />
        </div>
      )}
    </>
  );
};

export default NotificationsPage
