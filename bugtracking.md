| Date | File | Description |
| ---  | ---  | ---         |
| 5.12.18 | song_show.jsx | Javascript string interpolation in Link to= property threw `Illegal UNDEFINED` error in linter & broke webpack. Changed interpolated string to "string" + data & issue was resolved by Javascript type coercion. |
| 5.13.18 | user_header_bar.jsx | Attempting to render login modal with exact same steps as on landing_page.jsx. State updates when login button clicked, but modal is not rendered. Fixed by making class method that takes a choose argument & returns either LoginModal, SignupModal or null |
| 5.14.18 | upload.jsx | file sends to server, server responds with "no method error" no method 'match' for NilClass. I don't have the word 'match' anywhere in my ruby code. Used Rails console to verify whether saving an image file as an avatar was successful & received 'link failed with invalid cross-device link.' |
| 5.15.18 | upload.jsx | above issue was caused by missing application.yml file in production. Now resolved. |
| 5.15.18 | player_footer_bar.jsx | audio uploaded to aws s3 will not play due to Cross Origin Scripting. Images from same s3 bucket are visible. |
| 5.15.18 | player_footer_bar.jsx | above issue caused by npm package 'react-audio-player'. Was not able to determine how to correctly set the crossOrigin prop. Replaced component with HTML5 audio component. |
| 5.17.18 | ?? | an ajax call is being fired to /api/users/undefined resulting in a 404 error in the Javascript console |
| 5.17.18 | ?? | after cleaning up reducers, the above bug is now only occurring when loading the user show page. |
| 5.17.18 | player_footer_bar.jsx | when final song in queue finishes playing, it is added back to the queue and plays again, appending itself to the playedQueue many times unless it is manually paused. |
| 5.17.18 | player_footer_bar.jsx | above issue is intrinsic to my code. A refactor is required to resolve it |
| 5.17.18 | song/show.json.jbuilder | songs are entering state with doubled-up comment arrays (e.g. [5, 8, 5, 8]) |
| 5.17.18 | song/show.json.jbuilder | refreshed page and above issue did not persist (???) |
| 5.29.18 | song_show | need page to fire getComments action (does not yet exist) |
| 5.29.18 | player_footer_bar.jsx | Back method throws a CORS error. Skip method is almost identical code & does not throw error. File does not affect error. Skip can play songs that Back cannot. |
