import { MdOutlineRemoveCircle } from "react-icons/md";


const ProductTable = ({productDetails, setProductDetails}) => {
console.log(productDetails)
    const deletbtn = (unique)=>{
        const filteredProduct = productDetails.filter((value, index)=> index !== unique)
        setProductDetails(filteredProduct);
    }
    
  return (
    <div className='ShowProduct'>
        {
            productDetails.length > 0 ?
            <table>
            <tr>
                <th>Product id</th>
                <th>Product name</th>
                <th>Product price</th>
                <th>Quantity</th>
                <th>Color code</th>
            </tr>
           {
            productDetails.map((product, index)=>(
                <tr key={product.productId}>
                    <td>{product.productId}</td>
                    <td>{product.ProductName}</td>
                    <td>৳: {product.price}</td>
                    <td>{product.quantity}</td>
                    <td>{product.color}</td>
                    <button onClick={()=>deletbtn(index)}><MdOutlineRemoveCircle /></button>
                </tr>
            ))
        }
        <button onClick={()=>setProductDetails([])}>Clear all Product</button>
        </table>
        :
        <div className='noProduct'>
            <p>No products have been added yet</p>
        </div>
        }
    </div>
  )
}

export default ProductTable;