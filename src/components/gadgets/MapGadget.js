import React, { useEffect, useState } from 'react';
import {
  IgrGeographicMap,
  IgrGeographicSymbolSeries,
  IgrGeographicMapModule,
} from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import WorldUtils from '../utils/WorldUtils';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

const MapGadget = ({ gadget, isFullscreen }) => {
  const [geoMap, setGeoMap] = useState(null);
  const [data, setData] = useState([]); // State to hold fetched data
  const [loading, setLoading] = useState(true); // State to manage loading

  // Fetch data when component mounts
  useEffect(() => {
    fetch(process.env.PUBLIC_URL+gadget.datasource)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false); // Data fetched, stop loading
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); // Error occurred, stop loading
      });
  }, []);

  // Function to handle map resizing and redrawing the map
  const handleResize = () => {
    if (geoMap && data.length > 0) {
      const geoBounds = WorldUtils.getBounds(data);
      if (geoBounds) {
        geoMap.zoomToGeographic(geoBounds);
      }
    }
  };

  // Adjust map when isFullscreen changes or data loads
  useEffect(() => {
    handleResize();
  }, [isFullscreen, geoMap, data]);

  // Adjust map when window resizes
  useEffect(() => {
    const handleWindowResize = () => {
      handleResize();
    };

    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [geoMap, data]);

  // Show a loading indicator while data is being fetched
  if (loading) {
    return <div>Loading map data...</div>;
  }

  return (
    <div
      style={{
        width: '100%',
        height: isFullscreen ? '100vh' : gadget.height,
        minHeight: gadget.height,
      }}
    >
      <IgrGeographicMap
        width="100%"
        height="100%"
        zoomable={true}
        isHorizontalZoomEnabled={true}
        isVerticalZoomEnabled={true}
        panModifier="None"
        ref={setGeoMap}
        defaultInteraction="DragPan"
      >
        <IgrGeographicSymbolSeries
          dataSource={data}
          latitudeMemberPath="latitude"
          longitudeMemberPath="longitude"
          markerType="Circle"
          markerBrush="yellow"
          markerOutline="black"
          showTooltip={true}
          name="wellSeries"
          tooltipTemplate={(context) => {
            if (!context.item) {
              console.error(
                'No item found in context for tooltip rendering'
              );
              return `<div>No data available</div>`;
            }
            return `<div>
              Well: ${context.item.name} <br/>
              Type: ${context.item.type} <br/>
              Lat: ${context.item.latitude} <br/>
              Lng: ${context.item.longitude}
            </div>`;
          }}
        />
      </IgrGeographicMap>
    </div>
  );
};

export default MapGadget;
