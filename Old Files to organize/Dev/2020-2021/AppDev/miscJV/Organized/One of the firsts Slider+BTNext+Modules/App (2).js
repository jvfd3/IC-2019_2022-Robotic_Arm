import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BluetoothList from './miscJV/app/bluetooth/containers/bluetooth_list'


App = () => {
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