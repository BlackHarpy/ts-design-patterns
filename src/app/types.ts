type Id = number | string;  // Interfaces can't be used to rename primitives

type Alignment = "good" | "neutral" | "evil"; // String literal type

type Modifier = -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5; // Number literal type

type SavingThrowType = "Fortitude" | "Reflex" | "Will"; // String literal type

export type { Id, Alignment, Modifier, SavingThrowType }