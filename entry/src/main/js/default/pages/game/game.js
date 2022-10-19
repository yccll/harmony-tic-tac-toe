import router from '@system.router';
export default {
    data: {
        squareValues: [], // 每个方框里的值
        flag: true, // 判断O还是X
        winner: null, // 赢家
        hasResult: false, // 是否显示重新开始
    },

    // 首次创建页面执行onInit()生命周期函数
    onInit() {
        this.winner = null;
        this.hasResult = false;
        this.flag = true;
        this.squareValues = ['','','', '', '', '', '', '', ''];
    },

    // 重置函数
    clickReset () {
        //  一些初始化设置
        this.winner = null;
        this.flag = true;
        this.squareValues = ['','','', '', '', '', '', '', ''];
        this.hasResult = false;
        this.fullNumber = 0;
    },

    // 返回函数
    clickBack () {
        //  点击返回
        router.replace({
            uri: 'pages/index/index'
        })
    },

    // 点击方块函数
    clickSquare (value) {
        /*
         * 点击某个方块
         * 先要判断是否有赢者出现,如果有赢者出现就return不再执行下面的代码,
         * 再判断当前点击方块是否已经存在值,如果有值则return,不能改变原来点击过的方块内的值
         *
         * 形参:value 是索引
         * */
        if (this.calculateWinner(this.squareValues) || this.squareValues[value]) {
            return;
        }
        let squares = this.squareValues; // 拷贝一份squareValues
        squares[value] = this.flag ? 'O' : 'X'; //  根据当前flag的值 给当前索引位置赋值
        this.flag = !this.flag; // 取反flag(第二次点击就是X    3-O ....)
        this.winner = this.calculateWinner(squares);
        // 如果计算出获胜者
        if (this.winner) {
            setTimeout(() => {
                this.hasResult = true; // 显示结果
            }, 500)
        }
    },

    //  计算获胜者函数
    calculateWinner (squares) {
        /*
         * 形参squars是棋盘数组
         *
         * 计算井字棋获胜者,
         * 首先要弄懂获胜条件,那就是三个相同符号连在一起 不管 横|竖|斜
         * 我们把棋盘里的数据封装成一个数组 (如上squareValues)
         * 如果把棋盘看作数组肯定就有索引
         * 这样来看:
         * 0   1   2
         * 3   4   5
         * 6   7   8
         * squareValues[0] 就对应棋盘左上角的值
         * squareValues[4] 就对应棋盘正中间的值
         *
         * 弄懂了思路,接着推算出所有的获胜路线,还是封装成一个数组如下 lines
         * */

        // 所有获胜路线
        let lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        // 循环遍历获胜路线
        for (let i = 0; i < lines.length; i++) {
            let array = lines[i];
            let a = array[0];
            let b = array[1];
            let c = array[2];
            /*
             * 第一次循环a:0 b:1 c:2
             * 解析下面这个if
             * squares[a] == squares[0] == 棋盘左上角方块的值
             * squares[b] == squares[1] == 棋盘第一行中间方块的值
             * squares[c] == squares[2] == 棋盘右上角方块的值
             * 要满足三个条件才是获胜者
             * 条件1.squares[a] 有值 --- squares[0] 有值
             * 条件2.squares[a] == squares[b] --- squares[0] == squares[1]
             * 条件3.squares[a] == squares[c] --- squares[0] == squares[2]
             * 因为满足条件2 才会判断 条件3,条件2中已经 squares[a] == squares[b] 了 而条件3(squares[a] == squares[c])
             * 所以squares[a] == squares[b] == squares[c],这时获胜者就出来了,return squares[(a|b|c都可以)]
             *
             * 第二次,第三次....循环以此类推
             * */
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }

        /*
         * 要考虑到还有死棋的情况
         * 这时没有获胜者且该函数还没有return,所以在此处添加一些判断逻辑
         * 思路:
         * 首先定义一个变量num 初始值 0
         * 然后遍历sqares如果 当前元素item有值则让num++
         * 遍历完毕,
         *
         * 紧接着判断num的值 如果等于最大值9,则说明已经死棋,进行其他操作.
         * */

        let num = 0
        for (let j = 0; j < squares.length; j++) {
            const item = squares[j];
            if(item){
                num++;
            }
        }

        if(num === 9){
            return '无'
        }

        // 如果前面计算出获胜者早就return了,这里return null是前面没有计算出获胜者
        return null;
    },

}
