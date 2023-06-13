import React from 'react'
import Header from 'common/admin/Header'
import { PlusCircleOutlined } from '@ant-design/icons'
import { Button, Col, DatePicker, Form, Image, Input, Modal, Row, Select, Table, Upload, message } from 'antd'
const ManageProductAdmin = () => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)
  const [formAddProduct] = Form.useForm()
  const onFinish = async (values: any) => {}
  return (
    <>
      <Header title='DANH SÁCH SẢN PHẨM'>
        <Button type='primary' icon={<PlusCircleOutlined />} onClick={() => setIsModalOpen(true)}>
          Thêm sản phẩm
        </Button>
      </Header>
      <Modal
        style={{
          height: '80vh',
        }}
        width={'80%'}
        title='DANH MỤC SẢN PHẨM'
        onOk={() => formAddProduct.submit()}
        onCancel={() => setIsModalOpen(false)}
        // confirmLoading={disableButtonSubmit}
        open={isModalOpen}
      >
        <Form onFinish={onFinish} form={formAddProduct} layout='vertical'>
          <Row gutter={[12, 12]}>
            <Col span={12}>
              <Form.Item label='Tên danh mục:' name='name' required>
                <Input placeholder='Tên danh mục' />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label='Mã danh mục' name='code' required>
                <Input placeholder='Mã danh mục' />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  )
}

export default ManageProductAdmin
