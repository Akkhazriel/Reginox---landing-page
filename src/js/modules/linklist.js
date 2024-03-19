const listDropdown = function() {
    const listBtn = document.querySelectorAll('.link-list__button');
    const contentSection = document.querySelector('.link-list__content');

    let hasActiveButton = false;

    listBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
        const nextElement = btn.nextElementSibling;

        // Определение предыдущего состояния кнопки
        const wasActive = btn.classList.contains('active');

        // Добавление/удаление класса 'active' у nextElement и btn
        nextElement.classList.toggle('active');
        btn.classList.toggle('active');

        // Определение текущего состояния кнопок
        const isActive = btn.classList.contains('active');

        // Проверка, изменилось ли состояние кнопок
        if (wasActive !== isActive) {
          if (isActive) {
            hasActiveButton = true;
          } else {
            hasActiveButton = [...listBtn].some((btn) => btn.classList.contains('active'));
          }
        }

        // Добавление/удаление класса 'active' у contentSection
        if (hasActiveButton) {
          contentSection.classList.add('active');
        } else {
          contentSection.classList.remove('active');
        }
      });
    });
  };

  export default listDropdown;