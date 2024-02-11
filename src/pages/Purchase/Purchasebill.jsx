import React from 'react';
import "./purchase-bill.css"
import Thismonth from '../../Components/Purchase/Thismonth';
import Transactions from '../../Components/Purchase/Transactions/Transactions';

const Purchasebill = () => {
  return (
    <div className='purchase-bill-container'>
        <Thismonth/>
        <Transactions/>
    </div>
  )
}

export default Purchasebill