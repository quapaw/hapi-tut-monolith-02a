# Breaking the Monolith by using hapi 
## Background
Let me get the disclaimer out of the way: I am not an expert on Hapi
I started looking into Hapi's ability to break components out.
This is my attempt to follow other tutorials from a hello world to a true component system.
I have broken this down into the following steps

| Project  | Description | Link |
|---|---|---|
|hapi-tut-monolith-01|A simple hello world hapi project| [01](https://github.com/quapaw/hapi-tut-monolith-01)|
|**hapi-tut-monolith-02a**|**Add services - customers and products**|**[02A](https://github.com/quapaw/hapi-tut-monolith-02a)**|
|hapi-tut-monolith-02b|Adding Glue and externalizing config| [02B](https://github.com/quapaw/hapi-tut-monolith-02b)|
|hapi-tut-monolith-02c|Moving services into their own folders|[02C](https://github.com/quapaw/hapi-tut-monolith-02c)|
|hapi-tut-monolith-03-main|Moved service into own project. Instructions here|[03-main](https://github.com/quapaw/hapi-tut-monolith-03-main)|
|hapi-tut-monolith-03-customer|Just the customer service| [03-customers](https://github.com/quapaw/hapi-tut-monolith-03-customers)|
|hapi-tut-monolith-03-products|Just the produce service|[03-products](https://github.com/quapaw/hapi-tut-monolith-03-products)|


##HAPI Tutorial - Monolith - 2A
## Add Services: customers and products
This step adds two services to the simple hello world tutorial. 
I used this [Tutorial](https://medium.com/@dstevensio/manifests-plugins-and-schemas-organizing-your-hapi-application-68cf316730ef#.2nve7u2r0) for the pattern of breaking the monolith.
There are just a few changes to this tutorial that I have made.  I will point those changes out as I go along.

## Add Customer Service
We want a new service that will return information about customers.  The only method we will implement is the get.
I have defined the customer api in the [swagger json file](https://github.com/quapaw/hapi-tut-monolith-02a/blob/master/api-doc/customers.json)
###Create a sample json file with sample output records
Create the file under a new directory called samples
You can look at the [sample json file](https://github.com/quapaw/hapi-tut-monolith-02a/blob/master/samples/customers.json) with records I can return when the get is called.  The point of this tutorial is not doing the actual get.
###Add the sample json file so you can just return it
```javascript
const SampleCustomers = require('./samples/customers');
```
###Add the route and handler to the index.js file
```javascript
server.route({method: 'GET',
              path: '/customers',
              handler: function (request, reply) {
                  reply(SampleCustomers);
              }});
```

## Add Product Service
We want a new service that will return information about products.  The only method we will implement is the get.
I have defined the product api in the [swagger json file](https://github.com/quapaw/hapi-tut-monolith-02a/blob/master/api-doc/products.json)
###Create a sample json file with sample output records
Create the file under a new directory called samples
You can look at the [sample json file](https://github.com/quapaw/hapi-tut-monolith-02a/blob/master/samples/products.json) with records I can return when the get is called.  The point of this tutorial is not doing the actual get.
###Add the sample json file so you can just return it
```javascript
const SampleProducts = require('./samples/products');
```
###Add the route and handler to the index.js file
```javascript
server.route({method: 'GET',
              path: '/products',
              handler: function (request, reply) {
                  reply(SampleProducts);
              }});
```

## Run Server and Test
###Start the server
```
node index.js
```
You should see a message stating your code is running
```
Server running at: http://localhost:3000
```
###Test the services
* Go to the following link [http://localhost:3000/customers](http://localhost:3000/customers)
* Go to the following link [http://localhost:3000/products](http://localhost:3000/products)

