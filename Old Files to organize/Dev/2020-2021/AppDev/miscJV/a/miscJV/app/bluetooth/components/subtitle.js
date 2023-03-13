import React from 'react'

import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

Subtitle = (props) => {
    return(
        <View style={styles.container2}>
            <Text style={styles.title}>
                {props.title}
            </Text>
            <View style={styles.line}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container2:{
        flexDirection: 'row',
        marginVertical: 15,
        alignItems:'center',
    },
    title:{
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'gray'
    },
    line:{
        borderBottomWidth:1,
        flex: 1,
        marginTop: 3,
        borderColor: '#eceff1'
    },
})

export default Subtitle;