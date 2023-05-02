<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<form>
	<prev>
		Id: <input type="text" name="id">
		Name: <input type="text" name="name">
		<input type="submit" name="Submit">
	</prev>
</form>
<% if("get".equalsIgnoreCase(request.getMethod())) {%>
<jsp:useBean id="e" class="week12.EmployeeBean"/>
<jsp:setProperty property="*" name="e"/>
JSP ID = <jsp:getProperty property="id" name="e"/><br>
Id = <%= e.getId() %> <br>
Name = <%= e.getName() %> 
<%} %>
</body>
</html>