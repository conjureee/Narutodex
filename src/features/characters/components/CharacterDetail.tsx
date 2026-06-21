// import CharacterCard from './CharacterCard';
// import { characters } from '../data/characters';
import { useParams } from "react-router-dom";
import {characters} from "../data/characters";
import CharacterCard from "./CharacterCard";

const CharacterList = () => {

    const { id } = useParams();

    const character = characters.find(c => c.id === Number(id));

    if (!character) return <p>Nie znaleziono postaci</p>

    return (
        <div className="p-8 max-w-7xl mx-auto">

            <h1>
                Post: {id}
            </h1>

            <CharacterCard character={character} />

            <a
                href="/"
                className="px-10 py-4 bg-orange-600 hover:bg-orange-700 text-xl font-semibold rounded-xl transition"
            >
                Wróć
            </a>
        </div>
    );
};

export default CharacterList;