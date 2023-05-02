<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1" import = "java.sql.*"%>
<%! int i=3; %>
<%! int fontsize; %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<h3>Welcome to JSP = <%= new java.util.Date() %></h3>
<jsp:expression>Math.sqrt(9)</jsp:expression>
<%
	for (int i=0; i<3; i++){
%>
	<h1>Hello World</h1>
<% 
	}
%>

<% 
	out.println("Hello with out");
	out.println("");
%>
<% if(i==3) %> <h1>i is 3</h1>

<% for(fontsize = 1; fontsize <=3; fontsize++) {%>
	<font color="green" size=<%= fontsize %>>
		JSP tutorial<br>
	</font>
	
<% } %>

<%--This is Comment --%>

</body>
</html>