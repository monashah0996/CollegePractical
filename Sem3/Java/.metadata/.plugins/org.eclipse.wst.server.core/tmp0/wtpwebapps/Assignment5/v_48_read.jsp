<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@page import="Assignment5.m_48"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>View</title>
</head>
<body>
	<table border="1">
		<tr>
			<th>Friend Id</th>
			<th>Friend Name</th>
			<th>Email</th>
			<th>Age</th>
			<th>Favorite Color</th>
			<th>Action</th>
		</tr>
		<br>
		<br>

		<%-- Fetching the attributes of the request object 
             which was previously set by the servlet  
              "c_48.java" --%>

		<% ArrayList<m_48> friends = (ArrayList)request.getAttribute("data");
		for (m_48 f : friends) {
		%>

		<%-- Arranging data in tabular form --%>

		<tr>
			<td><%=f.getId()%></td>
			<td><%=f.getFriendName()%></td>
			<td><%=f.getEmail()%></td>
			<td><%=f.getAge()%></td>
			<td><%=f.getColor()%></td>
			<td><a href="delete?fid=<%=f.getId()%>">Delete</a></td>
		</tr>
		<%
		}
		%>
	</table>
	<br><br>
	<a href="v_48_add.jsp">Add A New Friend</a>
</body>
</html>