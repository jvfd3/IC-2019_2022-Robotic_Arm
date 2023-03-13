import dgram from 'react-native-udp'

const ip            = '192.168.0.100'
const port          = 8888
const app_port      = 1111

const udp_socket = get_socket()
configure_udp_local (udp_socket, app_port)
// console.log(udp_socket)

function load_udp() {}

function send_udp (msg) {
    udp_socket.send(
        msg,
        undefined,
        undefined,
        port,
        ip,
        function(err) {
            if (err) throw err
            console.log('Sent message: '+msg)
            console.log('normal -> '+ip+':'+port)
            // let temp_address = udp_socket.address().address
            // let temp_port    = udp_socket.address().port
            // let temp_family  = udp_socket.address().family

            // console.log(temp_address+':'+temp_port+'\n')
            // console.log(temp_family)
        }
    )
}

function send_udp_custom (msg, local_ip, local_port) {
    udp_socket.send(
        msg,
        undefined,
        undefined,
        local_port,
        local_ip,
        function(err) {
            if (err) throw err
            console.log(msg+'\t-> '+local_ip+':'+local_port)
        }
    )
}

function get_socket () {
    const local_socket = dgram.createSocket('udp4')
    return local_socket
}

function configure_udp_local (local_socket, local_port) {
    local_socket.bind(local_port)
    // local_socket.bind()
    
    // console.log('configuring')
    // local_socket.on('message', function(msg, rinfo) {
    //     console.log('Message received', msg)
    // })
}


function test1 () {
    let msg = '<<normal>>'
    send_udp(msg)
}
function test2 () {
    let msg = '<custom>'
    send_udp_custom(msg, value_ip, parseFloat(value_port))
}
function test3 (local_ip_port) {
    const ip    = local_ip_port.ip
    const local = local_ip_port.port
}

export {
    test1,
    test2,
    test3,
    load_udp,
    send_udp,
    send_udp_custom,
}