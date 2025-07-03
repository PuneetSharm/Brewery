import { APIProvider, Map } from "@vis.gl/react-google-maps";

const ReactMap = ({ apiKey }) => (
  <>
    <APIProvider apiKey={apiKey}>
      <Map
        style={{ width: "300px", height: "300px" }}
        defaultCenter={{ lat: 43.25418612, lng: -123.3532677 }}
        defaultZoom={3}
        gestureHandling={"greedy"}
        disableDefaultUI={false}
      />
    </APIProvider>
  </>
);
export default ReactMap;
