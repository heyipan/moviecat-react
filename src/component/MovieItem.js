import React, {Component} from 'react'
import style from './style.less'

class MovieItem extends Component {
    render() {
        const items = this.props.movie;
        let lastdirector = items.directors.length-1;
        let lastgenres = items.genres.length-1;
        return (
            <div>
                <h1 className={style.pageHeader}></h1>
                <div className ={style.listGroup} >
                    <a href= "" className={style["list-group-item"]} ><span className={style.badge}>{items.rating.average}</span>
                        <div className = {style.media} >
                            <div className ={style["media-left"]} >
                                <img className ={style["media-object"]}  src={items.images.medium} alt = {items.title}/>
                            </div>
                            <div className={style["media-body"]}>
                                <h3 className={style["media-heading"]}>{items.title}</h3>
                                <div>
                                    <p className={style.text}>导演： {
                                        items.directors.map(function (director,index) {
                                            let html = index == lastdirector?(<span key={index}>{director.name}</span>):(<span key={index}>{director.name}、</span>);
                                            return html ;
                                        })}

                                    </p>
                                </div>
                                <div>
                                    <p>类型：{
                                        items.genres.map(function (genre,index) {
                                            let html = index == lastgenres?(<span key={index}>{genre}</span>):(<span key={index}>{genre}、</span>);
                                            return html ;
                                        })}</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
    )
    }
}

export  default MovieItem