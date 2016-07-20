function defPosition(event) {
      var x = y = 0;
      if (document.attachEvent != null) { // Internet Explorer & Opera
            x = window.event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
            y = window.event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
      } else if (!document.attachEvent && document.addEventListener) { // Gecko
            x = event.clientX + window.scrollX;
            y = event.clientY + window.scrollY;
      } else {
            // Do nothing
      }
      return {x:x, y:y};
}

function menu(type, evt) {
    // Блокируем всплывание события contextmenu
    evt = evt || window.event;
    evt.cancelBubble = true;
    // Показываем собственное контекстное меню
    var menu = document.getElementById("contextMenuId");
    var html = "";
    switch (type) {
        case (1) :
            html = "<li>webRefferal.com</li>";
            html += "<a href='#'>Первая функция</a>";
            html += "<a href='#'>Вторая функция</a>";
            html += "<a href='#'>Третья функция</a>";
        break;

    }
    // Если есть что показать - показываем
    if (html) {
        menu.innerHTML = html;
        menu.style.top = defPosition(evt).y + "px";
        menu.style.left = defPosition(evt).x + "px";
        menu.style.display = "";
    }
    // Блокируем всплывание стандартного браузерного меню
    return false;
}

// Закрываем контекстное при клике левой или правой кнопкой по документу
// Функция для добавления обработчиков событий
function addHandler(object, event, handler, useCapture) {
    if (object.addEventListener) {
        object.addEventListener(event, handler, useCapture ? useCapture : false);
    } else if (object.attachEvent) {
        object.attachEvent('on' + event, handler);
    } else alert("Add handler is not supported");
}
addHandler(document, "contextmenu", function() {
    document.getElementById("contextMenuId").style.display = "none";
});
addHandler(document, "click", function() {
    document.getElementById("contextMenuId").style.display = "none";
});
