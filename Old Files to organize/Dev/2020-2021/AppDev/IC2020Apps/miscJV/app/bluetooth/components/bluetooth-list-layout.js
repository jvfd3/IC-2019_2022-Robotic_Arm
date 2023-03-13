import React from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'
//import BluetoothList from '../containers/bluetooth_list'

BluetoothListLayout = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                {props.title}
            </Text>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal:  20,
        paddingVertical:    25,
        backgroundColor:    'black',
        flex: 1,
    },
    title: {
        color: 'white',
        fontSize: 20,
        marginLeft: 10,
        fontWeight:'bold',
    },
})

export default BluetoothListLayout;