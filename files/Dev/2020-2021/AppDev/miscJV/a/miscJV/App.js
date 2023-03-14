import React from 'react';
import { StyleSheet, View } from 'react-native';
import BluetoothList from './app/bluetooth/containers/bluetooth_list'


function App() {
  return (
    <View style={styles.container}>
      <BluetoothList/> 
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: 'black'
  },
});

export default App;