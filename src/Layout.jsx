import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import QrCodeGenerator from './QrCodeGenerator';
import QrCodeScanner from './QrCodeScanner';
import GenerateHistory from './GenerateHistory';
import ScanHistory from './ScanHistory';

export default function Layout() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/generate' element={<QrCodeGenerator />} />
        <Route path='/scanner' element={<QrCodeScanner />} />
        <Route path='/generatehistory' element={<GenerateHistory />} />
        <Route path='/scanhistory' element={<ScanHistory />} />

      </Routes>
    </div>
  )
}