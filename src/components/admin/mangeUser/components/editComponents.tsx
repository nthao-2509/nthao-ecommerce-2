import { Button, Popconfirm, Space, Tooltip, message } from 'antd'
import React from 'react'

import { LockOutlined, UnlockOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { InformationUser } from 'types/Types'
import axios from 'axios'
import { postQueryHelper } from 'helpers/queryHelper'
import { useQueryClient } from 'react-query'
import { ADMIN_QUERY_USER } from 'modules/QueryKey'

type Props = {
  record: InformationUser
}

const EditComponents = ({ record }: Props) => {
  const queryClient = useQueryClient()

  const handleUpdateStatus = async (idUser: string, status: number) => {
    const response: any = await postQueryHelper('/update-status-user', {
      idUser,
      status: status === 1 ? 0 : 1,
    })
    if (response === 'success') {
      queryClient.invalidateQueries(ADMIN_QUERY_USER)
      message.success('Cập nhật thất bại')
    } else {
      message.error('Cập nhật thất bại')
    }
  }
  const handleDeleteUser = async (values: any) => {}

  return (
    <Space wrap>
      <Popconfirm
        placement='topRight'
        title={'CẢNH BÁO'}
        description={`Bạn có chắc chắn muốn cập nhật trạng thái tài khoản ${record.email}`}
        onConfirm={() => handleUpdateStatus(record.id, record.active)}
        okText='Yes'
        cancelText='No'
      >
        <Tooltip title={`${record?.active === 0 ? 'Mở' : 'Khóa'} tài khoản`}>
          {record?.active === 0 ? (
            <Button shape='circle' type='dashed' icon={<UnlockOutlined />} />
          ) : (
            <Button danger shape='circle' type='dashed' icon={<LockOutlined />} />
          )}
        </Tooltip>
      </Popconfirm>
      <Tooltip title={`Cập nhật tài khoản`}>
        <Button shape='circle' type='dashed' icon={<EditOutlined />} />
      </Tooltip>
      <Tooltip title={`Xóa tài khoản`}>
        <Button danger shape='circle' type='dashed' icon={<DeleteOutlined />} />
      </Tooltip>
    </Space>
  )
}

export default EditComponents
