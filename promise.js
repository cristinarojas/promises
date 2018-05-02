let promise = new Promise((resolve, reject) => {
  let request = new XMLHttpRequest();
  let url = "data.json";

  request.open("GET", url);

  request.addEventListener("load", () => {
    if(request.status === 200) {
      resolve(request.responseText)
    } else {
      reject("Server Error:" + request.status);
    }
  }, false);

  request.addEventListener("error", ()=> {
    reject("Cannot make Ajax Request");
  }, false);

  request.send();
});
