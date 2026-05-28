import React, { useState, useEffect, useRef } from "react";
import PlacesAutocomplet, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { saveAddress } from "../actions/userActions";
import { Row, ListGroup, Form } from "react-bootstrap";

function EnterAddressApi() {
  const user = useSelector((state) => state.user);
  const { address } = user;

  const [input, setInput] = useState("");
  const [loaded, setLoaded] = useState(false);
  const searchOptions = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&key=AIzaSyA6Tzb_GJy6NQ7ZpsvyvZMsODG--hhFMJ0";
    script.async = false;
    document.head.appendChild(script);
    script.addEventListener("load", () => setLoaded(true));

    return () => {
      // Clean up: remove the script element if the component unmounts
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (!loaded) return;

    const google = window.google ? window.google : {};
    searchOptions.current = {
      componentRestrictions: {
        country: "nz",
      },
      location: new google.maps.LatLng(-41.4, 174.4),
      radius: 2000,
      types: ["address"],
    };
  }, [loaded, searchOptions]);

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latlng = await getLatLng(results[0]);

    const { formatted_address, place_id } = results[0];
    const data = {
      id: place_id,
      physicalAddress: formatted_address,
      coordinates: latlng,
      apiResults: results[0],
    };

    dispatch(saveAddress(data));
    setInput("");


  };

  return (
    <div>
      {loaded ? (
        <PlacesAutocomplet
          value={input}
          onChange={setInput}
          onSelect={handleSelect}
          searchOptions={searchOptions.current}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <Form.Label>Address</Form.Label>
              <Form.Control
                {...getInputProps({
                  placeholder:
                    Object.keys(address).length === 0
                      ? "Enter your address"
                      : "Change Address",
                  className: "location-search-input",
                })}
              />
              <p></p>
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <ListGroup.Item>
                    <Row>
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style,
                        })}
                      >
                        <option
                          key={suggestion.id}
                          value={suggestion.description}
                        >
                          {suggestion.description}
                        </option>
                      </div>{" "}
                    </Row>
                  </ListGroup.Item>
                );
              })}
            </div>
          )}
        </PlacesAutocomplet>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}

export default EnterAddressApi;
