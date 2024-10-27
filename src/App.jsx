
import TodoList from './components/TodoList';
import UserProfile from './components/UserProfile';
import Settings from './components/Settings';
import CustomModal from './components/CustomModal.jsx';
import useConfirm from './hooks/useConfirm';
import './App.css';

const App = () => {
  const [confirm, ConfirmationDialog] = useConfirm(CustomModal);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8 transition-colors duration-200">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">useConfirm Hook Assignment</h1>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <TodoList confirm={confirm} />
        <UserProfile confirm={confirm} />
        <Settings confirm={confirm} />
      </div>
      <ConfirmationDialog />
    </div>
  );
};

export default App;
