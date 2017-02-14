# Breaking the Monolith by using hapi 
## Background
Let me get the disclaimer out of the way: I am not an expert on Hapi
I started looking into Hapi's ability to break components out.
This is my attempt to follow other tutorial from a hello world to a true component system.
I have broken this down into the following steps

| Project  | Description | Link |
|---|---|---|
|hapi-tut-monolith-01|A simple hello world hapi project| [https://github.com/quapaw/hapi-tut-monolith-01](github)|
|hapi-tut-monolith-02a|Add services - customers and products| [https://github.com/quapaw/hapi-tut-monolith-02a](github)|
|hapi-tut-monolith-02b|Moved service to their own folders| [https://github.com/quapaw/hapi-tut-monolith-02b](github)|
|hapi-tut-monolith-02c|Used Glue to configure services| [https://github.com/quapaw/hapi-tut-monolith-02c](github)|
|hapi-tut-monolith-03-main|Moved service into own project.  This pulls the services in| [https://github.com/quapaw/hapi-tut-monolith-03-master](github)|
|hapi-tut-monolith-03-customer|Just the customer service| [https://github.com/quapaw/hapi-tut-monolith-03-customers](github)|
|hapi-tut-monolith-03-products|Just the produce service| [https://github.com/quapaw/hapi-tut-monolith-03-products](github)|

## Add Services: customers and products
This is a simple hello world tutorial. 
I used this [Tutorial](https://medium.com/@dstevensio/manifests-plugins-and-schemas-organizing-your-hapi-application-68cf316730ef#.2nve7u2r0) for the pattern of breaking the monolith.
There are just a few changes to this tutorial that I have made.  I will point those changes out as I go along.

## Add Customer Service
We want a new service that will return information about customers.  The only method we will implement is the get.


Items I added
* npm [shrinkwrap](https://docs.npmjs.com/cli/shrinkwrap)
~ A major problem with some of the tutorials I found is that the examples are outdated.<br/>
~ Shrinkwrap will capture all the versions of all components. <br/>
~ So hopefully you will be able to pull this code years from now and it will compile and work. :) <br/>
