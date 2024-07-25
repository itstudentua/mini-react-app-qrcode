import { QRCodeSVG } from 'qrcode.react'
import { useState } from 'react'
import './qrCodegenerator.css'
import { GENERATE_DATA } from './constants';

export default function QrCodeGenerator() {

  const [inputValue, setInputValue] = useState("");
  const [isShowQR, setIsShowQR] = useState('');


  const onClickHandler = () => {

    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

    localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, inputValue])); 

    setIsShowQR(inputValue);
    setInputValue('');
  }

  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
    setIsShowQR('');
  }
  return (
    <div>
      <input
        className='input' 
        type="text" 
        value={inputValue} 
        onChange={onChangeHandler} 
        placeholder='Enter some text..'
        />
      <button type='button' onClick={onClickHandler}>Generate QR Code </button>
      {isShowQR !== '' && <QRCodeSVG value={isShowQR} />}
    </div>
  )
}