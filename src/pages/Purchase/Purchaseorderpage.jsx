import React from 'react'
import Paymentouts from '../../Components/Purchase/paymentouts/Paymentouts'
import Pourchaseorder from '../../Components/Purchase/Pourchaseorder';
import "./purchaseorderpage.css"

const Purchaseorderpage = () => {
  return (
    <div className='purchase-bill-container'>
        <h4 className='purchase-order-h4'>Orders</h4>
    <Pourchaseorder/>

</div>
  )
}

export default Purchaseorderpage