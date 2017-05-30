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
|hapi-tut-monolith-04a-customer|Movement of some files| [04a-customers](https://github.com/quapaw/hapi-tut-monolith-04a-customers)|
|hapi-tut-monolith-04b-customer|New methods| [04b-customers](https://github.com/quapaw/hapi-tut-monolith-04b-customers)|
|hapi-tut-monolith-04c-customer|Validation and Error Handling|[04c-customers](https://github.com/quapaw/hapi-tut-monolith-04c-customers)|
|hapi-tut-monolith-04d-customer|Unit Testing|[04d-customers](https://github.com/quapaw/hapi-tut-monolith-04d-customers)|
|hapi-tut-monolith-04e-customer|Add Mongo and API Doc|[04e-customers](https://github.com/quapaw/hapi-tut-monolith-04e-customers)|
|hapi-tut-monolith-05-customer|Combine work with products for full deployment|[05-customers](https://github.com/quapaw/hapi-tut-monolith-05-customers)|
|hapi-tut-monolith-05-product|Combine work with products for full deployment|[05-products](https://github.com/quapaw/hapi-tut-monolith-05-product)|
|hapi-tut-monolith-05-main|Combine work with products for full deployment|[05-main](https://github.com/quapaw/hapi-tut-monolith-05-main)|
|hapi-tut-monolith-06-customer|Move from npm to yarn|[06-customers](https://github.com/quapaw/hapi-tut-monolith-06-customers)|
|hapi-tut-monolith-07-customer|Customer project to go with 07-main|[07-customers](https://github.com/quapaw/hapi-tut-monolith-07-customers)|
|hapi-tut-monolith-07-product|Product project to go with 07-main|[07-products](https://github.com/quapaw/hapi-tut-monolith-07-products)|
|hapi-tut-monolith-07a-main|Catch up with 06 changes|[07a-main](https://github.com/quapaw/hapi-tut-monolith-07a-main)|
|hapi-tut-monolith-07b-main|Change in configuration|[07a-main](https://github.com/quapaw/hapi-tut-monolith-07a-main)|


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

