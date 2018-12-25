function ajax(url) {

  return fetch(url,{
        method:"get",
    }).then((response) => {
    return response.json()
    })

}

export default {
    namespace: 'movies',
    state: {
        load:false,
        count: 0,
        start: 0,
        total: 0,
        movies: []/*[
            {
                "rating": {
                    "max": 10,
                    "average": 9.6,
                    "stars": "50",
                    "min": 0
                },
                "genres": [
                    "犯罪",
                    "剧情"
                ],
                "title": "肖申克的救赎",
                "casts": [
                    {
                        "alt": "https://movie.douban.com/celebrity/1054521/",
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p17525.jpg",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p17525.jpg",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p17525.jpg"
                        },
                        "name": "蒂姆·罗宾斯",
                        "id": "1054521"
                    },
                    {
                        "alt": "https://movie.douban.com/celebrity/1054534/",
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p34642.jpg",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p34642.jpg",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p34642.jpg"
                        },
                        "name": "摩根·弗里曼",
                        "id": "1054534"
                    },
                    {
                        "alt": "https://movie.douban.com/celebrity/1041179/",
                        "avatars": {
                            "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5837.jpg",
                            "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5837.jpg",
                            "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p5837.jpg"
                        },
                        "name": "鲍勃·冈顿",
                        "id": "1041179"
                    }
                ],
                "collect_count": 1525505,
                "original_title": "The Shawshank Redemption",
                "subtype": "movie",
                "directors": [
                    {
                        "alt": "https://movie.douban.com/celebrity/1047973/",
                        "avatars": {
                            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p230.jpg",
                            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p230.jpg",
                            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p230.jpg"
                        },
                        "name": "弗兰克·德拉邦特",
                        "id": "1047973"
                    }
                ],
                "year": "1994",
                "images": {
                    "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.jpg",
                    "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.jpg",
                    "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.jpg"
                },
                "alt": "https://movie.douban.com/subject/1292052/",
                "id": "1292052"
            }
        ]*/
    },
    effects: {
        *init({load,url}, {put, call}) {
            const endPointURI = '/v2/movie/'+url;
            const puzzle = yield call(ajax, url);
            console.log(puzzle)
            yield put({type: 'updata', payload: puzzle,load: load});
        }

    },
    reducers: {
        updata(state, {payload: puzzle,load: load}) {
            return {
                movies: puzzle.subjects,
                total: puzzle.total,
                start: puzzle.start,
                count: puzzle.count,
                load:true
            }
        },
        isload(state){
            return {
                ...state,
                load:false
            }
        }
    }
}