import react,{Component} from 'react'

class Header extends Component{
    render() {
        return (
            <div>
                <Header style={{background:'#000'}}>
                        <span style={{color:'#fff',paddingLeft:'2%', fontSize:'1.4em'}}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                                style={{cursor: 'pointer'}}
                            />
                        </span>
                    <span style={{color:'#fff', paddingLeft:'2%', fontSize:'1.4em'}}>{this.}</span>
                    <span className="originalSearch">
                            <Search
                                placeholder="input search movie"
                                onSearch={value => console.log(value)}
                                style={{ width: 350 }}
                            />
                        </span>
                </Header>
            </div>
        );
    }
}