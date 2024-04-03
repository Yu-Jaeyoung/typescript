// 3장 타입 추론 - 일관성 있는 별칭 사용하기

// const borough = { name: 'Brooklyn', location: [40.688, -73.979] };
// const loc = borough.location;

// loc[0] = 0;
// console.log(borough.location);

interface Coordinate {
    x: number;
    y: number;
}

interface BoundingBox {
    x: [number, number];
    y: [number, number];
}

interface Polygon {
    exterior: Coordinate[];
    holes: Coordinate[][];
    bbox?: BoundingBox;
}


// function isPointInPolygon(polygon: Polygon, pt: Coordinate) {
//     if (polygon.bbox) {
//         if (pt.x < polygon.bbox.x[0] || pt.x > polygon.bbox.x[1]
//             || pt.y < polygon.bbox.y[0] || pt.y > polygon.bbox.y[1]
//         ) {
//             return false;
//         }
//     }
// }


// function isPointInPolygon(polygon: Polygon, pt: Coordinate) {
//     polygon.bbox
//     const box = polygon.bbox;
//     box

//     if (polygon.bbox) {
//         polygon.bbox
//         box
//         if (pt.x < box.x[0] || pt.x > box.x[1]
//             || pt.y < box.y[0] || pt.y > box.y[1]
//         ) {
//             return false;
//         }
//     }
// }

// function isPointInPolygon(polygon: Polygon, pt: Coordinate) {
//     const box = polygon.bbox;

//     if (box) {
//         if (pt.x < box.x[0] || pt.x > box.x[1]
//             || pt.y < box.y[0] || pt.y > box.y[1]
//         ) {
//             return false;
//         }
//     }
// }

function isPointInPolygon(polygon: Polygon, pt: Coordinate) {
    const { bbox } = polygon;

    if (bbox) {
        if (pt.x < bbox.x[0] || pt.x > bbox.x[1]
            || pt.y < bbox.y[0] || pt.y > bbox.y[1]
        ) {
            return false;
        }
    }
}
