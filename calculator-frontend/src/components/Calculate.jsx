import React, {useState} from 'react';

function Calculate(props) {

  function handleChangeTaxes(event) {
    props.setTaxes(event.target.value);
  }

  function handleChangeDiscounts(event) {
    props.setDiscount(event.target.value);
  }

  return (
    <div className="calculate">
        <br/>

        Taxes (%): <input type="number" id="taxes" name="taxes" onChange={handleChangeTaxes} value={props.taxes} placeholder="Taxes" required/>
        
        Discount (%): <input type="number" id="discount" name="quantity" onChange={handleChangeDiscounts} value={props.discount} placeholder="Quantity" required/>
        
        <br/>
        {/* These will only display if total or grandTotal is not null (i.e., calculate button was just clicked)*/}
        {props.total && <h3>Your total is: {props.total} </h3> }
        {props.grandTotal && <h3>Your grand total is: {props.grandTotal} </h3> }
        <button type="button" className="btn btn-custom btn-dark btn-lg" onClick={props.calculateTotal}> Calculate </button>
    </div>
  );
}

export default Calculate;
