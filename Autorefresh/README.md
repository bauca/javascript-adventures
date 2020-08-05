# Autorefresh 

### Motivation
I wanted to understand how Atom and other IDEs perform their change and reload action when a file is changed, it's a nice feature, but not knowing how it works frustated me.

### Solution
Even though I only needed the server sending messages to the client, websockets were the only feasible approach for this scenario (at least the one I could think of).

### Requirements
NodeJs v12.18.3+
ws:  WebSocket library 7.3.1+

### How to run it.
 - Clone or download the repository.
 - Go to the folder of the project.
 - In your preferred terminal, type the following commands:
  -- **npm install ws** or **npm install -g**  *to install ws globally*.
  -- **node reloader.server.js**
  -- Open the index.html file in your browser.
  -- Make changes to it and see the magic :)