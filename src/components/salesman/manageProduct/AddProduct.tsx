import React from 'react'

import { Button, Col, DatePicker, Form, Input, Row, Select, Upload, message } from 'antd'
import axios from 'axios'
import { UrlServer } from 'config/UrlServer'
import { DataTabsLeatestProduct } from 'modules/data-fake'
import { UploadOutlined } from '@ant-design/icons'
import _ from 'lodash'
import TextEditor from 'common/TextEditor'

const { Option } = Select
const getBase64 = (file: any) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = () => resolve(reader.result)

    reader.onerror = (error) => reject(error)
  })
type Props = {
  setIsModalOpen: Function
  setDisableButtonSubmit: Function
  form: any
}
const AddProduct = ({ setIsModalOpen, setDisableButtonSubmit, form }: Props) => {
  const [nation, setNation] = React.useState<{ label: string; value: string }[]>([])
  const [localVN, setLocalVN] = React.useState<any>(null)
  const [fileList, setFileList] = React.useState([])
  const [listTinhTP, setListTinhTP] = React.useState<{ value: string; label: string }[]>([])
  const [listQuanHuyen, setListQuanHuyen] = React.useState<any>([])
  const [listPhuongXa, setListPhuongXa] = React.useState<any>([])
  const [address, setAddress] = React.useState<any>()
  const [detailProduct, setDetailProduct] = React.useState<string>('')
  const [infoUserSalesman, setInfoUserSalesman] = React.useState<any>()

  // Select danh sách quốc gia
  const selectAllNation = async () => {
    const response = await axios.get(`${UrlServer}/json-data/nation.json`)
    setNation(response.data)
  }
  // Select danh sách các tỉnh thành Việt Nam
  const selectLocalVN = async () => {
    const response = await axios.get(`${UrlServer}/json-data/local.json`)
    const newListTinh_TP: { value: string; label: string }[] = []
    response?.data?.map((item: any) => {
      newListTinh_TP?.push({
        value: item.code,
        label: item.name,
      })
    })
    setListTinhTP(newListTinh_TP)
    setLocalVN(response.data)
  }
  // Select all product

  //
  // Update Image

  const handleChange = async (e: any) => {
    setFileList(e.fileList)
  }
  const handlePreview = async (file: any) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj)
    }
    // setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))
  }
  const uploadButton = (
    <Button
      style={{
        marginTop: 20,
      }}
      icon={<UploadOutlined />}
    >
      Tải hình ảnh
    </Button>
  )
  // end

  const handleChangeTinhTP = (value: string, option: any) => {
    const newDataQuan_Huyen: any = []
    _.filter(localVN, { code: value })?.[0]?.districts?.map((item: any) =>
      newDataQuan_Huyen.push({
        value: item.id,
        label: item.name,
        ...item,
      })
    )
    setListQuanHuyen(newDataQuan_Huyen)
    setAddress((prev: any) => ({
      ...prev,
      tinhTP: option.label,
    }))
  }
  const handleChangeQuanHuyen = (value: string, option: any) => {
    const newDataPhuongXa: any = []
    const filterDataPhuongXa = _.filter(listQuanHuyen, { value: value })?.[0]
    filterDataPhuongXa?.wards?.map((item: any) =>
      newDataPhuongXa.push({
        value: item.id,
        label: item.prefix + ' ' + item.name,
        ...item,
      })
    )
    filterDataPhuongXa?.streets?.map((item: any) =>
      newDataPhuongXa.push({
        value: item.id,
        label: item.prefix + ' ' + item.name,
        ...item,
      })
    )
    filterDataPhuongXa?.project?.map((item: any) =>
      newDataPhuongXa.push({
        value: item.id,
        label: item.prefix + ' ' + item.name,
        ...item,
      })
    )
    setListPhuongXa(newDataPhuongXa)
    setAddress((prev: any) => ({
      ...prev,
      quan_huyen: option.label,
    }))
  }

  // submit
  const onSendInfoProductToServer = async (values: any) => {
    setDisableButtonSubmit(true)
    const parameters = {
      idUser: infoUserSalesman.id,
      nameProduct: values.name,
      priceProduct: values.price,
      address: `${values.soNha ? values.soNha + ' / ' : ''}${address.phuong_xa} / ${address.quan_huyen} / ${address.tinhTP}`,
      thongSoKyThuat: {
        hangSanPham: values.hangSanPham,
        namDangKy: values['namDangKy'].format('YYYY'),
        tinhTrangSuDung: values.tinhTrangSuDung,
        tinhTrangBaoHanh: values.tinhTrangBaoHanh,
        dongSanPham: values.dongSanPham,
        xuatXu: values.xuatXu,
      },
      detailProduct,
      images: fileList.map((item: any) => item?.response?.name),
    }
    const response = await axios.post('/add-product', parameters)
    if (response.data.message === 'success') {
      setDisableButtonSubmit(false)
      message.success('Thêm sản phẩm thành công')
      setIsModalOpen(false)
    } else {
      setDisableButtonSubmit(false)
      setIsModalOpen(false)
      message.error('Thêm sản phẩm thất bại')
    }
  }
  const selectInfoUserFromLocal = async () => {
    const info: any = await localStorage.getItem('info_user')
    setInfoUserSalesman(JSON.parse(info))
  }

  React.useEffect(() => {
    selectAllNation()
    selectLocalVN()
    selectInfoUserFromLocal()
  }, [])
  return (
    <Form onFinish={onSendInfoProductToServer} form={form} layout='vertical'>
      <Row gutter={[12, 12]}>
        <Col span={12}>
          <Form.Item label='Tên sản phẩm:' name='name' required>
            <Input placeholder='Tên sản phẩm' />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label='Giá sản phẩm:' name='price' required>
            <Input placeholder='Giá sản phẩm' />
          </Form.Item>
        </Col>
      </Row>
      <strong className='ant-form-text'>Địa chỉ:</strong>
      <Row gutter={[12, 12]}>
        <Col span={6}>
          <Form.Item label='Tỉnh / Thành Phố:' name='tinh_TP' required>
            <Select
              showSearch
              style={{ width: '100%' }}
              placeholder='Tỉnh / Thành Phố'
              optionFilterProp='children'
              onChange={handleChangeTinhTP}
              filterOption={(input: any, option: any) => (option?.label ?? '').includes(input)}
              filterSort={(optionA, optionB) => (optionA?.label ?? '').toUpperCase().localeCompare((optionB?.label ?? '').toUpperCase())}
              options={listTinhTP}
            />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label='Quận / Huyện:' name='quan_huyen' required>
            <Select
              showSearch
              style={{ width: '100%' }}
              placeholder='Quận / Huyện'
              optionFilterProp='children'
              onChange={handleChangeQuanHuyen}
              filterOption={(input: any, option: any) => (option?.label ?? '').includes(input)}
              filterSort={(optionA, optionB) => (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())}
              options={listQuanHuyen}
            />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label='Phường / Xã / Thị trấn / Đường:' name='phuong_xa' required>
            <Select
              showSearch
              style={{ width: '100%' }}
              onChange={(value: string, option: any) => {
                setAddress((prev: any) => ({
                  ...prev,
                  phuong_xa: option.label,
                }))
              }}
              placeholder='Phường / Xã / Thị trấn / Đường'
              optionFilterProp='children'
              filterOption={(input: any, option: any) => (option?.label ?? '').includes(input)}
              filterSort={(optionA, optionB) => (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())}
              options={listPhuongXa}
            />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label='Số nhà (Không bắt buộc):' name='soNha'>
            <Input placeholder='Số nhà (Không bắt buộc)' />
          </Form.Item>
        </Col>
      </Row>
      <strong className='ant-form-text'>Thông số kỹ thuật</strong>
      <Row gutter={[12, 12]}>
        <Col span={4}>
          <Form.Item label='Hãng sản phẩm:' name='hangSanPham' rules={[{ required: true, message: 'Vui lòng nhập hãng của sản phẩm' }]}>
            <Input placeholder='Hãng sản phẩm' />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item label='Năm đăng ký / mua' name='namDangKy' rules={[{ required: true, message: 'Vui lòng chọn năm mua hoặc đăng ký sản phẩm' }]}>
            <DatePicker
              style={{
                width: '100%',
              }}
              format='YYYY'
              placeholder='Năm đăng ký / mua'
              picker='year'
            />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item name='tinhTrangSuDung' label='Tình trạng' rules={[{ required: true, message: 'Vui lòng chọn tình trạng sản phẩm' }]}>
            <Select placeholder='Tình trạng'>
              <Option value={0}>Chưa sử dụng</Option>
              <Option value={1}>Đã sử dụng</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item name='tinhTrangBaoHanh' label='Tình trạng bảo hành' rules={[{ required: true, message: 'Vui lòng chọn tình trạng bảo hành' }]}>
            <Select placeholder='Tình trạng bảo hành'>
              <Option value={0}>Còn bảo hành</Option>
              <Option value={1}>Hết bảo hành</Option>
              <Option value={2}>Đang cập nhật</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item name='dongSanPham' label='Loại sản phẩm' rules={[{ required: true, message: 'Vui lòng chọn nhập dòng sản phẩm' }]}>
            <Select style={{ width: '100%' }} placeholder='Loại sản phẩm'>
              {DataTabsLeatestProduct.map((item: any) => (
                <Option value={item.key} key={item.id}>
                  {item.title}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item name='xuatXu' label='Xuất xứ' rules={[{ required: true, message: 'Vui lòng chọn nơi xuất xứ' }]}>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder='Noi xuất xứ'
              optionFilterProp='children'
              filterOption={(input: any, option: any) => (option?.label ?? '').includes(input)}
              filterSort={(optionA, optionB) => (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())}
              options={nation}
            />
          </Form.Item>
        </Col>
      </Row>
      <strong className='ant-form-text'>MÔ TẢ CHI TIẾT</strong>

      <TextEditor height={300} setDetailProduct={setDetailProduct} />
      <Upload
        action={`${UrlServer}/api/dacn-2023/upload-image-product`}
        fileList={fileList}
        onPreview={handlePreview}
        onChange={(e) => handleChange(e)}
        progress={{
          strokeColor: {
            '0%': '#108ee9',
            '100%': '#87d068',
          },
          strokeWidth: 3,
          format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
        }}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
    </Form>
  )
}

export default AddProduct
