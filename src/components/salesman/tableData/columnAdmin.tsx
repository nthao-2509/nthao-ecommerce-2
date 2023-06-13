import { ColumnsType } from 'antd/es/table'
import { Image, Tag } from 'antd'
import { UrlServer } from 'config/UrlServer'
import EditComponents from '../manageProduct/editComponents'
import Colors from 'modules/Colors'
import { formatter } from 'config/numberFormat'
import ViewProfileSalesman from '../manageProduct/ViewProfileSalesman'
import React from 'react'
import PreviewImageProduct from '../manageProduct/PreviewImageProduct'

export const columnsAdmin: ColumnsType<any> = [
  {
    title: 'Tên sản phẩm',
    dataIndex: 'nameProduct',
    key: 'nameProduct',
    width: '20%',
    render: (text: string) => <strong>{text}</strong>,
  },
  {
    title: 'Hình ảnh',
    dataIndex: 'images',
    key: 'images',
    width: '10%',

    render: (text) => <PreviewImageProduct image={text} />,
  },
  {
    title: 'Người bán',
    dataIndex: 'informationUser',
    key: 'informationUser',
    render: (text, record) => <ViewProfileSalesman record={text} />,
    width: '15%',
  },
  {
    title: 'Giá sản phẩm',
    dataIndex: 'priceProduct',
    key: 'priceProduct',
    render: (text) => <span>{formatter.format(text)}</span>,
    width: '10%',
  },
  {
    title: 'Đã bán / Tổng số',
    dataIndex: 'numberOfProduct',
    key: 'numberOfProduct',
    width: '13%',
  },
  {
    title: 'Trạng thái',
    dataIndex: 'active',
    key: 'active',
    width: '10%',
    render: (value: number) => <Tag color={`${value === 1 ? 'success' : 'error'}`}>{value === 1 ? 'Đã' : 'Chưa'} xác nhận</Tag>,
  },
  {
    title: 'Thao tác',
    dataIndex: 'edit',
    key: 'edit',
    render(value, record, index) {
      return <EditComponents record={record} />
    },
  },
]
