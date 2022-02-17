var ghpages = require('gh-pages');

ghpages.publish(
    'public',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/christopherldo/svelte-crashcourse.git',
        user: {
            name: 'christopherldo',
            email: 'christopherldo@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)