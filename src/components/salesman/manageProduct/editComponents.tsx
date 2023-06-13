import { Button, Popconfirm, Space, Tooltip, message } from 'antd'
import React from 'react'

import { LockOutlined, UnlockOutlined, EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons'
import { InformationUser } from 'types/Types'
import { useSelector } from 'react-redux'
import { RootState } from 'store'

type Props = {
  record: any
}

const EditComponents = ({ record }: Props) => {
  const { user } = useSelector((state: RootState) => state.auth)
  const confirm = () => {
    message.info('Clicked on Yes.')
  }
  return (
    <Space wrap>
      {user.role === 'admin' && (
        <Tooltip title={`${record?.active === 0 ? 'Xác nhận' : 'Khóa'} sản phẩm`}>
          {record?.active === 0 ? (
            <Button shape='circle' type='dashed' icon={<UnlockOutlined />} />
          ) : (
            <Button danger shape='circle' type='dashed' icon={<LockOutlined />} />
          )}
        </Tooltip>
      )}
      <Tooltip title={`Cập nhật`}>
        <Button shape='circle' type='dashed' icon={<EditOutlined />} />
      </Tooltip>
      <Tooltip title={`Xem trước`}>
        <Button shape='circle' type='dashed' icon={<EyeOutlined />} />
      </Tooltip>
      <Popconfirm
        placement='topRight'
        title={'CẢNH BÁO'}
        description={'Bạn có chắc chắn muốn xóa ...'}
        onConfirm={confirm}
        okText='Yes'
        cancelText='No'
      >
        <Tooltip title={`Xóa`}>
          <Button danger shape='circle' type='dashed' icon={<DeleteOutlined />} />
        </Tooltip>
      </Popconfirm>
    </Space>
  )
}

export default EditComponents
