// статусы 
var StatusDev = "Ведётся разработка сайта."
var StatusTest = "Проходит тестирование сайта."

// версии сайта
var SiteVerion = "0.1"

// Время, хз зачем, но пусть будет)
var time = new Date();

// сообщение
alert(StatusDev + "\n" + "Версия сайта:" + " " + SiteVerion + " \n" + "Время:" + " " + time.getHours() + ":" + time.getMinutes()); // показывается на время тестирования или разработки

// принудительный переход на наш веб ресурс (ДЛЯ ИСХОДНИКОВ)
// window.location = "http://www.example.com";