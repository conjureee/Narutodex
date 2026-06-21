import type { Character } from "../data/characters";

type Props = {
    character: Character;
    onClick?: (id: number) => void;
}

export default function CharacterCard({ character, onClick }: Props) {
    return (
        <div onClick={() => onClick?.(character.id)}>
            <h1>{character.name}</h1>
            <h2>{character.japaneseName}</h2>
            <p>{character.clan}</p>
            <p>{character.rank}</p>
            <p>{character.status}</p>
            <p>{character.kekkeiGenkai}</p>
            <p>{character.description}</p>
            <hr/>
        </div>
    );
}
