import { UNLOCK_AT } from './unlock-time';

export function isUnlocked() {
  return Date.now() >= UNLOCK_AT;
}
