import { notification } from 'antd';

export const useNotification = () => {
  
  const showNotification = ({placement, type = 'info', message = ''}: 
  {placement: any, type: any,  message: string}) => {
    notification.open({
      placement,
      bottom: 50,
      duration: 7,
      message,
      type: type
    })
  }


  return { showNotification }
}
