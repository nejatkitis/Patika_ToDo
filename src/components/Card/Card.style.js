import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 15,
    padding: 5,
    backgroundColor: 'cadetblue',
    borderRadius: 10,
  },
  containerFalse: {
    backgroundColor: 'darkgray',
    margin: 15,
    padding: 5,
    borderRadius: 10,
  },
  cardText: {
    fontSize: 24,
    color: 'white',
    margin: 5,
    marginLeft: 15,
  },
  cardTextFalse: {
    fontSize: 24,
    margin: 5,
    marginLeft: 15,
    color: 'dimgray',
    textDecorationLine: 'line-through',
  },
});
