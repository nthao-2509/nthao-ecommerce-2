import Header from 'common/admin/Header'
import React from 'react'
import { Button, Col, DatePicker, Form, Image, Input, Modal, Row, Select, Table, Upload, message } from 'antd'
import TextEditor from 'common/TextEditor'
import { UploadOutlined } from '@ant-design/icons'
import axios from 'axios'
import { UrlServer } from 'config/UrlServer'
import _ from 'lodash'
import { ColumnsType } from 'antd/es/table'
import { columns } from './tableData/column'
import { DataTabsLeatestProduct } from 'modules/data-fake'
import { useSelector } from 'react-redux'
import { RootState } from 'store'
import { columnsAdmin } from './tableData/columnAdmin'
import AddProduct from './manageProduct/AddProduct'
import { getQueryHelper, postQueryHelper } from 'helpers/queryHelper'
import { ADMIN_QUERY_ALL_PRODUCT, ADMIN_QUERY_PRODUCT_BY_USER_ID } from 'modules/QueryKey'
import { useQuery } from 'react-query'

const fetchByUserId = (idUser?: string) => {
  return postQueryHelper('/select-product-by-id-user', {
    idUser,
  })
}
const fetchAllProduct = () => {
  return getQueryHelper('/select-product-admin')
}

const ManageProduct = () => {
  const [formAddProduct] = Form.useForm()
  //
  const { user } = useSelector((state: RootState) => state.auth)
  // Khai báo State
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [disableButtonSubmit, setDisableButtonSubmit] = React.useState(false)
  const { data: dataProduct, isLoading }: any = useQuery(ADMIN_QUERY_PRODUCT_BY_USER_ID, () =>
    user.role === 'salesman' ? fetchByUserId(user.idUser) : fetchAllProduct()
  )

  // const { data: dataProduct, isLoading }: any = useQuery(ADMIN_QUERY_PRODUCT_BY_USER_ID, () => {
  //   if (user.role === 'salesman') {
  //     fetchByUserId(user.idUser)
  //   } else if (user.role === 'admin') {
  //     fetchAllProduct()
  //   }
  // })
  console.log('🚀 ~ file: ManageProduct.tsx:43 ~ const{data:dataProduct,isLoading}:any=useQuery ~ dataProduct:', dataProduct)

  return (
    <div>
      <Header title='QUẢN LÝ SẢN PHẨM'>
        {user.role === 'salesman' && (
          <Button type='primary' onClick={() => setIsModalOpen(true)}>
            Thêm sản phẩm
          </Button>
        )}
      </Header>

      <Modal
        style={{
          height: '80vh',
        }}
        width={'80%'}
        title='THÊM SẢN PHẨM'
        onOk={() => formAddProduct.submit()}
        onCancel={() => setIsModalOpen(false)}
        confirmLoading={disableButtonSubmit}
        open={isModalOpen}
      >
        <AddProduct form={formAddProduct} setDisableButtonSubmit={setDisableButtonSubmit} setIsModalOpen={setIsModalOpen} />
      </Modal>

      <Table columns={user.role === 'admin' ? columnsAdmin : columns} loading={isLoading} dataSource={dataProduct} />
    </div>
  )
}

export default ManageProduct
