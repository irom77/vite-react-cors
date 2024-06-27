# How to allow only local requests to express.js backend ?

CORS is not doing the job, not sure why..

```
npm run dev

node index.js
```

To allow only local requests to an Express.js backend, you can create middleware that checks the request's origin IP address. If the IP address is not local, the middleware can reject the request. 

