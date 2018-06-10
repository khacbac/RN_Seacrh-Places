import React, { Component } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import GooglePlacesAutocomplete from "./SearchPlaces";
import MapView, { Marker, Overlay } from "react-native-maps";

const mapLocations = [
  {
    latitude: 21.005756,
    longitude: 105.843315,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121
  },
  {
    latitude: 20.999975,
    longitude: 105.842174,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121
  },
  {
    latitude: 21.003507,
    longitude: 105.843224,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121
  },
  {
    latitude: 21.004418,
    longitude: 105.843996,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121
  },
  {
    latitude: 21.005169,
    longitude: 105.846399,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121
  }
];

export default class GooglePlacesInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 20.964805,
      longitude: 105.826726,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
      isEdit: true
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={styles.map}
          region={{
            latitude: mapLocations[0].latitude,
            longitude: mapLocations[0].longitude,
            latitudeDelta: mapLocations[0].latitudeDelta,
            longitudeDelta: mapLocations[0].longitudeDelta
          }}
          // onRegionChangeComplete={region => {
          //   console.log(
          //     " ===============================================> ",
          //     region
          //   );
          //   this.setState({
          //     latitude: region.latitude,
          //     longitude: region.longitude,
          //     latitudeDelta: region.latitudeDelta,
          //     longitudeDelta: region.longitudeDelta
          //   });
          // }}
          // showsUserLocation={true}
          // showsMyLocationButton={true}
        >
          <Marker
            coordinate={{
              latitude: mapLocations[0].latitude,
              longitude: mapLocations[0].longitude
            }}
            // title="my maker"
            // description="my description"
          />
          {mapLocations.map(item => {
            return (
              <Marker
                key={item.latitude}
                coordinate={{
                  latitude: item.latitude,
                  longitude: item.longitude
                }}
                // title="my maker"
                // description="my description"
              />
            );
          })}
        </MapView>
        <GooglePlacesAutocomplete
          onSearchLocation={(data, details = null) => {
            console.log("My searchh = ", details);
            this.setState({
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng
            });
          }}
          styles={{ marginTop: 20 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});
