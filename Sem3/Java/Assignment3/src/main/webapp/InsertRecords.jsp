<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert Records</title>
</head>
<body>

	<sql:setDataSource var="db" 
	driver="com.mysql.jdbc.Driver" 
	url="jdbc:mysql://localhost:3306/a3" 
	user="root" 
	password="root" />
	
	<sql:update dataSource="${db}" var="count">
	Insert into PRODUCT values ('${param.pno}','${param.pname}','${param.ptype}','${param.manufacturer}',${param.price},${param.weight});
	</sql:update>
	
	<jsp:include page="AddProductForm.jsp" />
	
	<jsp:include page="DisplayRecords.jsp" />
	
</body>
</html>