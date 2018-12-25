import React, { Component } from 'react';
import {connect} from 'dva'
import MovieItem from '../component/MovieItem'
import style from '../component/style.less'
const namespace = 'movies';

const mapStateToProps = (state) => {
    const List = state[namespace].movies;
    const load = state[namespace].load;
    return {
        movieList:List,
        load:load
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        initData: ({load,url}) => {
            const action = {
                type: `${namespace}/init`,
                load:!load,
                url:url
            };
            dispatch(action);
        },
        isload:()=>{
            const action = {
                type:`${namespace}/load`
            }
            dispatch(action);
        }
    };
};

@connect(mapStateToProps, mapDispatchToProps)
class Movie_List extends Component{
    constructor(props){
        super(props);
        this.state = {
            load:false,
        }
    }
    componentDidMount(){
        /*console.log(this.props.route.path)*/
        this.props.isload();
        this.props.initData({
            load:this.state.load,
            url:"/v2/movie"+this.props.route.path
        });

    }
    render(){
        let html =null;
        if(this.props.load) {
            html = this.props.movieList.map(function (movie,index) {
                return <MovieItem movie={movie} key={index}/>
            })
        }else {
            html =(
                <div className={style["spinner"]}>
                    <div className={style["rect1"]}></div>
                    <div className={style["rect1"]}></div>
                    <div className={style["rect1"]}></div>
                    <div className={style["rect1"]}></div>
                    <div className={style["rect1"]}></div>
                </div>
            )
        }
        return (
            <div>
                {
                   html
                }
            </div>
        )
    }
}
Movie_List.defaultProps={
    url:'in_theaters'
}

export default  Movie_List;