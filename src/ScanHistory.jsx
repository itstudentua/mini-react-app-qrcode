import { SCAN_DATA  } from './constants';
import { QRCodeSVG } from 'qrcode.react';

export default function ScanHistory() {
  const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

  return(
    <div>
      {prevData.map((el) => <p>{el} <QRCodeSVG value={el} size={70} /></p>)}
    </div>
  );
}