class PositionSticky {
  constructor(obj) {
    if (typeof obj.el == 'string') {
      this.el = document.querySelector(obj.el);
    } else if (obj.el instanceof HTMLElement) {
      this.el = obj.el
    }
    this.top = obj.top;
    this.unit = obj.unit;
    this.elemHeight = 0;
    this.nextEl = this.findNextEl(this.el);
    this.nextElTop = window.getComputedStyle(this.nextEl).marginTop;
    this.scrollNumber()
    this.el.style.zIndex = "99";
    this.el.style.position = 'fixed';
    this.el.style.width = '100%';
    this.scroll();
    window.addEventListener('scroll', () => this.scroll());
    window.addEventListener('resize', () => {
      this.scroll()
      setTimeout(() => {
        this.scroll()
      }, 200); 
    });
  }
  scroll() {
    this.moveNextElem()
    this.menuTop = this.scrollNumber();
    if (this.menuTop - window.pageYOffset > 0) {
      this.el.style.top = this.menuTop - window.pageYOffset + "px";
    } else {
      this.el.style.top = 0;
    }
  }
  scrollNumber() {
    this.elTop()
    if (typeof (this.top) != "number" && isNaN(this.top) || this.top != this.elTop()) {
      this.top = this.elTop();
    }
    if (this.unit == 'px' || this.unit == undefined) {
      return this.top >= 0 ? this.top : 0;
    } else if (this.unit == '%') {
      return this.calc(window.innerHeight, this.top) - this.el.clientHeight;
    }
  }
  calc(height, top) {
    return height / 100 * top;
  }
  moveNextElem() {
    if(this.elemHeight != this.el.clientHeight) {
      this.elemHeight = this.el.clientHeight;
      this.nextEl.style.marginTop = parseInt(this.nextElTop) + this.elemHeight + "px";
    } 
  }
  elTop(){
    return this.findPrevEl(this.el).getBoundingClientRect().bottom + window.pageYOffset;
  }
  findPrevEl(el) {
    return el.previousSibling instanceof HTMLElement ? el.previousSibling : this.findPrevEl(el.parentElement)
  }
  findNextEl(el) {
    return el.nextSibling instanceof HTMLElement ? el.nextSibling : this.findNextEl(el.parentElement)
  }
}

window.addEventListener("load", function () {
  const myScroll = new PositionSticky({
    el: '.nav', // селектор элемента для подключения
    // top: 10, // смещение вниз, если не указать - взьмет положение элемента
    // unit: '%' // значения '%' - смещение вниз в процентах; 'px' или undefined - смещение вниз в пикселях;
  })
})
