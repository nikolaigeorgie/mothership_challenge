import {
  IDeliverySearchResult,
  IRates,
  IShipmentData,
} from '../redux/Deliveries/interfaces';

export const verifyInputData = (
  weightValue: string,
  dimensionValues: {
    length: string;
    width: string;
    height: string;
  },
  quantityValue: string,
) => {
  const { height, length, width } = dimensionValues;
  return !(
    weightValue.length > 0 &&
    quantityValue.length > 0 &&
    height.length > 0 &&
    length.length > 0 &&
    width.length > 0
  );
};

export const formatQuoteDataForEndopintCall = (
  searchedAddress: IDeliverySearchResult,
  shipmentData: IShipmentData,
) => {
  return {
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
          width: parseInt(shipmentData.dimensions.width, 10),
          height: parseInt(shipmentData.dimensions.height, 10),
          length: parseInt(shipmentData.dimensions.length, 10),
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
};

export const getFirstRate = (rates: IRates) => {
  if (rates.dedicated) {
    return [rates.dedicated.nextDay];
  } else if (rates.standard) {
    const { fastest, lowest } = rates.standard;
    return [fastest, lowest];
  } else {
    const { bestValue } = rates.guaranteed;
    return [bestValue];
  }
};
