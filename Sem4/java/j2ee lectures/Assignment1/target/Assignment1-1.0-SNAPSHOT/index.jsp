<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>Mortgage Calculator</title>
    <script>
        document.onload(() => {
            function resetForm() {
                document.getElementById("mortgageForm").reset();
            }
        })
    </script>
</head>
<body>
<br/>
<h2>Mortgage Calculator:</h2>
<form id="mortgageForm" action="mortgage" method="post"  style="border:blue; border-width:5px; border-style:outset;">
    <br/>
    Amount: <input type="text" name="amount"/>
    <br/>
    Rate Of Interest: <input type="text" name="rate"/>
    <br/>
    Term Period:<br/>
    Years <input type="text" name="years"/>
    Months <input type="text" name="months"/>
    <br/>
    <br/>
    <input type="button" onclick="document.getElementById('mortgageForm').reset()" value="Reset"/> <input type="submit" value="Calculate"/>
    <br/><br/>
</form>
</body>
</html>
