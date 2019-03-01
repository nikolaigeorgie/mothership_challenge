import { client } from '../config/MapboxClient';

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
