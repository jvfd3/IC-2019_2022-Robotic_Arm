import React from 'react'
import { View } from 'react-native'
import styles from './MiscJV/Neutral/Styles/neutral_styles'
import Main_container from './MiscJV/Neutral/Containers/neutral_container'

function app2022 () {
    return (
        <View style={[styles.index_container]} >
            <Main_container/>
        </View>
    )
}

export default app2022