import { Button } from '../core/components';
import { useNavigate } from 'react-router-dom';

export default function UsersPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Usuarios</h1>
          <Button
            variant="secondary"
            onClick={() => navigate('/')}
          >
            ← Volver
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition">
            <h3 className="text-xl font-semibold mb-2">Usuario 1</h3>
            <p className="text-gray-400">Descripción del usuario</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition">
            <h3 className="text-xl font-semibold mb-2">Usuario 2</h3>
            <p className="text-gray-400">Descripción del usuario</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition">
            <h3 className="text-xl font-semibold mb-2">Usuario 3</h3>
            <p className="text-gray-400">Descripción del usuario</p>
          </div>
        </div>
      </div>
    </div>
  );
}
