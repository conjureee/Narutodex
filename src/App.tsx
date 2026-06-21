import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CharacterList from './features/characters/components/CharacterList';
import CharacterDetail from './features/characters/components/CharacterDetail';

function App() {
    return (
        <div className="min-h-screen bg-gray-950 text-white">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/characters" element={<CharacterList />} />
                <Route path="/characters/:id" element={<CharacterDetail />} />
            </Routes>
        </div>
    );
}

export default App;