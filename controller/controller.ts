import * as model from "../model/model";

const getAll = () => model.getAll();
const getCharacterById = (id: any) => model.getCharacterById(id);

export { getAll, getCharacterById };
