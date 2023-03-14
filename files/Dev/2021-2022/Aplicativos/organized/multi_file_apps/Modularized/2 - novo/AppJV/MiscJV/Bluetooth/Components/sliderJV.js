import React            from 'react'
import { View, Text, }  from 'react-native'
import Slider           from '@react-native-community/slider'
import styles           from '../Styles/bt_styles'

const sliderJV =(props)=> {
    let valueSlider = 90
    // const [textSlider,   settextSlider]   = React.useState(valueSlider)
    return(
        <View               style={[styles.sliderjv_container, ]} >
            <View           style={[styles.sliderjv_Text_View, ]} >
                    <Text   style={[styles.sliderjv_Text_Name, ]} >
                        LED {props.slider_id} :
                    </Text>
                    <Text   style={[styles.sliderjv_Text_Value, ]} >
                        {props.text_value}
                    </Text>
            </View>
            <View style={[styles.sliderjv_slider_view, ]} >
                <Slider
                    style                   ={[styles.sliderjv_slider, ]}
                    onValueChange           ={props.onValueChange}
                    disabled                ={props.disabled}
                    value                   ={props.value}
                    thumbTintColor          ={'black'}
                    maximumTrackTintColor   ={'black'}
                    minimumTrackTintColor   ={'black'}
                    maximumValue            ={180}
                    margin                  ={10}
                    step                    ={1}
                    minimumValue            ={0}
                />
            </View>
        </View>
    )
}

export default sliderJV