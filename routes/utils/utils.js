const utils = {
    // 设定msg字段为错误提醒字段
    // numberArr 是类型转换数组，需要在mustArr或notMustArr数组中先申明
    checkParams(options ={}) {
        let params = {};
        const {
            data = {},
            mustArr = [],
            notMustArr = [],
            numberArr = [],
        } = options;
        mustArr.forEach((item,index) => {
            if(!data[item]){
                params['msg'] = `参数错误:${item}`
            }else{
                params[item] = data[item]
            }
        });
        notMustArr.forEach((item,index) =>{
            if(data[item]){
                params[item] = data[item];
            }
        })
        numberArr.forEach((item,index) => {
            if(params[item]){
                params[item] = Number(params[item])
            }
        })
        return params;
    }
}

module.exports = utils;