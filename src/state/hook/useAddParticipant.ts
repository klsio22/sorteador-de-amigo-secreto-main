import { useSetRecoilState } from 'recoil';
import { participantsList } from '../atom';

export function useAddParticipant() {
  const setList = useSetRecoilState(participantsList);
  return (participantName: string) => {
    return setList((currentList) => [...currentList, participantName]);
  };
}
