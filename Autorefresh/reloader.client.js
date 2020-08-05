 (function() 
{
    let address = "127.0.0.1:8080"; //localhost with port 8080
    let socket = new WebSocket(`ws:/${address}`);

    socket.onopen = function (e) { };

    socket.onmessage = function (event) {
        if(event.data === "reload"){
            document.location.reload();
        }
        console.log(`[message] Data received from server: ${event.data}`);
    };

    socket.onclose = function (event) {
        if (event.wasClean) {
            console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
        } else {
            // e.g. server process killed or network down
            // event.code is usually 1006 in this case
            console.log('[close] Connection died');
        }
    };

    socket.onerror = function (error) {
        console.log(`[error] ${error.message}`);
    }
})();

 