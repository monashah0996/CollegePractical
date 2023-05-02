<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<jsp:useBean id="e" class="week12.EmployeeBean" />
<jsp:setProperty property="name" name="e" value="hello World"/>
Name = <jsp:getProperty property="name" name="e"/>
<br>
<%e.setId(1); %>
Id = <%= e.getId() %>
</body>
</html>