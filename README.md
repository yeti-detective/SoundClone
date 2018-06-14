# [SoundClone](http://chris-b-soundclone.herokuapp.com/) by [Chris B](http://www.motomorphosis-ind.com/)
***
## SoundClone is my attempt to mimic the functionality of the popular social song-sharing website [SoundCloud](https;//soundcloud.com)

## SoundClone currently supports:
* Music Streaming: add as many songs as you like to your play queue & listen away. It's FREE!
* Account creation: click Create Account or Start Cloning on the landing page to make your own profile and join the SoundClone community.
* Comments: Somebody upload a song you like? Let 'em know!
* File uploads: Are you a producer? Great! You can use SoundClone to publish your songs (and cover art) and let the world discover your sound.
***
## Features Coming Soon:
* Likes: think Twitter, not Facebook
* Follows: Stalk your favorite artists online!
* Playlists and Albums: Did you set up a killer play queue today? Save it for later!
***
### More about us
Us is really just me, Chris. If you'd like to join my team, I'd be really surprised. I have no money and can't pay you.
### Contributing to this project
Don't actually contribute to this project. That would technically be doing my homework for me. I'm not into it. If you have suggestions, criticism, or hatemail, you can direct them [here](mailto:christopher.brown@motomorphosis-ind.com).
***
## Code Snippets
### I am pretty proud of my frontend search feature
```javascript
buildSearchPool () {
  if (this.state.query === '') {
    this.setState({
      searchPool: []
    })
  } else {
    const pool = [];
    Object.keys(this.props.songs).filter((songId) => {
      const song = this.props.songs[songId];
      if (song.title.toUpperCase().includes(this.state.query.toUpperCase())) {
        pool.push({
          name: song.title,
          img_url: song.image_url,
          url: `/users/${song.user_id}/${song.id}`,
          type: 'song'
        })
      };
    })
    Object.keys(this.props.users).forEach((userId) => {
      const user = this.props.users[userId];
      if (user.username.toUpperCase().includes(this.state.query.toUpperCase())) {
        pool.push({
          name: user.username,
          img_url: user.icon_url,
          url: `/users/${user.id}`,
          type: 'user'
        });
      }
    })
    this.setState({
      searchPool: pool
    })
  }
}
```
![screen capture of front end search](./fe_search.png)
***

useful links,
* [paperclip gem](https://github.com/appacademy/curriculum/tree/master/full-stack-project/resources/cdns/file_upload_demo)
* [React Icons](https://gorangajic.github.io/react-icons/fa.html)
* [pg_search](https://medium.com/@leighsn/simple-pg-search-example-postgresql-for-your-heroku-rails-app-f218127663bb)


bugtracking -> [here](./bugtracking.md)
