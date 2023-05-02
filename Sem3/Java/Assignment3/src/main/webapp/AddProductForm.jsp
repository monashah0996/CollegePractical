<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Add Product Form</title>
</head>
<body>
	<form method="post" action="InsertRecords.jsp">
		<pre>
		Product No.: <input type="text" name="pno"><br>
		Product Name: <input type="text" name="pname"><br>
		Product Type
		<input type = "radio" name = "ptype" value = "Home Appliance">Home Appliance
		<input type = "radio" name = "ptype" value="Computer Hardware">Computer Hardware
		<input type = "radio" name = "ptype" value="Game Console">Game Console
		<input type = "radio" name = "ptype" value="Clothing">Clothing <br>
		Manufacturer: 
		<select id="manufacturer" name="manufacturer">
			<option value="LG">LG</option>
			<option value="Sony">Sony</option>
			<option value="TCL">TCL</option>
			<option value="Philips">Philips</option>
		</select><br>
		Price: <input type="number" placeholder="1.0" step="0.01" min="100" max="900" name="price"><br>
		Weight: <input type="number" placeholder="1.0" step="0.01" name="weight"><br>
		<input type="submit" name="Add Product">
		</pre>
	</form>
	
	<prev>
		<b>The following information is received:</b><br>
		Product No is ${param.pno}<br>
		Product name is ${param.pname}<br>
		Product type is ${param.ptype}<br>
		Manufacturer is ${param.manufacturer}<br>
		Price is ${param.price}<br>
		Weight is ${param.weight}
	</prev>
	
	
</body>
</html>