const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.npoint.io/08c4e4dc0ea9a3d6f08f", true);

xhr.onload = function () {
  if (xhr.status === 200) {
    const response = xhr.responseText;
    console.log("Response :", JSON.parse(response));
  } else {
    console.error("Error :", xhr.status);
  }
};

xhr.send();
