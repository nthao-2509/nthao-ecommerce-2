import axios from 'axios'
const getAllProduct = async () => {
  const response = await axios.get('/select-product')
  return response.data.data
}

const productService = {
  getAllProduct,
}
export default productService
