const hotels = require('../infra/hotels')

exports.reduceToMinValue = (schedules, isRewardClient) => {
    let acc = 0;
    let pos = 0;
    for(let i in hotels){
        for(const schedule in schedules) {
            if(schedules[schedule]){
                if(isRewardClient)
                    acc += hotels[i].reward.weekday
            }
        }
        pos = i;
    }
    return {
        name: hotels[pos].name,
        price: acc
    }

}