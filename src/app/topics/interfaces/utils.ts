import { Character, Human, Beast } from "./interfaces";
import { player, owlbear } from "./mockData";

// Type Assertions

function createCharacter(type: string): Character | undefined {
  if (type === "player") {
    return player;
  } else if (type === "beast") {
    return owlbear;
  }
  return undefined
}

// createCharacter returns a Character object but
// we know it will return a Beast type object
const newBeast = createCharacter("beast") as Beast;

// Alternative syntax: We know this will only return
// a Human type object
const newHuman = <Human>createCharacter("player");