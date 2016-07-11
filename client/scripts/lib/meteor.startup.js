
Meteor.startup(function() {


    Meteor.subscribe('products');

    setTimeout(function () {
        var products = [
            {
                url: 'http://7xl5o6.com1.z0.glb.clouddn.com/1ad5ad6eddc451da55e63bbab4fd5266d016324a.jpg',
                name: 'Verso',
                tagline: 'Allows schools to analyze student progress and measure teacher performance.'
            },
            {
                url: 'http://7xl5o6.com1.z0.glb.clouddn.com/a8014c086e061d959d2987de7ff40ad163d9caed.jpg',
                name: 'Respondly',
                tagline: 'Simple Team Inbox for Email and Twitter'
            },
            {
                url: 'http://7xl5o6.com1.z0.glb.clouddn.com/9825bc315c6034a8fb4f7885c913495409237601.jpg',
                name: 'Workpop',
                tagline: 'Job marketplace that modernizes the process of hiring for hourly workers.'
            },
            {
                url: 'http://7xl5o6.com1.z0.glb.clouddn.com/7acb0a46f21fbe091554331869600c338744adb0.jpg',
                name: 'Classcraft',
                tagline: 'Educational role-playing game that teachers and students play together in the classroom.'
            },
            {
                url: 'http://7xl5o6.com1.z0.glb.clouddn.com/6d81800a19d8bc3e6574e4ce808ba61ea8d345b2.jpg',
                name: 'Blonk',
                tagline: 'Tinder for job hunting.'
            }
        ];

        if (Products.find({}).count() === 0 ) {
            _(products).each(function (product) {
                Products.insert({
                    url: product.url,
                    name: product.name,
                    tagline: product.tagline,
                    createdAt: new Date()
                });
            });
        }
    },2000);

});
