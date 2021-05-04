# Commonly used Classes & Interfaces

*   DriverManager (C)
*   Connection (I)
*   Statement (I)
*   PreparedStatement (I)
*   CallableStatement (I)
*   ResultSet (I)

---

## DriverManager

*   a class that manages the Driver Object, which represents our DB server
*   gets a Connection Object

Commonly Used Methods

*   `public static Connection getConnection(String url, String user, String password) throws SQLException`

*   attempts to establish a connection to the given database URL
*   attempts to select an appropriate driver from the set of registered JDBC drivers
*   throws SQLException if a DB access error occurs

---

## Connection

*   an interface that represents a connection or a session between our Java application and the DB

Commonly Used Methods

*   `Statement createStatement() throws SQLException`

*   creates a Statement object for sending SQL statements to the DB
*   throws SQLException if a DB access error occurs or if the connection is closed

*   `PreparedStatement prepareStatement(String sql) throws SQLException`

*   creates a PreparedStatement object for sending parameterized SQL statements to the DB
*   throws SQLException if a DB access error occurs or if the connection is closed

*   `CallableStatement prepareCall(String sql) throws SQLException`

*   creates a CallableStatement object for calling DB stored procedures/functions
*   throws SQLException if a DB access error occurs or if the connection is closed

---

## Statement

*   an interface that is used to execute our SQL queries

<span style="text-decoration:underline;">Commonly Used Methods</span>

*   ResultSet executeQuery(String sql) throws SQLException

*   executes the given SQL statement and returns a single ResultSet object

*   throws SQLException if:
    *   a DB access error occurs
    *   the Statement is closed
    *   the given SQL statement produces anything other than a single ResultSet

*   throws SQLTimeoutException if:
    *   the driver has determined that the timeout value (specified by the setQueryTimeout method) has been exceeded and has at least attempted to cancel the currently running Statement

---

**<span style="text-decoration:underline;">PreparedStatement</span>**

*   an interface is also used to execute our SQL queries
*   more efficient and more secure than Statement

<span style="text-decoration:underline;">Commonly Used Methods</span>

*   `ResultSet executeQuery() throws SQLException`

*   executes the given SQL statement and returns a single ResultSet object

*   `int executeUpdate() throws SQLException`

*   executes the SQL statement in the PreparedStatement object, which must be either an SQL DDL statement or either an INSERT, UPDATE, or DELETE statement

*   returns either the count of rows affect by the DML statement or nothing, in the case of DDL statements

---

## CallableStatement

*   an interface used to execute stored procedures or functions

<span style="text-decoration:underline;">Commonly Used Methods</span>

*   `ResultSet executeQuery() throws SQLException`

*   inherited from PreparedStatement

*   executes the given SQL statement and returns a single ResultSet object

*   `int executeUpdate() throws SQLException`

*   inherited from PreparedStatement

*   executes the SQL statement in the CallableStatement object, which must be either an SQL DDL statement or either an INSERT, UPDATE, or DELETE statement

*   returns either the count of rows affected by the DML statement or nothing, in the case of DDL statements

---

## ResultSet

*   an interface that represents the results of an SQL query
*   maintains a cursor pointing to its current row (initially points before the first row)

<span style="text-decoration:underline;">Commonly Used Methods</span>

*   `.next() throws SQLException`
*   moves the cursor forward one row from its current position
*   throws SQLException if:
    *   if a database access error occurs
    *   the ResultSet is closed
