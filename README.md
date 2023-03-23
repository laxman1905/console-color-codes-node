# user color in console logs for more clarify of error, worning and success
# floxypaymentgateway 

### To use this package follow this instruction
-  npm install express **if not installed**
-  npm install floxypaymentgateways
-  npm install dotenv **if not installed**
-  make a file .env in root directory and place the credential with following
```
    1. FLOXIPAY_API_KEY="your key"
    2. FLOXIPAY_API_SECRET="your secret"
```  
- To generate **FLOXIPAY_API_KEY** & **FLOXIPAY_API_SECRE**, You need to registered with FloxyPayGateways.
- To registered with FloxyPayGateways [link]([https://pages.github.com/](https://merchant.floxypay.com/register)
- npm install axios **if not installed**
- now your are ready to use floxypaymentgateways
### Example 1  ** Generate Order**
```javascript code
require('dotenv').config();
const { floxyPay } = require("floxypaymentgateways")

// generateOrder() take 5 parameter 
// 1> amount that yoout want to pay mandatory
// 2> any order id you want to give mandatory
//3> constommerName Optional
//4> constomerMobile Number Optional
//5> constomer email Id optional
example
   console.log(floxyPay.generateOrder(200, "string", "constomer name", 9898989898,"example@gmail.com"))
// Now your Order is generated for payment
```
### Example 2 ** Check Status**
```javascript code
// When Order is genereted then FloxyPay provides an order id for chack the status of payments
   console.log(floxyPay.orderStatus("floxyPay order id"))
// {"systemid":"INh86av10naklfdsfpsdadFng","amount":"2.00","status":"PENDING","currency":"INR"}
```
