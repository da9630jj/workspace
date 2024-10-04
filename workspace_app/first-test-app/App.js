import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Header from './Header';
import Body from './Body';

export default function App() {
  const [text, setText] = useState('');
  function textTest() {
    alert(text);
    setText('');
  }

  return (
    <View style={styles.container}>
      <Text>앱 작업을 시작하려면 App.js를 열어보세요!</Text>
      <Button title="버튼" onPress={textTest} />
      <TextInput
        style={styles.input}
        placeholder='입력'
        value={text}
        onChangeText={setText}
      />
      <StatusBar style="auto" />
      <View style={styles.todoApp}>
        <Text style={styles.appTitle}>Todo App</Text>
        <Header/>
        <Body/>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  todoApp:{
    flex:1,
    flexDirection:'column',
    paddingTop:50,
    backgroundColor:'#EEE',
  },
  appTitle:{
    fontWeight:'800',
    fontSize:30,
    marginLeft:20,
    marginBottom:20,
  }
});
