import React from 'react';
import { StyleSheet, View } from 'react-native';
import Bluetooth_List from '../BluetoothSlider/app/bluetooth/containers/bluetooth_list'

const App = () => {
  return (
    <View style={styles.container}>
      <Bluetooth_List/>
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
