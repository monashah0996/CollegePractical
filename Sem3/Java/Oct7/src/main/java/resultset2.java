

import java.io.*;
import java.sql.*;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class resultset2
 */
@WebServlet("/resultset2")
public class resultset2 extends HttpServlet {
	private static final long serialVersionUID = 1L;
	Connection con;
       

	public void init(ServletConfig config) throws ServletException {
		try {
    		
    		Class.forName("com.mysql.jdbc.Driver");
			String dburl = "jdbc:mysql://localhost:3306/oct7_mona";
			String uid = "root";
			String password = "root";
			con = DriverManager.getConnection(dburl,uid,password);
			System.out.println(con.isClosed());
    		
    	}catch(Exception e) {
    		e.printStackTrace();
    	}
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		PrintWriter out = response.getWriter();
		try {
			Statement st = con.createStatement();
			
			String sqlSelect = "select * from Login";
			ResultSet rs = st.executeQuery(sqlSelect);
			
			while(rs.next()) {
				out.print(rs.getString("Username")+"\t"+rs.getString("Password")+"\t"+rs.getString("Email")+"\n");
				
			}
			
			if(st != null)
				st.close();
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
