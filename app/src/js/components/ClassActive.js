class ClassActive {
  constructor(obj) {
    if (typeof obj.el == 'string') {
      this.el = document.querySelector(obj.el);
    } else if (obj.el instanceof HTMLElement) {
      this.el = obj.el
    }
    if (typeof obj.menu == 'string') {
      this.menu = document.querySelector(obj.menu);
    } else if (obj.menu instanceof HTMLElement) {
      this.menu = obj.menu
    }
    
    this.el.addEventListener('click', (e) => {
      e.preventDefault();
      this.menu.classList.toggle("active");
    });
    document.addEventListener("click", (e) => {
      if (this.menu.classList.contains("active") &&
        e.target != this.menu &&
        e.target != this.el) {
        this.menu.classList.remove("active")
      }
    })
  }
}

window.addEventListener("load", function () {
  const burger = new ClassActive({
    el: '.icon-burger', // селектор события клика
    menu: '.menu' // селектор для добавления/удаления класса "active"
  })
})
