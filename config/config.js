



export default {
    singular: true,
    plugins: [
        ['umi-plugin-react', {
            antd: true,// 这里暂时还没有添加配置，该插件还不会有作用，我们会在后面的课程按照需求打开相应的配置
            dva: true
        }],
    ],
    routes:[{
            path:'/',
            component:"../layout",
            routes: [
                {
                    path:"/",
                    component: "./Movie_List",
                },
                {
                    path: "/in_theaters",
                    component: "./Movie_List"
                },
                {
                    path:"/coming_soon",
                    component:"./Movie_List"
                },
                {path:'/list',component:'./list/list'}
            ],

        }
    ],
    /*代理*/
    proxy: {
        '/v2/movie/': {
          target: 'https://api.douban.com',
              changeOrigin: true,
        },
        '/dev/api/cards':{
            target: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com',
            changeOrigin: true,
        }
  }

}