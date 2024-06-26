export function showMessage (message, type = "success"){
Toastify({
    text: message,
    duration: 3000,
    destination: "https://open.spotify.com/episode/4a3Lm3GtVsSxqRkItDj2BL?si=f7fe0765a8b7403a",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: type === "success" ? "green" : "red"
    },
    onClick: function(){} // Callback after click
  }).showToast();
}