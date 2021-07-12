import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
  innerContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    margin:2,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 5,
    borderColor: 'black',
  },

  image: {
    height: '100%',
    margin:5,
    aspectRatio: 1,
    resizeMode: 'cover',
    width: '46%',
    borderRadius: 100,
    justifyContent: 'flex-start',
    borderWidth: 2,
    borderColor: 'black',
  },

  name: {
    marginVertical: 10,
    color: '#000',
    fontSize: 85,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor:'red',
    height:60,
    alignItems:'center',
    borderWidth: 5,
    borderColor: 'black',
  },
 
});

export default styles;