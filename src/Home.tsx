import { useState } from 'react';
import { Plus, Clock } from 'lucide-react';
import { TimerList } from './components/TimerList';
// import { AddTimerModal } from './components/AddTimerModal';
import { Toaster } from 'sonner';
import { AddEditModal } from './components/common/AddEditmodel';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="mx-80 mt-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <Toaster position="top-right" />
      <div className="container mx-auto px-4 py-8">
        <div className='flex items-center justify-between'>
          <div className="flex items-center gap-3 mb-8">
            <Clock className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Timer</h1>
          </div>
          <button                                                           
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 mb-8 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            <Plus className="w-5 h-5" />
            Add Timer
          </button>
        </div>          
        
        <TimerList />
        
        <AddEditModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          mode="add"
        />
      </div>
    </div>
  );
}

export default Home;