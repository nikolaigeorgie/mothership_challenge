import { client } from '../config/MapboxClient';
import { Scaled } from '../themes';

export const getMapDirections = async (
  fromAddressCoordinates,
  toAddressCoordinates,
) => {
  const { entity } = await client.getDirections(
    [
      {
        latitude: fromAddressCoordinates[1],
        longitude: fromAddressCoordinates[0],
      },
      {
        latitude: toAddressCoordinates[1],
        longitude: toAddressCoordinates[0],
      },
    ],
    { profile: 'driving', geometry: 'polyline' },
  );
  return entity;
};

export const mapBoxBoundFormatter = (
  fromAddressCoordinates,
  toAddressCoordinates,
) => {
  const northEastCoordinates = [
    fromAddressCoordinates[0],
    fromAddressCoordinates[1],
  ];
  const southWestCoordinates = [
    toAddressCoordinates[0],
    toAddressCoordinates[1],
  ];
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
