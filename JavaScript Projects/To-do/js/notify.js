window.addEventListener('load', () => {

    const notify = () => {
        var notification = new Notification ("Все еще отдыхаешь?", {
            tag : "ache-mail",
            body : "Пора немного поработать",
            icon : "../logo.png"
        });
    }

    let notify_period = 1000 * 60 * 60;
    
    const notify_set = () => {
        if (!("Notification" in window))
            alert ("Ваш браузер не поддерживает уведомления.");
        else if (Notification.permission === "granted")
            setInterval(notify, notify_period);
        else if (Notification.permission !== "denied") {
            Notification.requestPermission (function (permission) {
                if (!('permission' in Notification))
                    Notification.permission = permission;
                if (permission === "granted")
                    setInterval(notify, notify_period);
            });
        }
    }
    notify_set();
});