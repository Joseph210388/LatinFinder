import { Button } from '../core/components';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-4">¡Bienvenido a LatinFinder!</h1>
        <p className="text-gray-300 text-lg mb-8">Descubre el mundo de las culturas latinas</p>
        <Button
          variant="primary"
          size="lg"
          onClick={() => navigate('/users')}
        >
          Explorar Usuarios
        </Button>
      </div>
    </div>
  );
}
