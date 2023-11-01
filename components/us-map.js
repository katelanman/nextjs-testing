import React, { useState, useEffect, useRef } from "react"
import { geoPath, geoAlbersUsa } from "d3-geo"
import { feature, mesh } from "topojson-client";
import { useD3 } from "../hooks/useD3";
import { json } from "d3-fetch";
import * as d3 from 'd3';

export function USMap({layer}) {

    // current data !! to be replaced with data from shapes repository
    // missing census tracts and block groups
    // way to add capability to host undefined number of geographic layers if data is available? (i.e. right now we only need state, county, tract, block group... but should be able to add civic association or PUMA without too much hassle)
    const countyUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";
    const stateUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3.0.1/states-10m.json";

    const [counties, setCounties] = useState([]);
    const [states, setStates] = useState([]);

    // fetching geometry data for counties
    useEffect(() => {
        fetch(countyUrl)
          .then(response => {
            if (response.status !== 200) {
              console.log(`There was a problem: ${response.status}`)
              return
            }
            
            response.json().then(data => {
                setCounties(data);
              })
          })
      }, [])
      
    // fetching geometry data for states
    useEffect(() => {
        fetch(stateUrl)
          .then(response => {
            if (response.status !== 200) {
              console.log(`There was a problem: ${response.status}`)
              return
            }
            
            response.json().then(data => {
                setStates(data);
              })
          })
      }, [])

    // map specifications
    const proj = geoAlbersUsa().scale(1000).translate([800/2, 450/2]);
    const path = geoPath().projection(proj);

    const ref = useD3((svg) => {
        // ignore if still awaiting data
        if (!Object.keys(states).length) return;

        // zoom functionality
        function zoomed(e) {
            svg.select('.plot-area').attr('transform', e.transform);
        }

        // d3 zoom call
        // TODO: set scale extent 
        const zoom = d3.zoom()
            // .scaleExtent([1, 8])
            .translateExtent([[0, 0], [800, 450]])
            .on("zoom", zoomed);

        // adds or removes fill on region click
        const handleClickColor = (e, d) => {
            e.target.getAttribute('fill') !== '#E57200' ? e.target.setAttribute('fill', '#E57200') : 
                                                            e.target.setAttribute('fill', '#DADADA');
        }
        
        // zooms into region on click
        const handleClickZoom = (e, d) => {
            const [[x0, y0], [x1, y1]] = path.bounds(d);
            e.stopPropagation();

            // fly to action
            svg.transition().duration(750).call(
                zoom.transform,
                d3.zoomIdentity
                    .translate(800 / 2, 450 / 2)
                    .scale(Math.min(8, 0.9 / Math.max((x1 - x0) / 800, (y1 - y0) / 450)))
                    .translate(-(x0 + x1) / 2, -(y0 + y1) / 2),
                d3.pointer(e, svg.node())
            );
            
            // !! not sure if this is the best way of doing this...

            // plot counties
            svg.select('.plot-area').selectAll('paths')
            .data(feature(counties, counties.objects['counties']).features)
            .enter()
            .append('path')
            .attr('d', path)
            .attr('fill', '#DADADA')
            .attr('stroke', '#F1F1EF')
            .on('click', (e, d) => handleClickColor(e, d))
            
            // plot mesh states over counties
            svg.select('.plot-area')
            .append('path')
            .datum(mesh(states, states.objects['states']))
            .attr('d', path)
            .attr('fill', 'none')
            .attr('stroke', '#666666')
            
        }

        // initial states plot
        svg.select('.plot-area').selectAll('paths')
            .data(feature(states, states.objects['states']).features)
            .enter()
            .append('path')
            .attr('d', path)
            .attr('fill', '#DADADA')
            .attr('stroke', '#666666')
            .on('click', (e, d) => layer === 'states' ? handleClickColor(e) : handleClickZoom(e, d)) // event handles based on condition

        // adding zoom call to map
        svg.call(zoom)
    })

    return (
        <svg ref={ref} viewBox="0 0 800 450" height='100%' width='100%'>
            <g className="plot-area"></g>
        </svg>
    );

};
