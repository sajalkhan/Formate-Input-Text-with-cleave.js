import React,{useState} from 'react';
import TextPhoneField from '../src/Components/phone-text/phone-text';
import MoneyTextField from '../src/Components/money-text/phone-text';
import './App.css'

function App() {

  const [phone, setPhoneRawValue] = useState("");
  const [invoice, setInvoice] = useState("");

  function onCustomPhoneValueChange(e) {
    setPhoneRawValue(e.target.rawValue);
  }

  function onCustomInvoiceValueChange(e) {
    setInvoice(e.target.rawValue);
  }

  return (
    <div className='app'>
      <TextPhoneField
        title="Mobile Number"
        value={phone}
        onChange={onCustomPhoneValueChange}
      />

      <MoneyTextField
        title="Invoice Amount"
        value={invoice}
        onChange={onCustomInvoiceValueChange}
      />

      <p>Phone number: {phone}</p>
      <p>Invoice Amount: {invoice}</p>
    </div>
  );
}

export default App;
