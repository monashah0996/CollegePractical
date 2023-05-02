<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Add</title>
</head>
<body>
<form action="<%=request.getContextPath() %>/add" method="post">
	<prev>
		<h1>Add A New Friend</h1><br>
		Friend Name: <input type="text" name="name"><br>
		Email Address: <input type="text" name="email"><br>
		Age: <input type="text" name="age"><br>
		Favourite Color: <input type="text" name="color"><br>
		<input type="submit" name="Submit">
	</prev>
</form>
</body>
</html>