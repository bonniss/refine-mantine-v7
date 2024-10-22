/* eslint-disable @typescript-eslint/no-unused-vars */
import { hideNotification } from '@mantine/notifications';
import { NotificationProvider } from '@refinedev/core';
import noti from './noti';

const notificationProvider: NotificationProvider = {
  open: ({ message, key, type, description, cancelMutation, undoableTimeout }) => {
    let handler = null;
    switch (type) {
      case 'success':
        handler = noti.success;
        break;
      case 'error':
        handler = noti.error;
        break;
      // @ts-ignore
      case 'warning':
        handler = noti.warning;
        break;
      default:
        handler = noti.info;
        break;
    }
    handler({
      title: description,
      message,
      id: key,
      withBorder: true,
      radius: 'lg',
    });
  },
  close(id: string) {
    hideNotification(id);
  },
};

export default notificationProvider;
