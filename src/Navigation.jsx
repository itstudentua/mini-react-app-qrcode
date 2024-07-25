import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <Link to="/generate">Генерировать QR-code</Link>
      <Link to="/scanner">Сканировать QR-code</Link>
      <Link to="/generatehistory">История генерации</Link>
      <Link to="/scanhistory">История сканирования</Link>
    </nav>
  );
}