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
import Post from "../components/Post";
// import { SearchBar } from 'react-native-elements';
import { useDispatch,useSelector} from 'react-redux'
import {listProducts} from '../actions/productActions'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Fontisto from 'react-native-vector-icons/Fontisto';


const ListScreen = () => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  const myIcon = <Fontisto name="shopping-bag-1" size={60} color="green" />;

// const [dataSource,setData] = useState(["nihkil","kelao","migks"])
 

//   const [filtered, setFiltered] = useState(dataSource)
//   const [searching, setSearching] = useState(false)
//   const onSearch = (text) => {
//     if (text) {
//       setSearching(true)
//       const temp = text.toLowerCase()

//       const tempList = dataSource.filter(item => {
//         if (item.match(temp))
//           return item
//       })
//       setFiltered(tempList)
//     }
//     else {
//       setSearching(false)
//       setFiltered(dataSource)
//     }

//   }

  

  return (
    <View>
    {myIcon}
       
       {loading ? (
        <Text h3>{loading}</Text>
      ) : error ? (
        <Text h3>{error}</Text>
      ) : (
        <View>
              
      <FlatList
        data={products}
        renderItem={({item}) => <Post product={item}/> }
      /> 
       
        </View>
            )}
                  
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
