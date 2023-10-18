import React, { useState, useEffect, useRef } from "react"
import { geoPath } from "d3-geo"
import { feature, mesh } from "topojson-client";
import { TransformWrapper, TransformComponent, useControls, ReactZoomPanPinchRef } from "react-zoom-pan-pinch";

export function MeshMap({url, geoName, stroke, projection}) {
  const [geographies, setGeographies] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => {
        if (response.status !== 200) {
          console.log(`There was a problem: ${response.status}`)
          return
        }
        
        response.json().then(data => {
            setGeographies(mesh(data, data.objects[geoName]));
          })
      })
  }, [])

  return (
    <svg viewBox="0 0 800 450" width="100%" height="100%">
      <g className={geoName}>
        {
          ((
            <path
              key={ `path-${geoName}` }
              d={ geoPath().projection(projection)(geographies) }
              fill='none'
              stroke={stroke}
              strokeWidth={ 0.5 }
            />
          ))
        }
      </g>
      
    </svg>
  )
};

export function Map({url, geoName, stroke, projection}) {
  const [geographies, setGeographies] = useState([]);
  const [geoFills, setFills] = useState([]);

  function Geography({d, i}) {
    // distinguish click from pan
    const pointer = useRef({x: 0, y: 0});
    const onMouseDown = (e) => {
        pointer.current = {x: e.clientX, y: e.clientY};
    }
    const onMouseUp = (e, i) => {
        const {x, y} = pointer.current;

        // if click --> handle click
        if (Math.abs(e.clientX - x) < 10 && Math.abs(e.clientY - y) < 10) {
          const nextFills = geoFills.slice();
          nextFills[i] !== '#E57200' ? nextFills[i] = '#E57200' : nextFills[i] = '#DADADA';
          setFills(nextFills);
        }
    }

    return(<path
        d={ geoPath().projection(projection)(d) }
        fill={geoFills[i] !== '#E57200' ? '#DADADA' : geoFills[i]}
        stroke={stroke}
        strokeWidth={ 0.5 }
        onMouseDown={onMouseDown} 
        onMouseUp={(e)=>onMouseUp(e,i)}
      />);
  }

  useEffect(() => {
    fetch(url)
      .then(response => {
        if (response.status !== 200) {
          console.log(`There was a problem: ${response.status}`)
          return
        }
        
        response.json().then(data => {
            setGeographies(feature(data, data.objects[geoName]).features);
          }).then(() => {
            setFills(Array(geographies.length).fill('#DADADA'));
          })
      })
  }, [])

  return (
    <svg viewBox="0 0 800 450" width="100%" height="100%">
      <g className={geoName}>
        {
          geographies.map((d,i) => (
            <Geography d={d} i={i} key={ `path-${ i }` }/>
          ))
        }
      </g>
    </svg>
  )
};