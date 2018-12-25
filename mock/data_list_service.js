let data = [
    {
        key: 1,
        id:1,
        name: `Edward King 1`,
        desc: 32,
        url: `https://umijs.org`,
    },
    {
        key: 2,
        id:2,
        name: `Edward King 2`,
        desc: 32,
        url: `https://umijs.org`,
    },
    {
        key: 3,
        id:3,
        name: `Edward King 3`,
        desc: 32,
        url: `https://umijs.org`,
    }
]

export default {
    'get /dev/random_joke': {
        setup: 'What is the object oriented way to get wealthy ?',
        punchline: 'Inheritance',
    },
    'get /dev/api/cards': function (req, res) {
        setTimeout(() => {
            res.json({
                result: data,
            })
        }, 250)
    },
    'post /api/cards/add': function (req, res) {
        data = [...data, {
            ...req.body,
            id: data[data.length - 1].id + 1,
        }];

        res.json({
            success: true,
        });
    },
    'get /api/cards/:id/data':function (req,res) {
        res.json({
            data:[
                { genre: 'Sports', sold: 275 },
                { genre: 'Strategy', sold: 1150 },
                { genre: 'Action', sold: 120 },
                { genre: 'Shooter', sold: 350 },
                { genre: 'Other', sold: 150 },
            ]
        })
    }
};