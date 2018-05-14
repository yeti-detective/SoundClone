| Date | File | Description |
| ---  | ---  | ---         |
| 5.12.18 | song_show.jsx | Javascript string interpolation in Link to= property threw `Illegal UNDEFINED` error in linter & broke webpack. Changed interpolated string to "string" + data & issue was resolved by Javascript type coercion. |
| 5.13.18 | user_header_bar.jsx | Attempting to render login modal with exact same steps as on landing_page.jsx. State updates when login button clicked, but modal is not rendered. Fixed by making class method that takes a choose argument & returns either LoginModal, SignupModal or null |
