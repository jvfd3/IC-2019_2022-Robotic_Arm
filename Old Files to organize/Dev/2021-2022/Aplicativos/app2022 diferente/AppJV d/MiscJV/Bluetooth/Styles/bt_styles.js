import { StyleSheet } from 'react-native';

/* TODO:
    MERGE SOME SIMILAR STYLES
    CHANGE SOME REPEATED NAMES
*/

const views_border_color = '#789'
const device_icon_size = 40

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

const style_btlist_layout   = StyleSheet.create({
    btlist_layout_container : { ...get_container_style (1),
        alignSelf: 'center',
        width: '95%',
        flex: 1, // the bottom gets tight with the lower component
        // flex: 0,
    },
    btlist_layout_title     : { ...get_container_style (2),
        paddingHorizontal: 10,
        fontWeight: 'bold',
        marginLeft: 10,
        alignSelf: 'center',
        fontSize: 20,
        color: '#'+'ffffff',
    },
})


let slider_indentation_level = 2

const style_sliders         = StyleSheet.create({
    sliders_container       : { ...get_container_style (slider_indentation_level),
        // alignContent: 'center',
        // flex: 0,
    },
})

const style_sliderjv       = StyleSheet.create({
    sliderjv_container      : { ...get_container_style (slider_indentation_level+1),
        alignContent: 'center',
        flex: 0,
    },
    sliderjv_Text_View      : { ...get_container_style (slider_indentation_level+2),
        flexDirection: 'row',
        paddingLeft: 10
    },
    sliderjv_Text_Name      : { ...get_container_style (slider_indentation_level+3),
        paddingLeft: 5,
        fontWeight: 'bold',
        color: 'white',
    },
    sliderjv_Text_Value     : { ...get_container_style (slider_indentation_level+3),
        textAlign: 'right',
        color: 'white',
    },
    sliderjv_slider_view    : { ...get_container_style (slider_indentation_level+2),
    },
    sliderjv_slider         : { ...get_container_style (slider_indentation_level+3),
    },
})

let devices_indentation_level = 2

const style_devices         = StyleSheet.create({
    devices_view_external       : { ...get_container_style (devices_indentation_level  ),
    },
    devices_borderList          : { ...get_container_style (devices_indentation_level+3),
        justifyContent: 'center',
        alignContent: 'space-between',
        borderRadius: 5,
        alignItems: 'center',
        alignSelf: 'center',
        width: 200,
        flex: 0,
    },
    devices_view_internal_on    : { ...get_container_style (devices_indentation_level+1),
    },
    devices_view_internal_off   : { ...get_container_style (devices_indentation_level+1),
        paddingHorizontal: 5,
    },
    devices_flatlist            : { ...get_container_style (devices_indentation_level+2),
    },
})

const style_subtitle        = StyleSheet.create({
    subtitle_container      : { ...get_container_style(devices_indentation_level+2),
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        flex:0,
    },
    subtitle_line           : {
        borderBottomWidth: 1,
        borderColor: '#'+'fff',
        width: 100,
        flex: 0,
        // flex: 1,
    },
    subtitle_text           : {
        fontWeight: 'bold',
        marginLeft: 10,
        fontSize: 18,
        color: '#'+'ddd',
    },
})

const style_device          = StyleSheet.create({
    device_initial_color        :    get_indentation_color (devices_indentation_level+3),
    device_touchable            : { ...get_container_style (devices_indentation_level+3),
        justifyContent: 'center',
        flexDirection:'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        flex: 1,
    },
    device_icons_view           : { ...get_container_style (devices_indentation_level+4),
        justifyContent: 'center',
        aspectRatio: 1,
        alignItems: 'center',
        height: device_icon_size+5,
        flex: 0,
    },
    device_icons                : { ...get_container_style (devices_indentation_level+5),
        aspectRatio:1,
        height: device_icon_size,
    },
    device_text_view            : { ...get_container_style (devices_indentation_level+4),
        justifyContent: 'center',
        flexDirection: 'column',
        alignSelf: 'center',
        width: 220,
        // width: 200,
        flex: 0,
    },
    device_text                 : { ...get_container_style (devices_indentation_level+5),
        paddingHorizontal: 5,
        margin: 2,
    },
    device_separator            : {
        borderTopWidth: 1,
        marginRight: 25,
        borderColor: '#'+'eceff1',
        marginLeft: 60,
        flex: 1,
    },
})

const style_index           = StyleSheet.create({
    index_container: {   backgroundColor: get_indentation_color (0),
        paddingTop: 30,
        flex: 1,
    },
})

const style_test_index      = StyleSheet.create({
    example_index_main_container: {
        backgroundColor: 'black',
    //     justifyContent: 'center',
    //     alignItems: 'center',
        flex: 1,
    },
})

const style_toggle          = StyleSheet.create({
    /* TOGGLE           START */
    toggle_view_container: { ...get_container_style (3),
        padding: 5,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        flex: 0,
    },
    toggle_text_view: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        width: 150,
        height: 30,
    },
    toggle_text:        {
        color: 'black'
    },
    toggle_color_palette: {        
        // color_bt_initial    : 'black',
        color_bt_on         : '#'+'009900',
        color_bt_off        : '#'+'990000',
        thumb_on            : '#'+'f5dd4b',
        thumb_off           : '#'+'f4f3f4',
        track_on            : '#'+'767577',
        track_off           : '#'+'81b0ff',
    },
})

const style_test            = StyleSheet.create({
    container_test: get_container_style(7),
    testing: {
        backgroundColor: 'red',
        
    },
})

const styles_concat         = StyleSheet.create({
    ...style_btlist_layout,
    ...style_test_index,
    ...style_sliderjv,
    ...style_subtitle,
    ...style_sliders,
    ...style_devices,
    ...style_device,
    ...style_toggle,
    ...style_index,
    ...style_test,
    // ...style_old_toggle,
})

const flattened_test_styles = StyleSheet.flatten(styles_concat)
export default flattened_test_styles
// const densed_styles            = StyleSheet.create (flattened_test_styles)
// export default densed_styles

const unused = {
    whiteText: {
        color: '#'+'fff',
    },
    square: {
        aspectRatio:1,
    },
    text: {
        fontWeight: 'bold',
        marginLeft: 10,
        fontSize: 20,
        color: '#'+'ffffff',
        flex: 1,
    },
    switch: {
        width: 50,
    },
    view1                   : { ...get_container_style (9),
        flex: 1,
    },
    view2                   : { ...get_container_style (7),
        flex: 1,
    },
    view3                   : { ...get_container_style (5),
        flex: 1,
    },
    view4                   : { ...get_container_style (3),
        flex: 1,
    },
    view5                   : { ...get_container_style (1),
        flex: 1,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    /*   EMPTY < */
    empty_container: {
        alignItems: 'center',
    },
    empty_icon: {
        marginVertical: 50,
        height: 200,
        width:200,
    },
    empty_text: {
        color: '#'+'000000',
        fontSize: 20,
    },
    /* > EMPTY */
    /* BTLIST BORDERLIST */
    views: { ...get_container_style (5),
        alignContent: 'space-between',
        borderRadius: 5,
        alignItems: 'center', 
        height: 30,
        width: 40,
        flex: 1,
    },
    /* BTLIST BORDERLIST */
}