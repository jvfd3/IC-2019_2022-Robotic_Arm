import { StyleSheet } from 'react-native';

/* TODO:
    MERGE SOME SIMILAR STYLES
    CHANGE SOME REPEATED NAMES
*/

const views_border_color = '#789'

function get_indentation_color(indentation_level) {
    const base_gray = 111
    let gray_scale
    if (indentation_level) {
        gray_scale = '#' + base_gray * indentation_level
    } else {
        gray_scale = '#' + '000'
    }
    return gray_scale
}

function get_container_style(indentation_level) {
    return {
        backgroundColor: get_indentation_color(indentation_level),
        borderColor: views_border_color,
        borderWidth: 1,
        margin: 5,
        marginVertical: 2,
    }
}

let slider_indentation_level = 2

const style_sliders = StyleSheet.create({
    sliders_container: {...get_container_style(slider_indentation_level),
        // alignContent: 'center',
        // flex: 1,
        width: 350,
    },
})

const style_sliderjv = StyleSheet.create({
    sliderjv_container_view: {...get_container_style(slider_indentation_level + 1),
        alignContent: 'center',
        flex: 0,
    },
    sliderjv_Text_View: {...get_container_style(slider_indentation_level + 2),
        flexDirection: 'row',
        paddingLeft: 10
    },
    sliderjv_Text_Name: {...get_container_style(slider_indentation_level + 3),
        paddingLeft: 5,
        fontWeight: 'bold',
        color: 'white',
    },
    sliderjv_Text_Value: {...get_container_style(slider_indentation_level + 3),
        textAlign: 'right',
        color: 'white',
    },
    sliderjv_slider_view: {...get_container_style(slider_indentation_level + 2),
    },
    sliderjv_slider: {...get_container_style(slider_indentation_level + 3),
        // width: '100%'
    },
    sliderjv_slider_thumbTintColor: '#' + '000',
    sliderjv_slider_maximumTrackTintColor: '#' + '000',
    sliderjv_slider_minimumTrackTintColor: '#' + '',
})

const style_index = StyleSheet.create({
    index_container: {...get_container_style(0),
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
})

const style_test = StyleSheet.create({
    test_toggling_wifi_bt_container: {...get_container_style(1),
        flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        // flex: 0,
        // alignSelf: 'flex-start',
    },
    test_passing_component_container: {...get_container_style(1),
        // justifyContent: 'center',
        // alignItems: 'center',
        // flex: 0,
        // alignSelf: 'flex-start',
    },
    test_input_wifi_bt_container: {...get_container_style(1),
        // justifyContent: 'center',
        // alignItems: 'center',
        // flex: 0,
        // alignSelf: 'flex-start',
    },
    test_switch_names: {
        ...get_container_style(2),
        paddingBottom: 10,
        // justifyContent: 'center',
        // alignItems: 'center',
        // flex: 0,
        // alignSelf: 'flex-start',
    },
    test_white_text: {
        color: 'white',
    }
})


const styles_concat = StyleSheet.create({
    ...style_sliderjv,
    ...style_sliders,
    ...style_index,
    // ...style_input,
    ...style_test,
})

const flattened_test_styles = StyleSheet.flatten(styles_concat)
export default flattened_test_styles