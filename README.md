# schema:
##  User:
    id:
    username:
    location:
    icon_url:
    * has many: songs, likes, comments, followers, followees, posts, reposts, tracks (same as posts?), albums, playlists

##  Songs/posts:
    song_id:
    uploader_id:
    * has many: likes, comments

## Comments:
    comment_id:
    user_id:
    song_id:
    body:

##  Subscriptions:
    songs: :users
    users: :songs

## Albums: (join table)
    album_id:
    song_id:
    user_id: (creator)
    * has many: likes

## Playlists: (join table)
    album_id:
    song_id:


# routes:
## BE
  GET  /api/users/:username
  GET  /api/users/:username/sets

  GET  /api/posts/:post_id/comments
  POST /api/posts/:post_id/comments

  GET  /api/songs/:user_id
  POST  /api/songs/:user_id
  DELETE  /api/songs/:user_id


## FE
  /
  /login
  /stream
  /you/likes
  /you/playlists
  /you/albums
  /you/stations
  /you/following
  /you/history
  /you/collection (recently played, likes, etc)
  /:current_user[:username]
  /:username/:song_title
