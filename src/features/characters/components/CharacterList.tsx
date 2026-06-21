import CharacterCard from './CharacterCard';
import { characters } from '../data/characters';
import { Link } from 'react-router-dom';
import { useState, useMemo } from "react";

const CharacterList = () => {

    const [search, setSearch] = useState('');

    const filteredCharacters = useMemo(() => {
        return characters.filter(c =>
            c.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [search]);

    return (
        <div className="p-8 max-w-7xl mx-auto">
            <h1 className="text-5xl font-bold text-center mb-10">Postacie</h1>

            <input
                type="text"
                placeholder="Szukaj postaci..."
                className="w-full max-w-md mx-auto block mb-10 p-4 bg-gray-900 border border-gray-700 rounded-xl text-lg"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCharacters.map(character => (
                    <Link to={`/characters/${character.id}`} key={character.id}>
                        <CharacterCard character={character} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CharacterList;