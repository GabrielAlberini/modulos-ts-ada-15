import { readFileSync } from "node:fs";
import { ApiData, Character } from "../interfaces/interfaces";

const getAll = (): ApiData => {
  const PATH = "./database/data.json";
  return JSON.parse(readFileSync(PATH).toString());
};

const getCharacterById = (id: number): string => {
  const data = getAll();

  const character = data.results.find(
    (character: Character) => character.id === id
  );

  return character.name;
};

export { getAll, getCharacterById };
