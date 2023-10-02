import React, { useState, useEffect } from "react"
import { geoAlbersUsa, geoPath } from "d3-geo"
import { mesh } from "topojson-client";

const projection = geoAlbersUsa()
  .scale(1000)
  .translate([ 800 / 2, 450 / 2 ])

export default function MeshMap({url, geoName, stroke}) {
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