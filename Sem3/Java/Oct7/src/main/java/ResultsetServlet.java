

import java.io.IOException;
import java.sql.*;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/ResultsetServlet")
public class ResultsetServlet extends HttpServlet {
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
		try {
			Statement st = con.createStatement();
			String sqlinsert = "Insert into login(Username,Password,Email) VALUES ('User1', 'Pass1', 'email@gmail.com')";
			st.executeUpdate(sqlinsert);
			
		}catch(Exception e){
			e.printStackTrace();
		}
	}

}
