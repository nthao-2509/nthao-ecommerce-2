import { ColumnsType } from 'antd/es/table'
import { Image } from 'antd'
import { UrlServer } from 'config/UrlServer'

export const columns: ColumnsType<any> = [
  {
    title: 'Hình ảnh',
    dataIndex: 'images',
    key: 'images',
    render: (_: any, record: any) => <Image width={200} src={`${UrlServer}/image/${record?.images?.[0]}`} />,
  },
  {
    title: 'Tên sản phẩm',
    dataIndex: 'nameProduct',
    key: 'nameProduct',
  },
  {
    title: 'Giá sản phẩm',
    dataIndex: 'priceProduct',
    key: 'priceProduct',
  },
]
