import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import Card from './components/Card';
function ToDo() {
  const renderToDo = ({item}: any) => <Card toDoCard={item} />;
  const emptyData: any = [];
  let [list, setList] = useState(emptyData);
  let [note, setNote] = useState('');
  let [inputValue, setInputValue] = useState('');
  let [counter, setCounter] = useState(0);
  const addNote = (text: any) => {
    setNote((note = text));
    setInputValue((inputValue = text));
  };
  const saving = () => {
    const newCard = {
      title: note,
    };
    list.push(newCard);
    setList([...list]);
    setInputValue((inputValue = ''));
    setCounter(counter + 1);
  };
  let isDisable = inputValue === '' ? true : false;
  return (
    <SafeAreaView style={styles.base}>
      <View style={styles.textBox}>
        <Text style={styles.text}>Yapilacaklar</Text>
        <Text style={styles.text}>{counter}</Text>
      </View>
      <FlatList data={list} renderItem={renderToDo} />
      <View style={styles.box}>
        <TextInput
          style={styles.input_text}
          placeholder="Yapilacak..."
          onChangeText={addNote}
          value={inputValue}
        />
        <View style={styles.space} />
        <View style={styles.button_container}>
          <TouchableOpacity
            style={isDisable ? styles.buttonDisabled : styles.button}
            onPress={saving}
            disabled={isDisable}>
            <Text style={styles.button_text}>Kaydet</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ToDo;

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: 'dimgray',
  },
  box: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'darkgray',
    marginTop: 'auto',
  },
  textBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 2,
    padding: 20,
  },
  text: {
    color: 'orange',
    fontSize: 30,
    fontWeight: 'bold',
  },
  space: {
    height: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    margin: 1,
  },
  button_container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 50,
    width: 150,
    margin: 10,
    backgroundColor: 'orange',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDisabled: {
    height: 50,
    width: 150,
    margin: 10,
    backgroundColor: 'dimgray',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input_text: {
    fontSize: 20,
  },
});
