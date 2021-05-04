**<span style="text-decoration:underline;"> Steps for connecting JDBC to our DB</span>**

1. **Load and Register the Driver**
*   `Class.forName("oracle.jdbc.driver.OracleDriver");`

2. **Create a Connection**
*   `Connection conn = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe", "username", "password");`

3. **Create a Statement**
*   `Statement stmt = conn.createStatement();`
*   `PreparedStatement pstmt = conn.prepareStatement(String sql);`
*   `CallableStatement cstmt = conn.prepareCall(String sql);`

4. **Execute Query**
*   `ResultSet rs = stmt.executeQuery("SELECT * FROM employees");`

5. **Extract results**
*   `rs.next(); // then extract data from result set`

6. **Close Connection**
*   `conn.close()`
