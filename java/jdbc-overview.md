**<span style="text-decoration:underline;">What is the JDBC API?</span>**

 

JDBC API = **J**ava **D**ata**B**ase **C**onnectivity **A**pplication **P**rogramming **I**nterface

 

The JDBC API allows us, as Java developers, to create and send request statements in SQL that are then passed to the DBMS that is managing our DB. This API also allows for us to receive responses (in the form of result sets) back from the database, so that we can then parse through them and apply some business logic on the data retrieved.

 

Things to note



*   JDBC API = Java Database Connectivity API
*   it is independent of any particular DB
*   allows our Java application to interact with an RDBMS
    *   through provided Interfaces and Classes

**<span style="text-decoration:underline;">Why do we need a database driver?</span>**

 



*   We cannot talk directly to the DB server
*   The driver converts JDBC calls into DB-specific calls (since SQL syntax is vendor specific)
*   A different driver is need for every different DB
    *   Oracle DB needs an Oracle driver
    *   MySQL DB needs a MySQL driver
    *   and so on…

 

**<span style="text-decoration:underline;">Types of JDBC Drivers</span>**

 



*   Type-1: JDBC-ODBC Bridge Driver
*   Type-2: Native API Driver
*   Type-3: Network Protocol Driver
*   Type-4: Thin Driver

 

**<span style="text-decoration:underline;">JDBC-ODBC Bridge Driver</span>**



<p id="gdcalert1" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image1.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert2">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image1.png "image_tooltip")




*   Converts JDBC calls to ODBC calls
*   ODBC driver converts JDBC calls into vendor-specific SQL calls
*   Slowest of all the drivers (most layers of communication)

 

**<span style="text-decoration:underline;">Native API Driver</span>**



<p id="gdcalert2" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image2.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert3">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image2.png "image_tooltip")




*   Converts JDBC calls to native calls of the DB API

 

**<span style="text-decoration:underline;">Network Protocol Driver</span>**



<p id="gdcalert3" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image3.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert4">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image3.png "image_tooltip")




*   Uses middleware between the calling program and the DB
*   Middleware converts JDBC calls to vendor-specific SQL calls

 

**<span style="text-decoration:underline;">Thin Driver</span>**



<p id="gdcalert4" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image4.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert5">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image4.png "image_tooltip")




*   Converts JDBC calls directly to vendor-specific SQL calls
*   Fastest of all the drivers (fewest layers of communication)
