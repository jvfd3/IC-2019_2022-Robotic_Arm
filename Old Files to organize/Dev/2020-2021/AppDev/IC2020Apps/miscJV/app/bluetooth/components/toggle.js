import React from 'react'

import {
    View,
    Text,
    Switch,
    StyleSheet,
} from "react-native";

Toggle = (props) => {
    return(
        <View style={styles.container5}>
            <Text style={styles.text}>
                {props.value?'ON':'OFF'}
            </Text>

            <Switch style={styles.switch}
                value={props.value}
                onValueChange={props.onValueChange}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container5:{
        paddingVertical: 15,
        flexDirection: 'row',
    },
    
    text:{
        marginLeft:  10,
        fontWeight:'bold',
        fontSize: 20,
        flex: 1,
        color: 'white',
    },

    switch:{
        width: 50,
    },

})

export default Toggle;