import * as cardsService from '../service/cardes';

function ajax(url) {

    return fetch(url,{
        method:"get",
    }).then((response) => {
        return response.json()
    })

}



export default {
    namespace: 'data_list',
    state: {
        data:[],
        chartData:{
            data:[]
        }
    },
    effects: {
        *init(_, {put, call}) {
            const endPointURI = '';
           /* const puzzle = yield call(ajax, endPointURI);*/
            const puzzle = yield call(ajax,'/dev/api/cards');
            yield put({type: 'loadData', payload: puzzle.result});
        },
        *addOne({ payload }, { call, put }) {
            const rsp = yield call(cardsService.addOne, payload);
            yield put({ type: 'init'});
            return rsp;
        },
        *getChartData({payload},{put,call}){
            const puzzle = yield call(ajax,`/api/cards/${payload}/data`);
            yield put({type: 'saveChartData',payload: puzzle.data});
            return puzzle;

        }

    },
    reducers: {
        loadData:(state, {payload}) =>{
            /*const  data=[{
                key: 1,
                name: `Edward King 1`,
                desc: 32,
                url: `https://umijs.org`,
            },
                {
                    key: 2,
                    name: `Edward King 2`,
                    desc: 32,
                    url: `https://umijs.org`,
                },
                {
                    key: 3,
                    name: `Edward King 3`,
                    desc: 32,
                    url: `https://umijs.org`,
                }]*/
            return {
                ...state,
                data:payload,
            }
        },
        saveChartData:(state,{payload}) =>{
            return {
                ...state,
                chartData:{
                    ...state.chartData,
                    data:payload
                }
            }
        }
    }
}