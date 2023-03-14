import { StyleSheet } from 'react-native';

/* TODO:
    MERGE SOME SIMILAR STYLES
    CHANGE SOME REPEATED NAMES
*/

const views_border_color = '#789'

function get_indentation_color (indentation_level) {
    const base_gray = 111
    let gray_scale
    if (indentation_level) {
        gray_scale = '#'+base_gray*indentation_level
    } else {
        gray_scale = '#' + '000'
    }
    return gray_scale
}

function get_container_style (indentation_level) {
    return {
        backgroundColor: get_indentation_color (indentation_level),
        borderColor: views_border_color,
        borderWidth: 1,
        margin: 5,
        marginVertical: 2,
    }
}



let wifi_indentation_level = 2

const style_wifi            = StyleSheet.create({
    wifi_input_container: { ...get_container_style (wifi_indentation_level+1),
        justifyContent: 'center',
        alignItems: 'center',
        // flex: 0,
    },
    senders_container: { ...get_container_style (wifi_indentation_level+1),

    },
    button: {
        backgroundColor: 'grey',
        width: 150,
        height: 40,
        margin: 10,
        borderRadius: 10,
        borderColor: 'blue',
        borderWidth: 1,
        // aspectRatio: 1,
    },
    wifi_ip: {
        backgroundColor: '#'+'555',
        margin: 10,
        borderColor: 'blue',
        borderWidth: 1,
        width: 130,
    },
    wifi_port: {
        backgroundColor: '#'+'555',
        margin: 10,
        borderColor: 'blue',
        borderWidth: 1,
        width: 50,
    },
    wifi_address_views: {
        flexDirection: 'row',
    },
})


const styles_concat         = StyleSheet.create({
    ...style_wifi,
})

const flattened_test_styles = StyleSheet.flatten(styles_concat)
export default flattened_test_styles
// const densed_styles            = StyleSheet.create (flattened_test_styles)
// export default densed_styles
