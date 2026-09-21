import { Colors } from '~/constants/colors';

export const StatColors = {
  HP: Colors['stat-hp'],
  ATTACK: Colors['stat-attack'],
  DEFENSE: Colors['stat-defense'],
  SPECIAL_ATTACK: Colors['stat-special-attack'],
  SPECIAL_DEFENSE: Colors['stat-special-defense'],
  SPEED: Colors['stat-speed'],
} as const;

export type StatColor = (typeof StatColors)[keyof typeof StatColors];

export const StatTypes = {
  HP: 'hp',
  ATTACK: 'attack',
  DEFENSE: 'defense',
  SPECIAL_ATTACK: 'special-attack',
  SPECIAL_DEFENSE: 'special-defense',
  SPEED: 'speed',
} as const;

export type StatType = (typeof StatTypes)[keyof typeof StatTypes];

// Base stats cap at 255 in the games; used as StatBar's fill ceiling.
export const DEFAULT_STAT_MAX_VALUE = 255;
