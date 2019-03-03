import axios from 'axios';
import { ADDED_ENTRY } from './types';
import { IDeliverySearchResult } from './interfaces';
import ENDPOINTS from '../../utils/Endpoints';

export const addDelivery = (payload: IDeliverySearchResult) => async (
  dispatch: (arg0: { type: string; payload: IDeliverySearchResult }) => void,
) => {
  return dispatch({ type: ADDED_ENTRY, payload });
};

export const createQuoteForDelivery = async (
  searchedAddress: IDeliverySearchResult,
  shipmentData: {
    quantity: string;
    type: string;
    weight: string;
    dimensions: string;
  },
) => {
  console.log(shipmentData);
  const data = {
    shipment: {
      pickupLocation: {
        name: '',
        phoneNumber: '',
        email: '',
        accessorials: {},
        street: searchedAddress.fromAddress.street,
        city: searchedAddress.fromAddress.neighborhood,
        state: searchedAddress.fromAddress.state,
        zip: searchedAddress.fromAddress.postalCode,
        coordinates: {
          latitude: searchedAddress.fromAddress.coordinates.lat,
          longitude: searchedAddress.fromAddress.coordinates.long,
        },
        neighborhood: null,
      },
      deliveryLocation: {
        name: '',
        phoneNumber: '',
        email: '',
        accessorials: {},
        street: searchedAddress.toAddress.street,
        city: searchedAddress.toAddress.neighborhood,
        state: searchedAddress.toAddress.state,
        zip: searchedAddress.toAddress.postalCode,
        coordinates: {
          latitude: searchedAddress.toAddress.coordinates.lat,
          longitude: searchedAddress.toAddress.coordinates.long,
        },
        neighborhood: null,
      },
      cargo: {
        'Ssnk3H1SGG9i5Q-E60fMq0tyov': {
          // TODO: add dynamic width X height X length.
          width: 3,
          height: 3,
          length: 3,
          weight: parseInt(shipmentData.weight, 10),
          quantity: parseInt(shipmentData.quantity, 10),
          type: shipmentData.type,
          description: '',
        },
      },
      pickupDate: '2019-03-01T15:30:00-08:00',
    },
    promotionCode: null,
  };

  const {
    data: {
      data: { rates },
    },
  } = await axios.post(ENDPOINTS.quote, data);
  return rates;
};
