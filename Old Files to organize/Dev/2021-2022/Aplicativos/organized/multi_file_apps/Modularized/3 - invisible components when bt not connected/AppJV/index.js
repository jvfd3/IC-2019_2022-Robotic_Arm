import React                from 'react'
import { View, }       from 'react-native'
import Bluetooth_container  from './MiscJV/Bluetooth/Containers/bluetooth_container'
import styles               from './MiscJV/Bluetooth/Styles/bt_styles'

// App = () => {
function AppJV_index() {
    return (
        <View style={styles.index_container} >
            <Bluetooth_container/>
        </View>
    )
}

export default AppJV_index