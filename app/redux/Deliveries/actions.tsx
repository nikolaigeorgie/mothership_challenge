import axios from 'axios';
import { ADDED_ENTRY } from './types';
import { IDeliverySearchResult } from './interfaces';
import ENDPOINTS from '../../utils/Endpoints';

export const addDelivery = (payload: IDeliverySearchResult) => async (
  dispatch: (arg0: { type: string; payload: IDeliverySearchResult }) => void,
) => {
  return dispatch({ type: ADDED_ENTRY, payload });
};

export const createQuoteForDelivery = async () => {
  const data = {
    shipment: {
      pickupLocation: {
        zip: '91364',
        coordinates: { latitude: 34.1572064, longitude: -118.5764926 },
      },
      deliveryLocation: {
        zip: '90037',
        coordinates: { latitude: 33.999056, longitude: -118.282272 },
      },
      cargo: {
        ZivODprV7LLDwn84AF4vqEf1fV: {
          width: 3,
          height: 3,
          length: 3,
          weight: 33,
          quantity: 333,
          type: 'Pallet',
        },
      },
      pickupDate: '2019-03-01T12:45:00-08:00',
    },
    promotionCode: null,
  };

  const res = await axios.post(ENDPOINTS.quote, data);
  // TODO: Handle response data
  console.log('res', res);
};
