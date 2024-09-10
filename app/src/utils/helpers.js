export function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function checkMessage(input) {
  console.log(input);
  const message = "";
  if (input===message) {
    console.log("here");
    return false;
  }
  console.log("here2");
  return true;
}

// /^[A-Za-z]\w{7,14}$/
