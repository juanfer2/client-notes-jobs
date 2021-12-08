import React from 'react'
import { Button, notification, Space } from 'antd';

function Toast() {
  const openNotification = ({placement, type = 'info'}: {placement: any, type: any}) => {
    notification.open({
      placement,
      bottom: 50,
      duration: 3,
      message: 'This notification',
      type: type
    })
  };

  return (
    <div>
      <Button type="primary" onClick={() => openNotification({placement: 'bottomLeft', type: 'success'})}>
        topLeft
      </Button>
    </div>
  )
}

export default Toast
