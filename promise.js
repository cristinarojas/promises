// resolve and reject callbacks to the promise
let promise = new Promise((resolve, reject) => {
  // Interface for create HTTP to web servers
  let request = new XMLHttpRequest();

  // we need the url for .open XMLHttpRequest() method
  let url = "data.json";

  // .open is a method of XMLHttpRequest() for initialize request
  request.open("GET", url);

  // Listen the load event
  request.addEventListener("load", () => {
    // is the request ok
    if(request.status === 200) {
      resolve(request.responseText)
    } else { // the request fail
      reject("Server Error:" + request.status);
    }
  }, false); // false is for capture, false default is bubbling 

  request.addEventListener("error", ()=> {
    reject("Cannot make Ajax Request");
  }, false);

  request.send();
});

/* NOTES */

// The XMLHttpRequest: specification defines
// an API that provides scripted client functionality for transferring data between a client and a server.

// addEventListener: is to attach an
// event handler to an element, so that you can do something useful when an event is triggered.
