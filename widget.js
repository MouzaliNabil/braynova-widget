(function () {
  const scriptTag = document.currentScript;
  const botId = scriptTag.getAttribute("data-bot-id") || "default";

const botUrl = `https://mouzalinabil.github.io/braynova-widget/chat/${botId}.html`;
const iconUrl = `https://mouzalinabil.github.io/braynova-widget/chat-icon.png`;


  const launcher = document.createElement("div");
  launcher.style.position = "fixed";
  launcher.style.bottom = "20px";
  launcher.style.right = "20px";
  launcher.style.zIndex = "99999";

  const icon = document.createElement("img");
  icon.src = iconUrl;
  icon.alt = "Chatbot";
  icon.width = 60;
  icon.height = 60;
  icon.style.cursor = "pointer";

  icon.onclick = () => {
    let iframe = document.getElementById("braynova-frame");
    if (!iframe) {
      iframe = document.createElement("iframe");
      iframe.id = "braynova-frame";
      iframe.src = botUrl;
      iframe.style.position = "fixed";
      iframe.style.bottom = "90px";
      iframe.style.right = "20px";
      iframe.style.width = "360px";
      iframe.style.height = "500px";
      iframe.style.border = "none";
      iframe.style.borderRadius = "12px";
      iframe.style.zIndex = "99999";
      document.body.appendChild(iframe);
    } else {
      iframe.style.display = iframe.style.display === "none" ? "block" : "none";
    }
  };

  launcher.appendChild(icon);
  document.body.appendChild(launcher);
})();


  launcher.appendChild(icon);
  document.body.appendChild(launcher);
})();
