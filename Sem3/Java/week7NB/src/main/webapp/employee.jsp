<%@page import="java.sql.PreparedStatement"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1" import= "java.sql.*"%>
    
<%
	Class.forName("com.mysql.jdbc.Driver");
	String dburl = "jdbc:mysql://localhost:3306/wee7nb";
	String uid = "root";
	String password = "root";
	Connection con = DriverManager.getConnection(dburl,uid,password);
	
	String sqlInsert = "INSERT INTO emp VALUES(?,?,?,?)";
	PreparedStatement pst = con.prepareStatement(sqlInsert);
	pst.setString(1, request.getParameter("empno"));
	pst.setString(2, request.getParameter("empname"));
	pst.setString(3, request.getParameter("empjob"));
	pst.setString(4, request.getParameter("empsalary"));
	
	pst.executeUpdate();
%>    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

</body>
</html>