import { GENERATE_DATA } from './constants';
import { QRCodeSVG } from 'qrcode.react';

export default function GenerateHistory() {
  const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

  return (
    <div>
      {prevData.map((el) => <p>{el} <QRCodeSVG value={el} size={70} /></p>)}
    </div>
  );
}