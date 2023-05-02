<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Home</title>
</head>
<body>
<h1>My Friends Database</h1><br>
<form action="<%=request.getContextPath() %>/read" method="get">
	<a href="v_48_read.jsp">View All Friends</a>
</form>
</body>
</html>