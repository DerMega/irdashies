import { useMemo } from 'react';
import {
  useDriverCarIdx,
  useSessionDrivers,
} from '@irdashies/context';

export const useCautionInFront = () => {
  const playerIndex = useDriverCarIdx();
  const drivers = useDrivers();

    
};

//const

const useDrivers = () => {
  const sessionDrivers = useSessionDrivers();
  const drivers =
    sessionDrivers?.map((driver) => ({
      carIdx: driver.CarIdx,
      name: driver.UserName,
      speed: driver.Speed,
      carClass: {
        id: driver.CarClassID,
        color: driver.CarClassColor,
      }
  })) ?? [];
  return drivers;
}