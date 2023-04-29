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
<h4>Please enter the following details:</h4>
<form id="mortgageForm" action="mortgage" method="post">
    Mortgage Amount: <input type="text" name="amount"/>
    <br/><br/>
    Interest Rate: <input type="text" name="rate"/>
    <br/><br/>
    Interest Term: <input type="text" name="years"/> Years <input type="text" name="months"/> Months
    <br/><br/>
    <br/>
    <input type="button" onclick="document.getElementById('mortgageForm').reset()" value="Reset"/> <input type="submit" value="Calculate"/>
</form>
</body>
</html>
