<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<sql:setDataSource var="db" driver="com.mysql.jdbc.Driver" url="jdbc:mysql://localhost:3306/week8nb" user="root" password="root" />

<c:set var="salary" value="2" />

<sql:query dataSource="${db}" var="rs">
Select * from emp where sal = ?;
<sql:param value="${salary}"/>
</sql:query>

<%-- <sql:query dataSource="${db}" var="rs">
Select * from emp;
</sql:query> --%>

<c:forEach var ="row" items="${rs.rows}">
<br>
Empno: ${row.empno }<br>
Name: ${row.ename }<br>
Job: ${row.job }<br>
Salary: ${row.salary }<br>
</c:forEach>

<%-- <sql:update dataSource="${db}" var="count">
	Insert into EMP values ('${param.Empno} ','${param.Ename}','${param.Job}','${param.Salary}');
</sql:update> --%>
<form method="post">
<pre>
Employee no.: <input type="text" name="Empno"><br>
Employee name: <input type="text" name="Ename"><br>
Employee job: <input type="text" name="Job"><br>
Employee salary: <input type="text" name="Salary"><br>
<input type="submit" name="submit">
</pre>
</form>
</body>
</html>