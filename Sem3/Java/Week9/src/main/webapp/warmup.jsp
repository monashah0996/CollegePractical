<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1" errorPage="myerror.jsp"%>
 <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<% 
	pageContext.setAttribute("y","23");
	
	//int i = 3/0;
	%>
	
	<c:set var="i" value="2" scope="request"/>
	<form>
		<pre>
			age: <input type="text" name="age">
			<input type="submit" value="Calculate"> 
		</pre>
		<c:if test="${param.age > 0 && param.age <=100}">
			The age after 10 years is ${param.age + 10}
		</c:if>
	</form>
	
	<br>my Y Attribute value = <%= pageContext.getAttribute("y") %>
	<br>my I Attribute value = <%= request.getAttribute("i") %>
</body>
</html>