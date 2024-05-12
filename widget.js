// function brainfab_assistant_widget(widgetId) {
//     var hostname = window.location.hostname;
//     if (document.cookie.indexOf("brainfab_assistant_validated=" + hostname) !== -1) {
//         createAndAppendWidget(widgetId);
//     } else {
//         var xhr = new XMLHttpRequest();
//         xhr.open("GET", "https://brainfab-assistant-app.bubbleapps.io/version-test/api/1.1/wf/widget_validator?widgetId=" + widgetId + "&url=" + encodeURIComponent(hostname), true);
//         xhr.onreadystatechange = function() {
//             if (xhr.readyState === 4) {
//                 if (xhr.status === 200) {
//                     var response = JSON.parse(xhr.responseText);
//                     if (response.status === "success" && response.response.validate === true) {
//                         var expirationDate = new Date();
//                         expirationDate.setDate(expirationDate.getDate() + 1);
//                         document.cookie = "brainfab_assistant_validated=" + hostname + "; expires=" + expirationDate.toUTCString() + "; path=/";
//                         createAndAppendWidget(widgetId);
//                     } else {
//                         console.error("Access to the widget is denied: " + xhr.status);
//                     }
//                 } else {
//                     console.error("Access to the widget is denied: " + xhr.status);
//                 }
//             }
//         };
//         xhr.send();
//     }
// }






function createAndAppendWidget(widgetId) {
    const widgetContainer = document.createElement("div");
    widgetContainer.innerHTML = '<style>#chat-widget-container{position:fixed;bottom:20px;right:20px;width:60px;height:60px;background-color:#fff;padding:10px;color:#1a56db;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;text-align:center;font-size:13px;}#chat-container{background-color:#fff;display:none;position:fixed;bottom:110px;right:20px;width:300px;height:400px;border:1px solid #ccc;border-radius:8px;overflow:hidden;padding:5px;}.iframe-container{width:100%;height:100%;}@media (max-width: 765px){#chat-widget-container{padding:50px;}}</style><body><div id="chat-widget-container" onclick="toggleChat()"><span>Brainfab Assistant</span></div><div id="chat-container"><div class="iframe-container"><iframe style="height:100%" src="https://assistant.brainfab.com/version-5pml/widget-chat/' + encodeURIComponent(widgetId) + '" frameborder="0"></iframe></div></div>';
    document.body.appendChild(widgetContainer);
}

function toggleChat() {
    const chatContainer = document.getElementById("chat-container");
    chatContainer.style.display = chatContainer.style.display === "none" || chatContainer.style.display === "" ? "block" : "none";
}



createAndAppendWidget('1713530323527x738082945946091500');