import { notification } from 'antd';

interface NotificationProps {
  placement: "topRight" | "topLeft" | "bottomRight" | "bottomLeft";
  bottom: number;
  duration: number;
  showProgress: boolean;
  pauseOnHover: boolean;
}

export const useNotification = () => {
  const config: NotificationProps = {
    placement: 'topRight',
    bottom: 50,
    duration: 3,
    showProgress: true,
    pauseOnHover: true,
  };

  notification.config(config);

  return notification;
};


