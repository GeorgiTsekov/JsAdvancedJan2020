function solve(obj){
    const validMethods = ["GET", "POST", "DELETE", "CONNECT"];
    const uriRegex = /^([A-Za-z0-9.]+)$/gm;
    const validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"]
    const messageRegex = /([^<>\&\\'"])/gm;

    if (!(obj.method && validMethods.includes(obj.method))) {
        throw new Error("Invalid request header: Invalid Method")
    }

    if (!(obj.uri && (obj.uri.match(uriRegex) || '*'))) {
        throw new Error("Invalid request header: Invalid URI")
    }

    if (!(obj.version && validVersions.includes(obj.version))) {
        throw new Error("Invalid request header: Invalid Version");
    }

    let validMessage;

    if (obj.hasOwnProperty("message")) {
        validMessage = obj.message.match(messageRegex) || obj.message == "";

        if (!validMessage) {
            throw new Error("Invalid request header: Invalid Message");
        } 
    } else {
        throw new Error("Invalid request header: Invalid Message");
    }

    return obj;
};

let test0 = {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  };

  solve(test0);
  