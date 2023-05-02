<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Display Records</title>
</head>
<body>

<sql:setDataSource var="db" 
	driver="com.mysql.jdbc.Driver" 
	url="jdbc:mysql://localhost:3306/a3" 
	user="root" 
	password="root" />

	<sql:query dataSource="${db}" var="rs">
	Select * from PRODUCT;
	</sql:query>
	
	<table border="1">
		<tr>
			<th>Product No</th>
			<th>Product Name</th>
			<th>Product Type</th>
			<th>Manufacturer</th>
			<th>Price</th>
			<th>Weight</th>
		</tr>
		<br><br>
		<c:forEach var ="row" items="${rs.rows}">
			<tr>
				<td>${row.productno}</td>
				<td>${row.productname}</td>
				<td>${row.producttype}</td>
				<td>${row.manufacturer}</td>
				<td>${row.price}</td>
				<td>${row.weight}</td>
			</tr>
		</c:forEach>
	</table>

</body>
</html>