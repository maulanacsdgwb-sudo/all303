const LINKS = {
  login: "https://allmerdeka.biz/",
  register: "https://allmerdeka.biz/"
};

const loginButton = document.getElementById("loginButton");
const registerButton = document.getElementById("registerButton");
const liveChatButton = document.getElementById("liveChatButton");

loginButton.addEventListener("click", (event) => {
  event.preventDefault();
  window.open(LINKS.login, "_blank", "noopener,noreferrer");
});

registerButton.addEventListener("click", (event) => {
  event.preventDefault();
  window.open(LINKS.register, "_blank", "noopener,noreferrer");
});

liveChatButton.addEventListener("click", () => {
  // Mendukung LiveChat.com jika widget sudah dipasang.
  if (window.LiveChatWidget && typeof window.LiveChatWidget.call === "function") {
    window.LiveChatWidget.call("maximize");
    return;
  }

  alert("Widget LiveChat belum dipasang. Tambahkan script LiveChat.com terlebih dahulu.");
});
