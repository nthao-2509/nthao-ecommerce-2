import { Tag } from 'antd'
import { ColumnsType } from 'antd/es/table'
import EditComponents from './editComponents'

export interface DataType {
  firstName: string
  lastName: string
  email: string
  active: number
  id: string
  role: 'buyer' | 'salesman'
}

export const columns: ColumnsType<DataType> = [
  {
    title: 'Họ tên',
    dataIndex: 'firstName',
    width: '20%',
    render: (_: any, record: DataType) => {
      return (
        <span>
          {record?.firstName} {record?.lastName}
        </span>
      )
    },
    sorter: (a: any, b: any) => a.age - b.age,
  },
  {
    title: 'email',
    dataIndex: 'email',
    width: '20%',
    sorter: (a: any, b: any) => a.age - b.age,
  },
  {
    title: 'Role',
    dataIndex: 'role',
    width: '10%',
    render: (_: any, record: DataType) => {
      return <span>{record?.role === 'buyer' ? 'Người mua' : 'Người bán'}</span>
    },
    // sorter: (a: any, b: any) => a.role - b.,
    filters: [
      {
        text: 'Người mua',
        value: 'buyer',
      },
      {
        text: 'Người bán',
        value: 'salesman',
      },
    ],
    onFilter: (value: string | number | boolean, record: DataType) => record.role === value,
    // sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },

  {
    title: 'Trạng thái',
    dataIndex: 'active',
    width: '10%',
    render(value, record, index) {
      return (
        <div
          style={{
            textAlign: 'center',
          }}
        >
          {value === 1 ? <Tag color='success'>Đã kích hoạt</Tag> : <Tag color='error'>Chưa kích hoạt</Tag>}
        </div>
      )
    },
  },
  {
    title: 'Thao tác',
    dataIndex: 'edit',
    width: '10%',
    render(value, record, index) {
      return <EditComponents record={record} />
    },
  },
]
