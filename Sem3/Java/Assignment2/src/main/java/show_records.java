

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/show_records")
public class show_records extends HttpServlet {
	private static final long serialVersionUID = 1L;
	Connection con;
   

	
	public void init(ServletConfig config) throws ServletException {
		// TODO Auto-generated method stub
		
		try {
			Class.forName("com.mysql.jdbc.Driver");
			String dburl = "jdbc:mysql://localhost:3306/As2mona";
			String uid = "root";
			String password = "root";
			con = DriverManager.getConnection(dburl, uid, password);
			System.out.println(con.isClosed());
		} catch (Exception ex) {
			ex.printStackTrace();
		}
	}

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		try {
			Statement st = con.createStatement();

			String sqlSelect = "select * from Emp";
			ResultSet rs = st.executeQuery(sqlSelect);

			String result = "";
			result += "<table><tr><th>Emp no</th><th>Emp Name</th>"+
					"<th>Department</th><th>Emp Job</th>";
			while (rs.next()) {
				result += "<tr><td>" + rs.getString("Empno") + "</td><td>" 
						+ rs.getString("Empname") + "</td><td>"
						+ rs.getString("Department") + "</td><td>" 
						+ rs.getString("EmpJob") + "</td></tr>";

			}
			result += "</table>";
			out.print(result);
			if (st != null)
				st.close();

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

}
