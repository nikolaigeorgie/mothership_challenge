import { client } from '../config/MapboxClient';
import { Scaled } from '../themes';
import {
  IAdressContext,
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

export const getPostalCodeFromMapBox = (context: Array<IAdressContext>) => {
  const postalCode = context.filter((item: IAdressContext) =>
    item.id.includes('postcode'),
  );
  if (postalCode.length > 0 && postalCode[0] && postalCode[0].text) {
    return postalCode[0].text;
  }
  return null;
};
