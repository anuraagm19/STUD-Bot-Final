function func() {
    chrome.windows.getLastFocused({populate: true }, function(currentWindow) {
        if (currentWindow.focused && currentWindow.state!="minimized") {
            var activeTab = currentWindow.tabs.find(t => t.active === true);
            let url = activeTab.url;
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(this.responseText);
                }
            };
            xhttp.open("POST", "http://127.0.0.1:5000/send_url");
            xhttp.send("url=" + url);
        }
        

    });
};

setInterval(func, 1000)








