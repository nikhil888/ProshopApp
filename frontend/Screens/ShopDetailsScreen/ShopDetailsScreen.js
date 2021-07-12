import React from 'react'
import { useNavigation, useRoute } from "@react-navigation/native";
import {View ,FlatList,Button,Text,Image,ScrollView} from 'react-native';
import styles from './style'
import PostProductList from '../../components/PostProductList/PostProductList'


const ShopDetailsScreen = ({route}) => {
  const { productList,productName,productImage } = route.params;

    return (
        <View>

           <View style={styles.innerContainer}>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
            <Image style={styles.image} source={{ uri: productImage }} />

          <Text style={styles.name}>{productName}</Text>

        </View>
      </View>
      <ScrollView style={{height:300}}>
      <FlatList
         data={productList}
         renderItem={({item}) => <PostProductList productList={item}/> }
       />  
      </ScrollView>
      <View style={styles.button}>
      <Text style={{color:'#000',fontSize:35,fontWeight: 'bold',fontFamily:'monospace'}}>Go To Cart</Text>
      </View>
      
     </View>
   );
}

export default ShopDetailsScreen
