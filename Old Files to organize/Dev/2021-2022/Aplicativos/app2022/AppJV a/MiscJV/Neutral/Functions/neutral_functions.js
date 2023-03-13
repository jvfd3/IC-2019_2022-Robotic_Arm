
function printError(errorMessage, error) {
    let message = errorMessage + 'Error { ' + error + ' } ' + errorMessage + 'Error'
    console.log(message)
}

function get_true_slider_value (slider_id, slider_value) {
    let true_value_slider = slider_value + slider_id * 1000
    let value_to_send = true_value_slider.toString()
    return value_to_send
}

export {
    get_true_slider_value,
    printError,
}