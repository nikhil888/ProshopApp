import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 120,
    padding: 5,


    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },

  innerContainer: {
    flexDirection: 'row',
    fontSize: 25,
    fontWeight:'bold',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 5,
    borderColor: 'black',
    justifyContent: 'space-around',
    margin:10,

  },
  button: {
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: '#676767',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    height: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
    width: '46%',
    borderRadius: 100,
    justifyContent: 'flex-start',
  },

  name: {
    marginVertical: 10,
    color: '#5b5b5b',
    fontSize: 25,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    width:120,
    height:60,
    fontSize:35,
    fontWeight:'bold',
    paddingVertical: 20,
    marginHorizontal: 20,
    margin:10,
    borderWidth: 2,
    borderRadius:20,
    borderColor: 'black',
    justifyContent:'space-around',
    alignItems:'center'
  },
  description: {
    fontSize: 15,
  },
});

export default styles;