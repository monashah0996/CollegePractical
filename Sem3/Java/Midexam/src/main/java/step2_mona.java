

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class step2_mona
 */
@WebServlet("/step2_mona")
public class step2_mona extends HttpServlet {
	Connection con;

	public void init() throws ServletException{
		try {

			Class.forName("com.mysql.jdbc.Driver");
			String dburl = "jdbc:mysql://localhost:3306/HumberEvents";
			String uid = "root";
			String password = "root";
			con = DriverManager.getConnection(dburl,uid,password);
			System.out.println(con.isClosed());

		}catch(Exception e) {
			e.printStackTrace();
		}
	}



	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub

		response.setContentType("text/html");
		PrintWriter out = response.getWriter();

		String fname = request.getParameter("fname");
		String lname = request.getParameter("lname");
		String dob = request.getParameter("dob");
		String status = request.getParameter("status");
		String email = request.getParameter("email");

		if(fname.isEmpty() | lname.isEmpty() | email.isEmpty() | dob.isEmpty() | status.isEmpty()) {
			out.println("Please enter all the required fields");
		} else {
			out.print("<html>");
			out.print("<head>");
			out.print("<title>");
			out.print("</title>");
			out.print("<body>");
			out.print("<p>Thank you <b>"+fname+" " 
					+lname+"</b>  for registering in this event. We will contact you via <a href='url'>"
					+email+"</a> Your DOB is <b>"+dob+"</b>, and your status is <b>"+status+"</b></p>");
			out.print("</body>");
			out.print("</html>");
			
			try {
				String sqlinsert = "Insert into Member(FirstName,LastName,DOB,Status,Email) VALUES (?, ?, ?, ?, ?);";
				PreparedStatement ps = con.prepareStatement(sqlinsert);
				ps.setString(1, fname);
				ps.setString(2, lname);
				ps.setString(3, dob);
				ps.setString(4, status);
				ps.setString(5, email);
				ps.executeUpdate();
				
			}catch(Exception e){
				e.printStackTrace();
			}
		}
	}

}
