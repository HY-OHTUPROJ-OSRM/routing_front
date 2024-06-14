import * as turf from '@turf/turf';
import { showTimedAlert } from '../Utils/dispatchUtility';
import { createNarrowPolygon } from './LineToPolygon';
export const intersectSelf = (object) => {
    console.log(object)
    let geometry = object.geometry;
    let turfGeometry;
  
    // Check if the geometry is a Polygon or a LineString
    if (geometry.type === 'Polygon') {
      turfGeometry = turf.polygon(geometry.coordinates);
      if (turf.kinks(turfGeometry).features.length > 0) {
        showTimedAlert({ text: "Polygon can't intersect itself", variant: 'failure' });
      }
    } else if (geometry.type === 'LineString') {
        console.log(geometry, createNarrowPolygon(object, 10))

      turfGeometry = turf.polygon(createNarrowPolygon(object, 10).geometry.coordinates);
      if (turf.kinks(turfGeometry).features.length > 0) {
        showTimedAlert({ text: 'Line has too sharp edges', variant: 'failure' });
      }
    } else {
    showTimedAlert({ text: 'Geometry must be a Polygon or LineString', variant: 'failure' });
    }
  
    // Use turf.kinks to check for self-intersections
    const kinks = turf.kinks(turfGeometry);
  
    // Return 1 if it intersects itself, 0 otherwise
    return kinks.features.length > 0 ? 1 : 0;
  };

