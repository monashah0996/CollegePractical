<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Delete Records</title>
</head>
<body>
<form method="post">
	<pre>
		Enter Product No.: <input type="text" name="pid"><br>
		<input type="submit" name="Delete the Product">
	</pre>
</form>

<sql:setDataSource var="db" 
	driver="com.mysql.jdbc.Driver" 
	url="jdbc:mysql://localhost:3306/a3" 
	user="root" 
	password="root" />
	
<sql:update dataSource = "${db}" var = "count">
Delete from PRODUCT where productno = '${param.pid}';
</sql:update>
<br><br>
<jsp:include page="DisplayRecords.jsp" />

</body>
</html>