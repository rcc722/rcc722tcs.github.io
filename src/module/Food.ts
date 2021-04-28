// 食物的类
export default class Food{
    // constructor(public X:string,public Y:string){}
    el: HTMLElement;
    constructor() {
        //获取页面中的food元素
        this.el = document.querySelector(".food")!;
    }
    ///获取食物的坐标
    get X() {
        return this.el.offsetLeft;
    }
    get Y() {
        return this.el.offsetTop;
    }
    //修改食物的位置 0-290
    change() {
        this.el.style.left = Math.floor(Math.random() * 30)*10+'px';
        this.el.style.top = Math.floor(Math.random() * 30)*10+'px';
    }

}