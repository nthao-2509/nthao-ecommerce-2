import type { TableProps } from 'antd/es/table'
import Header from 'common/admin/Header'
import React from 'react'
import { Input, Table } from 'antd'
import { useQuery } from 'react-query'
import { getQueryHelper } from 'helpers/queryHelper'
import { ADMIN_QUERY_USER } from 'modules/QueryKey'

import { DataType, columns } from './components/columns'

const { Search } = Input

// const QUERY_KEY = [sqlCommand, classId];
const fetcher = () => () => {
  return getQueryHelper('/select-all-user')
}

const IndexManageUser = () => {
  // const queryClient = useQueryClient()
  // queryClient.invalidateQueries(QUERY_KEY);

  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra)
  }
  const { data: allDataUser, isLoading }: any = useQuery(ADMIN_QUERY_USER, fetcher())

  return (
    <>
      <Header title='QUẢN LÝ NGƯỜI DÙNG' />
      <Search
        placeholder='Nhập tên cần tìm kiếm'
        style={{
          width: 300,
          margin: '20px 0',
        }}
        enterButton='Tìm kiếm'
      />
      <Table loading={isLoading} columns={columns} dataSource={allDataUser} onChange={onChange} />
    </>
  )
}

export default IndexManageUser
