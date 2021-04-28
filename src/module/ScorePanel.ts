// 记分牌
export default class ScorePanel{
    score = 0;
    level = 1;
    scoreEl:HTMLElement;
    levelEl: HTMLElement;
    maxLevel: number;


    constructor(maxLevel:number=10) {
        this.scoreEl = document.querySelector('.score')!;
        this.levelEl = document.querySelector('.level')!;
        this.maxLevel=maxLevel
    }

    //加分
    addScore() {
        this.scoreEl.innerHTML = ++this.score + "";

        // 每加10分 升一级
        if (this.score % 10 === 0) {
            this.levelUp()
        }
    }

    //提升等级
    levelUp() {
        if (this.level < this.maxLevel) {
            this.levelEl.innerHTML = ++this.level + '';
        }
    }

}