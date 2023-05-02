<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<form method="post">
<pre>
<p>First name: <input type="text" name="firstName"></p>
<p>Email address 1: <input type="text" name="email"></p>
<p>Email address 2: <input type="text" name="email"></p>
<p><input type="submit" name="submit"></p>
</pre>
</form>

<pre>
	First name: ${param.firstName} <br>
	Email address 1: ${paramValues.email[0]}<br>
	Email address 2: ${paramValues.email[1]}
</pre>

<p> Here is the output</p>
<c:out value='${param.firstName}'/><br>
<c:out value='${paramValues.email[0]}'/><br>
<c:out value='${paramValues.email[1]}'/>

</body>
</html>