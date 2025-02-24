import { Human, Beast } from './interfaces';

const player: Human = {
  id: 1,
  name: "Human",
  abilities: [
    { id: 1, name: "Strength", value: 10, modifier: 0 },
    { id: 2, name: "Dexterity", value: 10, modifier: 0 },
    { id: 3, name: "Constitution", value: 10, modifier: 0 },
    { id: 4, name: "Intelligence", value: 10, modifier: 0 },
    { id: 5, name: "Wisdom", value: 10, modifier: 0 },
    { id: 6, name: "Charisma", value: 10, modifier: 0 },
  ],
  npc: false,
  alignment: "good",
  level: 1,
  background: "Noble",
  deity: "Torm"
}

const owlbear: Beast = {
  id: 2,
  name: "Owlbear",
  category: "giant animal",
  abilities: [
    { id: 1, name: "Strength", value: 10, modifier: 0 },
    { id: 2, name: "Dexterity", value: 10, modifier: 0 },
    { id: 3, name: "Constitution", value: 10, modifier: 0 },
    { id: 4, name: "Intelligence", value: 10, modifier: 0 },
    { id: 5, name: "Wisdom", value: 10, modifier: 0 },
    { id: 6, name: "Charisma", value: 10, modifier: 0 },
  ],
  npc: true,
  alignment: "neutral",
  level: 1,
}

export { player, owlbear }