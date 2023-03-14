import React from 'react'

import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native'

Empty = (props) => {
    return(
        <View style={styles.container}>
            <Image style={styles.icon}
                source={require('../../icons/empty.jpg')}
            />
            <Text style={StyleSheet.text}>
                {props.text}
            </Text>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        alignItems: 'center',
    },
    icon:{
        width:200,
        height: 200,
        marginVertical: 50,
    },
    text:{
        color: 'white' , 
        fontSize: 20,
    }
})

export default Empty;

