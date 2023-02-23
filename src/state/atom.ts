import { atom } from 'recoil';

export const participantsList = atom<string[]>({
  key: 'participants',
  default:[]
})

