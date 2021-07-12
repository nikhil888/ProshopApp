import React,{useEffect} from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  FlatList,
  View,
  Text,
  TextInput,
} from 'react-native';
import Post from "../components/Post/Post";
// import { SearchBar } from 'react-native-elements';
import { useDispatch,useSelector} from 'react-redux'
// import products from '../data/feed'
import {listshops} from '../actions/shopActions'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Fontisto from 'react-native-vector-icons/Fontisto';


const ListScreen = () => {
  const dispatch = useDispatch()

  const shopList = useSelector((state) => state.shopList)
  const {  shops } = shopList

  useEffect(() => {
    dispatch(listshops())
  }, [dispatch])



  return (
    <View>
       {/* {loading ? (
        <Text h3>{loading}</Text>
      ) : error ? (
        <Text h3>{error}</Text>
      ) : (
        <View>
               */}
      <FlatList
        data={shops}
        renderItem={({item}) => <Post product={item}/> }
      /> 
        {/* </View>
            )} */}       
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  },
 
});


export default ListScreen
