const io = require('socket.io-client');
const { Baseurl } = require('./constants');

const createSocketConnection = () => {
    return io(Baseurl)
}

export default createSocketConnection;