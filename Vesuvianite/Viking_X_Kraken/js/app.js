new Vue({
    el:'#app',
    data:{
        running: false,
        playerLife:100,
        monsterLife:100,
        logs: []
        
    },
    computed:{
        hasResult(){
            return this.playerLife == 0 || this.monsterLife == 0
        }
    },
    methods:{
        startGame(){
            this.logs = [];
            this.running = true;
            this.playerLife = 100;
            this.monsterLife = 100;
        },
        attack(especial){
            this.hurt('monsterLife', 5, 10, especial, 'Jogador', 'Monstro', 'player');
            if(this.monsterLife > 0)
                this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster');
        },
        hurt(attr,min, max, especial, source, target, clss){
            const plus = especial ? 5 : 0;
            const hurt = this.getRandom(min + plus, max + plus);
            this[attr] = Math.max(this[attr] - hurt, 0);
            this.registerLog(`${source} atigiu ${target} com ${hurt}.`, clss);
        },
        healAndHurt(){
            this.heal(10, 15);
            this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster');
        },
        heal(min, max){
            const heal = this.getRandom(min, max);
            this.playerLife = Math.min(this.playerLife + heal, 100);
            this.registerLog(`Jogador ganhou ${heal} de vida.`, 'player');
        },
        getRandom(min, max){
            const value = Math.random() * (max - min) + min;
            return Math.round(value);
        },
        registerLog(txt, clss){
            this.logs.unshift({txt, clss})

        }
    },
    watch:{
        hasResult(value){
            if(value)
                this.running = false
        }
    }
});