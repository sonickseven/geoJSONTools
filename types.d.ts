type propertiesTypes = Record<string, number | string>;

export type polygonCollectionTypes = {
  type: "Polygon";
  properties?: propertiesTypes;
  coordinates: number[][];
};
export type pointCollectionTypes = {
  type: "Point";
  properties?: propertiesTypes;
  coordinates: number[][];
};
export type featureCollectionPointTypes = {
  geometry: pointCollectionTypes;
};
export type featureCollectionPolygonTypes = {
  geometry: polygonCollectionTypes;
};

export type geoJSONGeometriesCollectionTypes = {
  type: "GeometryCollection";
  geometries: (polygonCollectionTypes | pointCollectionTypes)[];
};

export type geoJSONFeatureCollectionTypes = {
  type: "FeatureCollection";
  features: {
    type: "Feature";
    properties?: propertiesTypes;
    id: number | string;
    geometry:
      | featureCollectionPointTypes["geometry"]
      | featureCollectionPolygonTypes["geometry"];
  }[];
};

export type geoJsonTypes =
  | geoJSONGeometriesCollectionTypes
  | geoJSONFeatureCollectionTypes;
