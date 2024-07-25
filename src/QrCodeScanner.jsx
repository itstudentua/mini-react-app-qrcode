import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import {SCAN_DATA} from './constants.js'

export default function QrCodeScanner() {
  const [result, setResult] = useState('');
  const scanHandler = (result) => {
    setResult(result[0].rawValue);

    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

    localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, result[0].rawValue]));
  }

  const settings = {
    finder: false,
  }

  const styleSettings = {
    container: {
      width: 350
    }
  }
  return (
    <div>
      <Scanner
        onScan={scanHandler}
        components={settings} 
        styles={styleSettings}
      />
      <p>{result}</p>
    </div>
  );
}