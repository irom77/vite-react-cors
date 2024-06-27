# How to allow only local requests to express.js backend ?
##### with help of ChatGPT/Cloude

CORS is not doing the job, not sure why..

```
npm run dev

node index.js
```

To allow only local requests to an Express.js backend, you can create middleware that checks the request's origin IP address. If the IP address is not local, the middleware can reject the request. 

## Test

```

$ curl http://1.2.3.4:8080/api/hello

Access denied

$ curl http://localhost:8080/api/hello

{"message":"Hello from the backend!"}

```

