RIXI: Receipt Logging and Management
======
COLOR THEME: http://paletton.com/#uid=62R0t0k29Ke3Apy46st0ZH20DFO

## TODO:
1. Create camera user story for OCR: allow user to save receipts to AWS
1. ~~404 from reddit api, modify reducers and actions to take in OCR~~
2. Create a boilerplate with existing code for router+redux
3. PropType validation for all screens
4. ~~Start implementing OCR API through the URL use case~~
5. Take unused Screens out
50. Add a backend (MongoDB or AWS)
100. Implement separate user story for logged in users/instead of showing the Splash Page.
100. Add license and author

### TODO #1
1. captureTarget to specify captured image data output, change it to disk for optimized performanace
2. Allow user to save receipts to AWS bucket
3. Checkbox, 'Save to Camera Roll'. If true, saves to Camera Roll. Otherwise just send img data to OCR. 
