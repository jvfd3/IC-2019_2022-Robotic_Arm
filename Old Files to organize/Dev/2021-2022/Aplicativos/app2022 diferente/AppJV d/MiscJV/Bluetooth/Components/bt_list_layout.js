import React            from 'react'
import { View, Text, }  from 'react-native'
import styles           from '../Styles/bt_styles'

bt_list_layout = (props) => {
    return (
        <View style={[styles.btlist_layout_container, ]}>
            <Text style={[styles.btlist_layout_title, ]}>
                {props.title}
            </Text>
            {props.children}
        </View>
    )
}

export default bt_list_layout