import * as controller from "./controller/controller";

const main = () => {
  const data = controller.getAll();
  const character = controller.getCharacterById(1);
};

main();
