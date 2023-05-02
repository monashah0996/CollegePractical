

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/CheckLogin")
public class CheckLogin extends HttpServlet {
	Connection con;
    
    public void init() throws ServletException{
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
    
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		
		String uname = request.getParameter("username");
		String password = request.getParameter("password");
		
		PrintWriter out = response.getWriter();
		try {
			//Statement st = con.createStatement();
			
			String sqlSelect = "select * from Login where Username = ? and Password = ?";
			PreparedStatement ps = con.prepareStatement(sqlSelect);
			ps.setString(1, uname);
			ps.setString(2, password);
			
			System.out.println(sqlSelect);
			//ResultSet rs = st.executeQuery(sqlSelect);
			ResultSet rs = ps.executeQuery();
			
			if(rs.next())
				out.print("Login is successful");
			else
				out.print("Login is unsuccessful");
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
