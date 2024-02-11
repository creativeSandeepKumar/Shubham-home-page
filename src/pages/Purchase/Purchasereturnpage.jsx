import React from 'react'
import Thismonth from '../../Components/Purchase/Thismonth'
import Paymentouts from '../../Components/Purchase/paymentouts/Paymentouts'
import Purchasereturn from '../../Components/Purchase/Purchasereturn/Purchasereturn'

const Purchasereturnpage = () => {

    const optionsItems = ["Debit note", "other items"]

  return (
    <div className='purchase-bill-container'>
        <Thismonth isshowcards={false} ishowPayment={true} selectoptions={optionsItems} />
        <Purchasereturn />
    </div>
  )
}

export default Purchasereturnpage