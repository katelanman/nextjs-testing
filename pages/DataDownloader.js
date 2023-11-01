import Layout from '../components/layout';
import React, { useState, useEffect } from "react";
import BarChart from '../components/test-bar';
import { Map, MeshMap } from '../components/map3.js';
import { USMap } from '../components/us-map';
import { geoAlbersUsa } from "d3-geo"
import useMediaQuery from '@mui/material/useMediaQuery';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import styles from '../styles/Home.module.css';

function FilterIcon() {
  return(
      <svg id={styles.FilterIcon} viewBox="0 0 1024 1024"><path d="M640 288a64 64 0 1 1 0.032-128.032A64 64 0 0 1 640 288z m123.456-96c-14.304-55.04-64-96-123.456-96s-109.152 40.96-123.456 96H128v64h388.544c14.304 55.04 64 96 123.456 96s109.152-40.96 123.456-96H896V192h-132.544zM640 864a64 64 0 1 1 0.032-128.032A64 64 0 0 1 640 864m0-192c-59.456 0-109.152 40.96-123.456 96H128v64h388.544c14.304 55.04 64 96 123.456 96s109.152-40.96 123.456-96H896v-64h-132.544c-14.304-55.04-64-96-123.456-96M384 576a64 64 0 1 1 0.032-128.032A64 64 0 0 1 384 576m0-192c-59.456 0-109.152 40.96-123.456 96H128v64h132.544c14.304 55.04 64 96 123.456 96s109.152-40.96 123.456-96H896v-64H507.456c-14.304-55.04-64-96-123.456-96"/></svg>
  );
}

function TopicTab({topic, activeTab}) {
  return <button className={styles.TopicTab + ' ' + (activeTab === topic ? styles.ActiveTab : "")}>{topic}</button>;
};

function SummaryItem({value, description}) {
  return (
    <div className={styles.SummaryItem}>
      <span className={styles.SummaryValue}>{value}</span>
      <br/>
      <span className={styles.SummaryDesc}>{description}</span>
    </div>
  );
};

function VisContents({data, resolution, region, year}) {
  return (
    <>
      <div className={styles.TitleBox}>
        <div className={styles.BoxHeader}>
            {resolution + " in " + region + ", " + year + ": "} 
            <span className={styles.VariableName}>{"Variable Name"}</span>
        </div>
      </div>

      <div className={styles.VisItems}>
        <div className={styles.SummaryBox}>
          <SummaryItem value="0.82%" description="average percentage of income for internet"></SummaryItem>
          <SummaryItem value="0.74%" description="median percentage of income for internet"></SummaryItem>
        </div>
        <div><BarChart data={data} /></div>
      </div>
    </>
  );
};

function FilterSelector({name, range, onChange, selected, multiple=false}) {
  const options = range.map((value) => {
    return (
        <option key={value} value={value}>{value}</option>
    );
  });
  
  if (!multiple) {
    return(
      <div className={styles.FilterSelector} >
        <select name={name} id={name} className={styles.FilterDropdown} onChange={e => onChange(e.target.value)} defaultValue={selected}>
          {options}
        </select>
      </div>
    );
  }

  // allow for multiple selections
  return(
    <div className={styles.FilterSelector} >
      <select name={name} id={name} className={styles.FilterDropdown} multiple size='5' onChange={e => onChange(e.target.value)}>
        {options}
      </select>
    </div>
  );
}

function ToggleIcon({open, size}) {
  return(
    open ? <div className={styles.ToggleIcon} style={{'width':size}}><svg  viewBox="0 0 1 1"><polygon points="0 0, 0.5 0.6, 1 0"/></svg></div> :
          <div className={styles.ToggleIcon} style={{'width':size}}><svg  viewBox="0 0 1 1"><polygon points="0 0.6, 0.5 0, 1 0.6"/></svg></div>
  );
}

