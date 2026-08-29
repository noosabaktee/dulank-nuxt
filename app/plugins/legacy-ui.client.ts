export default defineNuxtPlugin(() => {
  const q = (selector: string | Element) => typeof selector === 'string' ? document.querySelector(selector) as HTMLElement | null : selector as HTMLElement

  class Collapse {
    el: HTMLElement
    constructor(el: Element) { this.el = el as HTMLElement }
    show() { this.el.classList.add('show'); this.el.classList.remove('hidden'); this.el.style.display = '' }
    hide() { this.el.classList.remove('show'); if (this.el.classList.contains('collapse')) this.el.style.display = 'none' }
    toggle() { this.el.classList.contains('show') ? this.hide() : this.show() }
  }
  class Modal {
    el: HTMLElement
    constructor(el: Element) { this.el = el as HTMLElement }
    show() {
      this.el.classList.add('show'); this.el.classList.remove('hidden'); this.el.style.display = 'block'; this.el.setAttribute('aria-hidden','false'); document.body.classList.add('modal-open')
      if (!document.querySelector('.modal-backdrop[data-dulank]')) { const b=document.createElement('div'); b.className='modal-backdrop'; b.dataset.dulank='true'; document.body.appendChild(b) }
    }
    hide() { this.el.classList.remove('show'); this.el.style.display='none'; this.el.setAttribute('aria-hidden','true'); document.body.classList.remove('modal-open'); document.querySelector('.modal-backdrop[data-dulank]')?.remove() }
    static getOrCreateInstance(el: Element) { return new Modal(el) }
  }
  class Tab {
    el: HTMLElement
    constructor(el: Element) { this.el=el as HTMLElement }
    show() {
      const container=this.el.closest('[role="tablist"], .nav, ul') || this.el.parentElement?.parentElement
      container?.querySelectorAll('.nav-link, [data-bs-toggle="tab"]').forEach(x=>x.classList.remove('active'))
      this.el.classList.add('active')
      const target=this.el.getAttribute('data-bs-target') || this.el.getAttribute('href')
      if (target?.startsWith('#')) {
        const pane=document.querySelector(target) as HTMLElement | null
        if (pane) { const parent=pane.parentElement; parent?.querySelectorAll('.tab-pane').forEach(x=>x.classList.remove('show','active')); pane.classList.add('show','active'); pane.classList.remove('hidden') }
      }
    }
  }
  class Toast {
    el: HTMLElement; options: any
    constructor(el: Element, options: any={}) { this.el=el as HTMLElement; this.options=options }
    show() { this.el.classList.add('show'); this.el.classList.remove('hide','hidden'); this.el.style.display='block'; if (this.options.autohide !== false) setTimeout(()=>this.hide(), this.options.delay || 5000) }
    hide() { this.el.classList.remove('show'); this.el.classList.add('hide'); this.el.style.display='none' }
    static getOrCreateInstance(el: Element) { return new Toast(el) }
  }
  class Carousel {
    el: HTMLElement; timer?: number
    constructor(el: Element, options: any={}) { this.el=el as HTMLElement; const interval=options.interval ?? 5000; if (interval) this.timer=window.setInterval(()=>this.next(), interval) }
    items() { return [...this.el.querySelectorAll('.carousel-item')] as HTMLElement[] }
    go(i:number) { const items=this.items(); if(!items.length)return; items.forEach(x=>{x.classList.remove('active'); x.style.display='none'}); const item=items[(i+items.length)%items.length]; item.classList.add('active'); item.style.display='block' }
    next() { const items=this.items(); const i=Math.max(0,items.findIndex(x=>x.classList.contains('active'))); this.go(i+1) }
    prev() { const items=this.items(); const i=Math.max(0,items.findIndex(x=>x.classList.contains('active'))); this.go(i-1) }
  }
  class Tooltip { constructor(_el: Element) {} }

  ;(window as any).bootstrap = { Collapse, Modal, Tab, Toast, Carousel, Tooltip }

  document.addEventListener('click', (event) => {
    const target=(event.target as Element).closest('[data-bs-toggle], [data-bs-dismiss], [data-bs-slide-to], [data-bs-slide]') as HTMLElement | null
    if(!target) return
    const toggle=target.dataset.bsToggle
    if(toggle==='collapse') { event.preventDefault(); const sel=target.dataset.bsTarget || target.getAttribute('href'); const el=sel ? q(sel) : null; if(el) new Collapse(el).toggle() }
    if(toggle==='modal') { event.preventDefault(); const sel=target.dataset.bsTarget || target.getAttribute('href'); const el=sel ? q(sel) : null; if(el) new Modal(el).show() }
    if(toggle==='tab') { event.preventDefault(); new Tab(target).show() }
    if(toggle==='dropdown') { event.preventDefault(); const menu=(target.parentElement?.querySelector('.dropdown-menu') || target.nextElementSibling) as HTMLElement | null; if(menu){ const open=menu.classList.toggle('show'); menu.style.display=open?'block':'none' } }
    if(target.dataset.bsDismiss==='modal') { const el=target.closest('.modal'); if(el) new Modal(el).hide() }
    if(target.dataset.bsDismiss==='toast') { const el=target.closest('.toast'); if(el) new Toast(el).hide() }
    if(target.dataset.bsSlideTo != null) { const carousel=target.closest('.carousel'); if(carousel) new Carousel(carousel,{interval:0}).go(Number(target.dataset.bsSlideTo)) }
    if(target.dataset.bsSlide) { const sel=target.dataset.bsTarget || target.getAttribute('href'); const carousel=sel ? q(sel) : target.closest('.carousel') as HTMLElement | null; if(carousel){ const c=new Carousel(carousel,{interval:0}); target.dataset.bsSlide==='prev'?c.prev():c.next() } }
  })
})
