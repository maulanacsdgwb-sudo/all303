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
 const LINKS = {
   livechat : "https://direct.lc.chat/11470993/18'",
 };
  
  }