export default function DataDownloader() {
  const data = [
    {year: 1980, efficiency: 24.3, sales: 8949000},
    {year: 1985, efficiency: 27.6, sales: 10979000},
    {year: 1990, efficiency: 28, sales: 9303000},
    {year: 1991, efficiency: 28.4, sales: 8185000},
    {year: 1992, efficiency: 27.9, sales: 8213000},
    {year: 1993, efficiency: 28.4, sales: 8518000},
    {year: 1994, efficiency: 28.3, sales: 8991000},
    {year: 1995, efficiency: 28.6, sales: 8620000},
    {year: 1996, efficiency: 28.5, sales: 8479000},
    {year: 1997, efficiency: 28.7, sales: 8217000},
    {year: 1998, efficiency: 28.8, sales: 8085000},
    {year: 1999, efficiency: 28.3, sales: 8638000},
    {year: 2000, efficiency: 28.5, sales: 8778000},
    {year: 2001, efficiency: 28.8, sales: 8352000},
    {year: 2002, efficiency: 29, sales: 8042000}];
  const topics = ['Topic 1', 'Topic 2', 'Topic 3', 'Topic 4', 'Topic 5', 'Topic 6'];

  const [activeTab, setActiveTab] = useState(topics[0]);
  const [currRes, setRes] = useState("Census Tracts");
  const [currRegion, setRegion] = useState("Virginia");
  const [currYear, setYear] = useState("2019");
  const [mapVisible, setMapVisible] = useState(true);

  const visMobilePosition = (topics.indexOf(activeTab) * 2) + 1;

  // true if window is larger than 480px
  const largeWindow = useMediaQuery('(min-width:480px)');
  const [filterVisible, setFilterVisible] = useState();

  // setting filter visibility based on initial window size
  useEffect(() => {
    window.innerWidth > 480 ? setFilterVisible(true) : setFilterVisible(false);
  }, []);

  // setting filter visibility based on window resize
  useEffect(() => {
    const handleResize = () => {
      window.innerWidth > 480 ? setFilterVisible(true) : setFilterVisible(false);
      if (activeTab === '') setActiveTab(topics[0]);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [activeTab]);

  const mobileTopicClick = ({topic}) => {
    if (activeTab !== topic) {
      setActiveTab(topic);
    }
    else {
      setActiveTab('');
    }
  }

  const topicButtons = topics.map((topic, i) => {
    return (
      <div className={styles.TabContainer} id={topic + "Tab"} key={topic} onClick={largeWindow ? () => setActiveTab(topic) : () => mobileTopicClick({topic})} style={{'order': i*2}}>
        <TopicTab topic={topic} activeTab={activeTab}/>
      </div>
    );
  });
  const VisBoxes = topics.map((topic) => {
    return (
      <div style={{'order': (largeWindow ? 0 : visMobilePosition)}} key={topic} className={styles.VisContainer + " " + (activeTab === topic ? styles.ContentVisible : styles.ContentInvisible)}>
        <VisContents topic={topic} data={data} resolution={currRes} region={currRegion} year={currYear}/>
      </div>
    );
  });

  const projection = geoAlbersUsa()
    .scale(1000)
    .translate([ 800 / 2, 450 / 2 ])

  const Filter = (
        <div id={styles.FilterBox} style={(!filterVisible || largeWindow) ? {} : {'minHeight': "100%"}}>
        <div id={styles.FilterHead} onClick={largeWindow? () => {} : () => setFilterVisible(!filterVisible)}>
          <div id={styles.FilterHeadItems}>
            <div className={styles.FlexRow}>
              {/* <FilterIcon/> */}
              <div>Select Filters</div>
            </div>
            {largeWindow ? <></> : <FilterIcon/>}
          </div>
        </div>
        <div id={styles.FilterItems} className={filterVisible ? '' : styles.ContentInvisible}>
          <div id={styles.MapContainer}>
            <div id={styles.MapToggle} onClick={() => setMapVisible(!mapVisible)}>
              Filter Using Map
              <ToggleIcon open={!mapVisible} size={'10px'}/>
            </div>
            <div id={styles.FilterMapBox} className={mapVisible ? '' : styles.ContentInvisible}>
              <USMap layer='counties'/>
              {/* <TransformWrapper>
              <TransformComponent>
                <svg id={styles.FilterMap}>
                  <USMap/>
                  <Map url="https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json" geoName="counties" stroke="#FFFFFF" projection={projection}/>
                  <MeshMap url="https://cdn.jsdelivr.net/npm/us-atlas@3.0.1/states-10m.json" geoName="states" stroke="#666666" projection={projection}/>
                </svg>
              </TransformComponent>
              </TransformWrapper> */}
            </div>
          </div>
          
          <FilterSelector name="Region" range={['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia']} multiple={true} onChange={setRegion}/>
          <FilterSelector name="Resolution" range={['Counties', 'Census Tracts', 'Block Groups']} onChange={setRes} selected={currRes}/>
          <FilterSelector name="Year" range={[2019, 2020, 2021]} onChange={setYear} selected={currYear}/>

          <button><a href='DataDownloader'>Download Data</a></button>
        </div>
        </div>
    );

  return (<Layout currPage='Data Downloader'> 
    <div className={styles.Box}>
      {/* topics show as own navbar in desktop view */}
      {/* {largeWindow? <div className={styles.TopicBar}>{topicButtons}</div> : <></>} */}

      <div id={styles.MainContent}>
        {/* group topic and corresponding vis in mobile view */}
        {largeWindow ? <>{Filter}{VisBoxes}</> : <><div className={styles.TopicBar}>{topicButtons}{VisBoxes}</div>{Filter}</>}
        
 
      </div>
    </div>
  </Layout>);
}