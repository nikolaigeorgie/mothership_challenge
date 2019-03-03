import axios from 'axios';
import { ADDED_ENTRY } from './types';
import { IDeliverySearchResult, IShipmentData } from './interfaces';
import ENDPOINTS from '../../utils/Endpoints';
import { formatQuoteDataForEndopintCall } from '../../utils/QuoteUtils';

export const addDelivery = (payload: IDeliverySearchResult) => async (
  dispatch: (arg0: { type: string; payload: IDeliverySearchResult }) => void,
) => {
  return dispatch({ type: ADDED_ENTRY, payload });
};

export const createQuoteForDelivery = async (
  searchedAddress: IDeliverySearchResult,
  shipmentData: IShipmentData,
) => {
  const data = formatQuoteDataForEndopintCall(searchedAddress, shipmentData);

  const {
    data: {
      data: { rates },
    },
  } = await axios.post(ENDPOINTS.quote, data);
  return rates;
};
