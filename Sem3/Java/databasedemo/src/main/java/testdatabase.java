

import java.io.IOException;
import java.io.PrintWriter;
import java.net.InetAddress;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/testdatabase")
public class testdatabase extends HttpServlet {
	Connection con;

    public void init() throws ServletException {
    	try {
    		Class.forName("com.mysql.jdbc.Driver");
    		String dburl="jdbc:mysql://localhost:3306/myinfo";
    		String uid = "root";
    		String password = "root";
    		con =DriverManager.getConnection(dburl, uid, password);
    		
    		System.out.println(con.isClosed()); // check connection
    		
    	}catch(Exception e) {
    		e.printStackTrace();
    	}
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		try {
			String reportno = request.getParameter("reportno");
			String reportdesc = request.getParameter("reportdesc");
			String sqlupdate = "Insert into report_mona (reportNo,reportDesc) VALUES ('"+reportno+"','"+reportdesc+"')";
    		Statement st = con.createStatement();
    		st.executeUpdate(sqlupdate);
			
		}catch(Exception e) {
			e.printStackTrace();
		}
	}

}
