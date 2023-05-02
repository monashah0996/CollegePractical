

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/import_records")
public class import_records extends HttpServlet {
	private static final long serialVersionUID = 1L;
	Connection con;

	public void init(ServletConfig config) throws ServletException {
		try {
			// The newInstance() call is a work around for some
			// broken Java implementations

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

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		
		PreparedStatement stmt;
		try {
			String empno = request.getParameter("empno");
			String name = request.getParameter("empname");
			String department =request.getParameter("Department");
			String EmpJob =request.getParameter("jobtitle");
			
			stmt = con.prepareStatement("insert into Emp values(?,?,?,?)");
			stmt.setString(1, empno); 
			stmt.setString(2, name);
			stmt.setString(3, department);
			stmt.setString(4, EmpJob);
			stmt.executeUpdate();
			
	        response.sendRedirect("show_records");
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			out.println("Invalid Input! Please check the input!!");
			e.printStackTrace();
		}
	}

}
