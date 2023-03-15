# News-web
Layout with comments block
# Описание
Реализация страницы новостного сайта с блоком комментариев

# Функционал
- Комментарий создается при нажатии кнопки "Отправить" или при нажатии на кнопку Enter
- Валидация. Если форма заполнена некорректно, то рядом с полем сообщение об ошибке
  - Имя комментатора 
    - Минимальная длина 2 буквы
    - Запрет использования чисел и спецсимволов
  - Текст комментария
    - Минимальная длина 1 символ
  - При продолжении печати в поле ввода ошибка исчезает
- Комментарии можно удалять, по нажатию кнопки удаления (иконки корзины)
- Комментариям можно выставлять и убирать лайки
- При добавлении нового коментария счетчики комментариев вверху странцы и в блоке комментариев обновляются автоматически
  
# Внешний вид
Форма добавления коментария:
- Имя комментатора
- Текст комментария
- Возможность указать дату или оставить ее пустой
  - Если дата не задана, то автоматически подставляется текущая дата
- Кнопка отправки

Список комментариев:
- Имя комментатора
- Текст комментария
- Дата, время добавления
  - Если текущая дата: "Сегодня, 16:23" (ключевое - слово сегодня, время подставляется)
  - Если вчерашняя дата: "Вчера, 18:39" (ключевое - слово вчера, рандомное время генерируется и подставляется автоматически)
  - Другие даты отображаются в формате "год-месяц-день", рандомное время генерируется и подставляется автоматически
- Кнопка удаления комментария (иконка корзины)
- Сердечко лайка 

