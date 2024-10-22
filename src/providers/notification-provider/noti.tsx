import { NotificationData, showNotification } from '@mantine/notifications';
import { IconAlertTriangle, IconBug, IconCheck, IconInfoCircle } from '@tabler/icons-react';
import classesError from './noti-error.module.css';
import classesInfo from './noti-info.module.css';
import classesSuccess from './noti-success.module.css';
import classesWarning from './noti-warning.module.css';

const noti = {
  error: ({ title, message, ...options }: NotificationData) => {
    showNotification({
      title,
      message,
      icon: <IconBug size={18} />,
      classNames: classesError,
      color: 'red',
      ...options,
    });
  },
  success: ({ title, message, ...options }: NotificationData) => {
    showNotification({
      title,
      message,
      icon: <IconCheck size={18} />,
      classNames: classesSuccess,
      color: 'green',
      ...options,
    });
  },
  warning: ({ title, message, ...options }: NotificationData) => {
    showNotification({
      title,
      icon: <IconAlertTriangle size={18} />,
      message,
      classNames: classesWarning,
      color: 'yellow',
      ...options,
    });
  },
  info: ({ title, message, ...options }: NotificationData) => {
    showNotification({
      title,
      icon: <IconInfoCircle size={18} />,
      message,
      classNames: classesInfo,
      color: 'blue',
      ...options,
    });
  },
};

export default noti;
