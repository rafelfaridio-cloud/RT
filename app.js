const tg = window.Telegram.WebApp;

// آماده‌سازی Mini App
tg.ready();

// باز کردن در حالت تمام‌صفحه
tg.expand();

const welcome = document.getElementById("welcome");
const button = document.getElementById("helloButton");
const counter = document.getElementById("counter");

let count = 0;

// اطلاعات کاربر Telegram
const user = tg.initDataUnsafe?.user;

if (user) {
    welcome.textContent =
        `سلام ${user.first_name}! 👋`;
} else {
    welcome.textContent =
        "سلام! به اولین Mini App من خوش آمدی.";
}

button.addEventListener("click", () => {

    count++;

    counter.textContent =
        `تعداد کلیک: ${count}`;

});