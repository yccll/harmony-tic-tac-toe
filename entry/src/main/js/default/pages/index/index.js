import router from '@system.router';

export default {
    data: {
        title: '井字棋'
    },
    clickStart () {
//        console.log('click start button')
        router.replace({
            uri: 'pages/game/game'
        })
    }
}
