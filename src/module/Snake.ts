export default class Snake{
    headEl: HTMLElement;     //蛇的头部
    bodies: HTMLCollection;  //结果
    el: HTMLElement; //蛇的容器
    constructor() {
        this.headEl = document.querySelector(".snake>.snake_item") as HTMLElement;
        this.el = document.querySelector('.snake')!;
        this.bodies = document.querySelector('.snake')!.getElementsByTagName('div')!;
    }
    get X() {
        return this.headEl.offsetLeft;
    }

    get Y() {
        return this.headEl.offsetTop;
    }


    set X(value: number) {
        if (this.X === value) return;
        if (value < 0 || value > 290) {
           throw new Error('蛇撞墙了!')
        } else {
            this.moveBody()
            this.headEl.style.left = value + 'px';
            this.checkHeadBody()
        }
    }

    set Y(value: number) {
        if (this.Y === value) return;
        if (value < 0 || value > 290) {
            throw new Error('蛇撞墙了!')
        } else {
            this.moveBody()
            this.headEl.style.top = value + 'px';
            this.checkHeadBody()
        }
    }

    moveBody() {
        // 后面的身体移动到前面的位置
        // 先移动后面的身体 然后移动前面的快
        for (let i = this.bodies.length - 1; i > 0; i--){
            let X: number;
            let Y: number;
            X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
        }
    }


    //吃的食物
    addBody() {
        this.el.insertAdjacentHTML('beforeend',"<div class='snake_item'></div>")  //添加div标签
    }

    // 检查是否撞到身体
    checkHeadBody() {
        for (let i = 1; i < this.bodies.length; i++){
            if (this.X === (this.bodies[i] as HTMLElement).offsetLeft && this.Y === (this.bodies[i] as HTMLElement).offsetTop) {
                throw new Error('撞到自己!')
            }
        }
    }

}