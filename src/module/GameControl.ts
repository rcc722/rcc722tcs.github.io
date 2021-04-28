// 控制所有类
import Food from './Food';
import ScorePanel from './ScorePanel';
import Snake from './Snake';
import Operation from './Operation';



export default class GameControl{
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    operation: Operation;
    direction: string = "";
    // 是否结束
    isLive=true


    constructor() {
        this.snake = new Snake;
        this.food = new Food;
        this.scorePanel = new ScorePanel;
        this.operation = new Operation()
        this.init()
    }

    init() {
        //绑定键盘按下事件
        document.addEventListener('keydown', this.keydownHandler.bind(this));

        // 点击事件
        this.operation.rightEl.addEventListener('touchstart',()=>{this.keydownHandler(({key:'ArrowRight'} as KeyboardEvent))})
        this.operation.leftEl.addEventListener('touchstart',()=>{this.keydownHandler({key:'ArrowLeft'} as KeyboardEvent)})
        this.operation.topEl.addEventListener('touchstart',()=>{this.keydownHandler({key:'ArrowUp'} as KeyboardEvent)})
        this.operation.bottomEl.addEventListener('touchstart',()=>{this.keydownHandler({key:'ArrowDown'} as KeyboardEvent)})


        this.run()
    }


    // 按下按键
    keydownHandler(e: KeyboardEvent) {
        // ArrowUp ArrowRight ArrowDown ArrowLeft
        if (this.snake.bodies.length > 1) {
            switch (this.direction) {
                case 'ArrowUp':
                    if (e.key === 'ArrowDown') return;
                    this.direction = e.key;
                    break;
                case 'ArrowRight':
                    if (e.key === 'ArrowLeft') return;
                    this.direction = e.key;
                    break;
                case 'ArrowDown':
                    if (e.key === 'ArrowUp') return;
                    this.direction = e.key;
                    break;
                case 'ArrowLeft':
                    if (e.key === 'ArrowRight') return;
                    this.direction = e.key;
                     break;
            }
        } else {
            if (e.key == 'ArrowUp' || e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === "ArrowLeft") {
                this.direction = e.key;
            }
        }
    }
    // 移动蛇
    run() {        
        let X = this.snake.X;
        let Y = this.snake.Y; 
        switch (this.direction) {
            case 'ArrowUp': //上
                Y-=10
                break;
            case 'ArrowRight': //右
                X+=10
                break;
            case 'ArrowDown': //下
                Y+=10
                break;
            case 'ArrowLeft': //左
                X-=10
                break;
            default:
                break;
        }
        this.checkEat(X, Y);
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (error) {
            alert(error.message + " GAME OVER");
            this.isLive = false;
        }

        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    }
    //检查吃到食物
    checkEat(x:number,y:number) {
        if (this.food.X === x && this.food.Y === y) {
            this.food.change()
            this.scorePanel.addScore()
            this.snake.addBody()
         }
    }





}

