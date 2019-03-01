export interface IAddressGeometry {
  coordinates: Array<Array<number>>;
  type: string;
}

export interface ISteps {
  distance: number;
  driving_side: string;
  duration: number;
  geometry: IAddressGeometry;
  mode: string;
  name: string;
  // TODO: Before requiring see if following props are needed:
  // intersections:
  // maneuver
}

export interface IRoute {
  distance: number;
  duration: number;
  geometry: IAddressGeometry;
  legs: Array<ISteps>;
}

export interface IWaypoint {
  distance: number;
  name: string;
  location: Array<number>;
}

export interface IDeliverySearchResult {
  uuid: string;
  // first route is from, second is to route
  routes: Array<IRoute>;
  waypoints: Array<IWaypoint>;
}
