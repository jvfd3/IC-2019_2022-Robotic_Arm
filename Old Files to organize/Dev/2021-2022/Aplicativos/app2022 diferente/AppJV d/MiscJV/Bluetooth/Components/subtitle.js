import React            from 'react'
import { View, Text, }  from 'react-native'
import styles           from '../Styles/bt_styles'

const Line = () => {
    return (
        <View style={[styles.subtitle_line, ]} />
    )
}

Subtitle = (props) => {
    return(
        <View style={[styles.subtitle_container, ]} >
            <Line />
            <Text style={[styles.subtitle_text, ]}>
                {props.title}
            </Text>
            <Line />
        </View>
    )
}

export default Subtitle