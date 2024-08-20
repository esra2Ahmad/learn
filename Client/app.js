//alert("welcome to our website");
const postBtn = document.getElementById("post_");
const gettBtn = document.getElementById("get");
const getidBtn = document.getElementById("getid");

const sampleObject = {
  message: "test message",
};
postBtn.onclick = function () {
  fetch("/api/contact", {
    method: "post",
    body: JSON.stringify(sampleObject),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("the error from post request:", error);
    });
};
postBtn.onclick = function () {
  fetch("/api/contact", {
    method: "post",
    body: JSON.stringify(sampleObject),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("the error from post request:", error);
    });
};
