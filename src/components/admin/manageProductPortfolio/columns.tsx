import { Tag } from 'antd'
import { ColumnsType } from 'antd/es/table'

export interface DataType {
  name: string
  code: string
}

export const columns: ColumnsType<DataType> = [
  {
    title: 'Tên danh mục',
    dataIndex: 'name',
    width: '20%',
  },
  {
    title: 'Code',
    dataIndex: 'code',
    width: '20%',
  },
  {
    title: 'Thao tác',
    dataIndex: 'edit',
    width: '10%',
    // render(value, record, index) {
    // return <EditComponents record={record} />
    // },
  },
]
