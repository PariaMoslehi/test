var today = new Date().getDay(); // عدد بین 0 (یک‌شنبه) تا 6 (شنبه)
var day;

switch(today) {
    case 0:
        day = "یک‌شنبه";
        break;
    case 1:
        day = "دوشنبه";
        break;
    case 2:
        day = "سه‌شنبه";
        break;
    case 3:
        day = "چهارشنبه";
        break;
    case 4:
        day = "پنج‌شنبه";
        break;
    case 5:
        day = "جمعه";
        break;
    case 6:
        day = "شنبه";
        break;
    default:
        day = "خطا در دریافت روز هفته";
}

document.write("امروز: " + day);
