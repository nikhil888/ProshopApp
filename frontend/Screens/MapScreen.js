import React, { useRef, useState, useEffect } from "react";
import { View, FlatList, useWindowDimensions, TextInput } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
// import shops from "../data/feed";
import { useDispatch,useSelector} from 'react-redux'
import {listshops} from '../actions/shopActions'
import CustomMarker from "../components/CustomMarker";
import PostCarousel from "../components/PostCarousel/PostCarousel"
import SearchBox from "../components/SearchBox"
import MapDrawer from "../components/MapDrawer";

const MapScreen = (props) => {

  const dispatch = useDispatch()

  const shopList = useSelector((state) => state.shopList)
  const { loading, error, shops } = shopList

  useEffect(() => {
    dispatch(listshops())
  }, [dispatch])


  const width = useWindowDimensions().width;
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);

  const flatlist = useRef();
  const map = useRef();

  const viewConfig = useRef({ itemVisiblePercentThreshold: 70 });
  const onViewChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceId(selectedPlace.id);
    }
  });

  useEffect(() => {
    if (!selectedPlaceId || !flatlist) {
      return;
    }
    const index = shops.findIndex((shop) => shop.id === selectedPlaceId);
    flatlist.current.scrollToIndex({ index });

    const selectedPlace = shops[index];
    const region = {
      latitude: selectedPlace.latitude,
      longitude: selectedPlace.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    };
  }, [selectedPlaceId]);

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <MapDrawer/>
      <SearchBox/>
      <MapView
        // ref={map}
        style={{ width: "100%", height: "100%" }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}
      >
        {shops.map((shop) => (
          <CustomMarker
            coordinate={shop.coordinate}
            name={shop.name}
             isSelected={shop.id === selectedPlaceId}
             onPress={() => setSelectedPlaceId(shop.id)}
          />
        ))}
      </MapView>

      <View style={{ position: "absolute", bottom: 10 }}>
        <FlatList
           ref={flatlist}
          data={shops}
          renderItem={({ item }) => <PostCarousel product={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={"center"}
          decelerationRate={"fast"}
           viewabilityConfig={viewConfig.current}
           onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  );
};

export default MapScreen;
