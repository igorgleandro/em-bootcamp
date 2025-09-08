import './ProdDescRender.css'
import QuantNumb from './QuantNumb'
import AddCartBtn from './AddCartBtn'

function ProdDescRender() {
  console.log("ProdDescRender Loaded")

  return (
    <div className="prodDescRender">
        <div> Product Description Box Here</div>
        <div className = "productBox">
          <QuantNumb />
          <AddCartBtn />
        </div>
    </div>
  )
}

export default ProdDescRender