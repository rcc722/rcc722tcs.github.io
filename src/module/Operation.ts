
export default class Operation {
    rightEl: HTMLElement;
    leftEl: HTMLElement;
    topEl: HTMLElement;
    bottomEl: HTMLElement;
    constructor() {
        this.rightEl = document.querySelector('.right')!;
        this.leftEl = document.querySelector('.left')!;
        this.topEl = document.querySelector('.top')!;
        this.bottomEl = document.querySelector('.bottom')!;
    }


}