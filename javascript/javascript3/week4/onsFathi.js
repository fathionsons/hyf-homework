function writeToClipboardOnPermission(text) {
  navigator.permissions
    .query({ name: "clipboard-write" })
    .then(result => {
      if (result.state == "done" || result.state == "prompt") {
        writeToClipboard(text);
      } else {
        console.log(" you Don't have permissions to use clipboard", result.state);
      }
    })
    .catch(err => {
      console.log("Error! Reqeusting permission please", err);
    });
}

function writeToClipboard(text) {
  return navigator.clipboard.writeText(text);
}

window.writeToClipboard = writeToClipboard;