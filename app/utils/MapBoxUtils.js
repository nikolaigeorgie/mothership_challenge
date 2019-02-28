import { client } from '../config/MapboxClient';

export const getMapDirections = async (
  fromAddressCoordinates,
  toAddressCoordinates,
) => {
  const {
    entity: { routes },
  } = await client.getDirections(
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
  // TODO Create a safer return of first route.
  return routes[0];
};
