import React                        from 'react'
import SliderJV                     from '../Components/sliderJV'
import { View, }                    from 'react-native'
import styles                       from '../Styles/neutral_styles'

const sliders = (props) => {
    const is_component_viewable = props.isOn
    const number_of_sliders     = props.quantity
    const sendSlider            = props.send_function
    const address               = props.address

    function get_sliders(local_number_of_sliders) {
        let list_of_sliders = []
        for (let i = 1; i <= local_number_of_sliders; i++) {
            // console.log('test'+i+' <')
            list_of_sliders.push(
                <SliderJV   slider_id               = { i }
                            key                     = {'key_'+i}
                            function_to_execute     = {sendSlider}
                            address_to_send         = {address}
                            isEnabled               = {is_component_viewable}
                />
            )
        }
        return <>{list_of_sliders}</>
    }

    const Actual_slides_component = () => {
        return (
            <View
                style={[styles.sliders_container, ]} >
                {get_sliders(number_of_sliders)}
            </View>
        )
    }

    return is_component_viewable && <Actual_slides_component/>
    // return (<>{}</>)
}

export default sliders