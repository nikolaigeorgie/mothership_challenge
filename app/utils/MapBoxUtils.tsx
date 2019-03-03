import { client } from '../config/MapboxClient';
import { Scaled } from '../themes';
import {
  IAddressItem,
  IRates,
  ISelectedAddress,
} from '../redux/Deliveries/interfaces';

export const getMapDirections = async (
  fromAddress: ISelectedAddress,
  toAddress: ISelectedAddress,
) => {
  const { entity } = await client.getDirections(
    [
      {
        latitude: fromAddress.coordinates.lat,
        longitude: fromAddress.coordinates.long,
      },
      {
        latitude: toAddress.coordinates.lat,
        longitude: toAddress.coordinates.long,
      },
    ],
    { profile: 'driving', geometry: 'polyline' },
  );
  return entity;
};

export const mapBoxBoundFormatter = (
  fromAddressCoordinates: Array<number>,
  toAddressCoordinates: Array<number>,
) => {
  const northEastCoordinates = fromAddressCoordinates;
  const southWestCoordinates = toAddressCoordinates;
  const topRightBottomLeft = [
    0,
    Scaled.screen.width * 0.1,
    Scaled.screen.height * 0.3,
    Scaled.screen.width * 0.1,
  ];

  const duration = 700;

  return [
    northEastCoordinates,
    southWestCoordinates,
    topRightBottomLeft,
    duration,
  ];
};

export const mapAddressFormatter = (item: IAddressItem) => {
  // TODO: Do major testing to see if cases fail.
  const locationArray = item.place_name.split(',');
  const street = locationArray[0];
  const neighborhood = locationArray[1].substr(1);
  const region = item.context.filter(item => item.id.includes('region'));
  const postalArray = item.context.filter(item => item.id.includes('postcode'));

  return {
    street,
    neighborhood,
    state: region[0].short_code.substr(3),
    postalCode: postalArray[0].text,
  };
};
