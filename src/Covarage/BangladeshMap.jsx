// components/BangladeshMap.jsx
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Control component to zoom & open popup
const MapControl = ({ position, popupRef }) => {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.setView(position, 10); // zoom
      if (popupRef?.current) {
        popupRef.current.openPopup(); // open popup
      }
    }
  }, [position, map, popupRef]);

  return null;
};

const BangladeshMap = ({ servicesCenter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [selectedPopupRef, setSelectedPopupRef] = useState(null);

  const center = [23.685, 90.3563];
  const markerRefs = useRef([]); // ✅ Store refs for all markers

  const handleSearch = () => {
    const foundIndex = servicesCenter.findIndex((center) =>
      center.district.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (foundIndex !== -1) {
      const selected = servicesCenter[foundIndex];
      setSelectedPosition([selected.latitude, selected.longitude]);
      setSelectedPopupRef(markerRefs.current[foundIndex]);
    } else {
      alert("District not found!");
    }
  };

  return (
    <div>
      {/* Search Bar */}
      <div className="max-w-xl mx-auto mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Search district..."
          className="input input-bordered w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch} className="btn btn-primary text-black">
          Search
        </button>
      </div>

      {/* Map */}
      <div className="h-[500px] w-full rounded-lg overflow-hidden shadow-md">
        <MapContainer
          center={center}
          zoom={7}
          scrollWheelZoom={true}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {servicesCenter.map((branch, index) => {
            markerRefs.current[index] = markerRefs.current[index] || L.marker();

            return (
              <Marker
                key={index}
                position={[branch.latitude, branch.longitude]}
                ref={(ref) => (markerRefs.current[index] = ref)}
              >
                <Popup>
                  <div className="text-sm">
                    <strong>{branch.district}</strong> <br />
                    Region: {branch.region} <br />
                    City: {branch.city} <br />
                    <img
                      src={branch.flowchart}
                      alt={`${branch.district} flowchart`}
                      className="mt-2 w-32 h-auto rounded"
                    />
                  </div>
                </Popup>
              </Marker>
            );
          })}

          {/* Zoom & open popup */}
          {selectedPosition && (
            <MapControl
              position={selectedPosition}
              popupRef={selectedPopupRef}
            />
          )}
        </MapContainer>
      </div>
    </div>
  );
};

export default BangladeshMap;
