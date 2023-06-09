import {
  MemoryRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

function Hello() {
  const navigate = useNavigate();

  const addKey = () => window.electron.store.set('somehting', '1234');

  const getKey = () => {
    const key = window.electron.store.get('somehting');
    // eslint-disable-next-line no-alert
    alert(key);
  };

  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <button type="button" onClick={() => navigate('/authed')}>
          <span role="img" aria-label="books">
            📚
          </span>
          Go to authed page
        </button>
        <button type="button" onClick={addKey}>
          Add Key
        </button>
        <button type="button" onClick={getKey}>
          Get Key
        </button>
      </div>
    </div>
  );
}

function AuthedPage() {
  const navigate = useNavigate();

  return (
    <div>
      <div>Hello</div>
      <button type="button" onClick={() => navigate('/')}>
        <span role="img" aria-label="books">
          📚
        </span>
        Back
      </button>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/authed" element={<AuthedPage />} />
      </Routes>
    </Router>
  );
}
