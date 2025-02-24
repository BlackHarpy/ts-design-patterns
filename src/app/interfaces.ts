import { Id } from './types';

interface Ability {
  id: Id, // Can accept number or string
  name: string,
  value: number,
  modifier: number
}

interface Character {
  id: Id,
  name: string,
  abilities: Ability[],  // Array of Ability type objects
  npc: boolean,
  alignment: string,
  level: number,
}

interface Character {
  background?: string
}

// An object that implements the Character interface will contain the background property
// The Character interface is now a combination of the two interfaces
// This is called declaration merging 

interface Human extends Character { // Will include Character properties
  deity: string,
}

interface Beast extends Character {
  category: "animal" | "giant animal" | "dinosaur" // Literal type: can only be one of these three values
}

export type { Ability, Character, Human, Beast }