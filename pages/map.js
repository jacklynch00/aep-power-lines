import React, {useState, useEffect} from "react";
import useSWR from "swr";
import GoogleMapReact from "google-map-react";

import DashboardShell from "@/components/DashboardShell";
import fetcher from "@/utils/fetcher";
import MapHeader from "@/components/MapHeader";
import MarkerDetailsModal from "@/components/MarkerDetailsModal";

const Map = () => {
  const [markers, setMarkers] = useState([]);

  const {data, error} = useSWR("/api/poles", fetcher);

  useEffect(() => {
    const markers =
      data &&
      data.map((pole) => {
        return (
          <MarkerDetailsModal
            key={pole.id}
            lat={pole.latitude}
            lng={pole.longitude}
            data={pole}
          />
        );
      });
    setMarkers(markers);
  }, [data]);

  return (
    <DashboardShell>
      <MapHeader />
      <div style={{height: "600px", width: "100%"}}>
        <GoogleMapReact
          // TODO: Fix the reference to be an env var
          bootstrapURLKeys={{key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY}}
          defaultCenter={{
            lat: 38.1202621,
            lng: -82.87153
          }}
          defaultZoom={10}
        >
          {markers}
        </GoogleMapReact>
      </div>
    </DashboardShell>
  );
};

export default Map;
