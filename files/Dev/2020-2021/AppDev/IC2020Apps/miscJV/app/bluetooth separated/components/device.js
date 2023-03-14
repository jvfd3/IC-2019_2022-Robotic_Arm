import React from 'react'
import Separator from './separator'

import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native'


Device = (props) => {
    return(
        <TouchableOpacity  
            style={styles.wrapper}
            onPress={props.onPress}
        >
            
            <View           style={styles.wrapperDevice}>
                <View           style={styles.wrapperLeft}  >
                    <Image      style={styles.iconLeft} source={props.iconLeft}    />
                </View>
                <View           style={styles.wrapperName}  >
                    <Text       style={styles.name}         >
                        {props.name}
                    </Text>
                </View>
                <Image          style={styles.iconRight} source={props.iconRight}    />
            </View>
            <Separator  />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        backgroundColor: '#333',
        flexDirection:'column',
    },
    wrapperDevice:{
        backgroundColor: '#333',
        flexDirection:'row',
        alignItems:'center',
        padding: 10,
        justifyContent: 'space-between'
    },
    wrapperLeft:{
        backgroundColor: '#555',
        width: 40,
        height:40,
        borderRadius: 20,
        borderColor: 'gray',
        borderWidth: 1,
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
    },
    wrapperName:{
        color: 'white',
        fontSize: 20
    },
    iconLeft:{
        width:80,
        height:80,
        backgroundColor: 'grey',
    },
    iconRight:{
        width:50,
        height:50,
    },
    name:{
        color: 'white',
    },

})

export default Device;