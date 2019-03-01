import { ADDED_ENTRY } from './types';
import { IDeliverySearchResult } from './interfaces';

export const addDelivery = (payload: IDeliverySearchResult) => async (
  dispatch: (arg0: { type: string; payload: IDeliverySearchResult }) => void,
) => {
  return dispatch({ type: ADDED_ENTRY, payload });
};
