'''Client for receiving UDP PACKAGED VIA UDP'''
import socket
from socket import AF_INET, SOCK_DGRAM
# from socketserver import UDPServer
# from socketserver import UDPServer


JV_option = 1
final_ip = '7' if JV_option else '5'
JV_ip = '192.168.0.10'+ final_ip
JV_port = 5000 if JV_option else 8081
localIP   = JV_ip
localPORT = JV_port

# localIP             = '192.168.0.107'
# localPORT           = 5000
bufferSize          = 1024
msgToClient         = 'teste UDP SERVER'
bytesToSend         = str.encode(msgToClient)
UDPServerSocket     = socket.socket(family=AF_INET, type=SOCK_DGRAM)
UDPServerSocket.bind((localIP, localPORT))
print('UDP ALGUMACOISA ...')
def send_back(in_msg):
    '''function to send message back'''
    global UDPServerSocket
    print('sending back', in_msg)
    in_msg = str.encode(in_msg)
    UDPServerSocket.sendto(in_msg, addr)

while True:
    byteAndAdres = UDPServerSocket.recvfrom(bufferSize)
    msg = byteAndAdres[0]
    addr = byteAndAdres[1]
    msg = msg.decode('utf-8')
    type_of_something = msg.split(',')
    if type_of_something is not None:
        mtype =type_of_something[0]
        if mtype == 'login':
            email,psw = type_of_something[1], type_of_something[2]
            if email == 'teste@gmail.com' and psw == '123':
                send_back('success')
