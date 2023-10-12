import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './Card.style';

function Card({toDoCard}) {
  const [flag, setFlag] = useState(true);
  const updateFlag = () => {
    setFlag(!flag);
  };
  return (
    <View style={flag ? styles.container : styles.containerFalse}>
      <TouchableOpacity onPress={updateFlag}>
        <Text style={flag ? styles.cardText : styles.cardTextFalse}>
          {toDoCard.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Card;
