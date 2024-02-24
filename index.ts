import type {
  geoJsonTypes,
  pointCollectionTypes,
  polygonCollectionTypes,
} from "./types.d.ts";

export type {
  featureCollectionPointTypes,
  featureCollectionPolygonTypes,
  geoJSONGeometriesCollectionTypes,
  geoJSONFeatureCollectionTypes,
  geoJsonTypes,
  pointCollectionTypes,
} from "./types.d.ts";

export function filterPoints(json: geoJsonTypes): pointCollectionTypes[] {
  if (json.type === "GeometryCollection") {
    return json.geometries.filter(
      (geometry) => geometry.type === "Point"
    ) as pointCollectionTypes[];
  }
  if (json.type === "FeatureCollection") {
    return json.features
      .filter((feature) => feature.geometry.type === "Point")
      .flatMap((point) => point)
      .map((feature) => feature.geometry)
      .filter((geometry) => geometry) as pointCollectionTypes[];
  }
  return [];
}

export function filterPolygons(json: geoJsonTypes): polygonCollectionTypes[] {
  if (json.type === "GeometryCollection") {
    const valuPly = json.geometries.filter(
      (geometry) => geometry.type === "Polygon"
    ) as polygonCollectionTypes[];
    return valuPly;
  }
  if (json.type === "FeatureCollection") {
    return json.features
      .filter((feature) => feature.geometry.type === "Polygon")
      .flatMap((point) => point)
      .map((feature) => feature.geometry) as polygonCollectionTypes[];
  }
  return [];
}
