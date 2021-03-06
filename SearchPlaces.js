import React, { Component } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const homePlace = {
  description: "Home",
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }
};
const workPlace = {
  description: "Work",
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }
};

export default class GooglePlacesInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GooglePlacesAutocomplete
        placeholder="Nhập địa điểm cần tìm"
        minLength={1} // minimum length of text to search
        autoFocus={false}
        returnKeyType={"search"} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
        listViewDisplayed="auto" // true/false/undefined
        fetchDetails={true}
        renderDescription={row => row.description} // custom description render
        // onPress={(data, details = null) => {
        //   // 'details' is provided when fetchDetails = true
        //   console.log("My search = ", details.geometry);
        // }}
        onPress={this.props.onSearchLocation}
        getDefaultValue={() => ""}
        query={{
          // available options: https://developers.google.com/places/web-service/autocomplete
          key: "AIzaSyALk9Nzy6Hy_ezuSvMtIjyfltFqzj3D3WE",
          language: "vi" // language of the results
          // types: "(cities)" // default: 'geocode'
        }}
        styles={{
          textInputContainer: {
            width: "100%"
          },
          description: {
            fontWeight: "bold"
          },
          predefinedPlacesDescription: {
            color: "#1faadb"
          },
          container: {
            margin: 20,
            flex: 0,
            position: "absolute",
            left: 0,
            right: 0
          },
          textInput: {
            height: 40
          },
          textInputContainer: {
            backgroundColor: "transparent",
            height: 44,
            borderTopColor: "#7e7e7e",
            borderBottomColor: "#b5b5b5",
          }
        }}
        // currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
        // currentLocationLabel="Current locationn"
        // nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
        GoogleReverseGeocodingQuery={
          {
            // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
          }
        }
        GooglePlacesSearchQuery={{
          // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
          rankby: "distance",
          types: "food"
        }}
        filterReverseGeocodingByTypes={[
          "locality",
          "administrative_area_level_3"
        ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
        // predefinedPlaces={[homePlace, workPlace]}
        debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
        // renderLeftButton={() => (
        //   <Image source={require("path/custom/left-icon")} />
        // )}
        // renderRightButton={() => <Text>Custom text after the input</Text>}
      />
    );
  }
}
