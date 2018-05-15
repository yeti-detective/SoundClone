| Date | File | Description |
| ---  | ---  | ---         |
| 5.12.18 | song_show.jsx | Javascript string interpolation in Link to= property threw `Illegal UNDEFINED` error in linter & broke webpack. Changed interpolated string to "string" + data & issue was resolved by Javascript type coercion. |
| 5.13.18 | user_header_bar.jsx | Attempting to render login modal with exact same steps as on landing_page.jsx. State updates when login button clicked, but modal is not rendered. Fixed by making class method that takes a choose argument & returns either LoginModal, SignupModal or null |
| 5.14.18 | upload.jsx | file sends to server, server responds with "no method error" no method 'match' for NilClass. I don't have the word 'match' anywhere in my ruby code. Used Rails console to verify whether saving an image file as an avatar was successful & received 'link failed with invalid cross-device link' |
