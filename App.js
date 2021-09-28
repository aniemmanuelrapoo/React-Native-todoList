import React, { useState } from 'react'
import {  View, Text, StyleSheet, FlatList, Alert, Button } from 'react-native'
import Header from './components/Header'
import uuid from 'react-native-uuid';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid.v4(), text: 'Mike'},
    {id: uuid.v4(), text: 'Emmanuel'},
    {id: uuid.v4(), text: 'Chiemerie'},
    {id: uuid.v4(), text: 'Rapoo'}
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    })
  }
  const addItem = (text) => {
    
    setItems(prevItems => {
      if (!text){
        Alert.alert('Error', 'Please enter an item', [{text:'ok'}])
      }else{
        return [{id: uuid.v4(), text}, ...prevItems]
      }
    })
  }
  return(
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList data={items} renderItem={({item}) => (
        <ListItem item={item} deleteItem={deleteItem} />
      )} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
})

export default App;

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>LETS GO THERE</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });