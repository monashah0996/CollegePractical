

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/UserProcess")
public class UserProcess extends HttpServlet {
       

    public UserProcess() {
        super();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		
		String fname = request.getParameter("fname");
		String lname = request.getParameter("lname");
		String email = request.getParameter("email");
		String zip = request.getParameter("zip");
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		String cpassword = request.getParameter("cpassword");
		String permission = request.getParameter("permission");
		String[] musics = request.getParameterValues("music");
		
		if(fname.isEmpty() | lname.isEmpty() | email.isEmpty() | zip.isEmpty() | password.isEmpty() | cpassword.isEmpty()) {
			out.println("Please enter all the required fields");
		} else {
			out.print("<html>");
	    	out.print("<head>");
	    	out.print("<title>");
	    	out.print("</title>");
	    	out.print("<link rel='stylesheet' href='/Assignment1-Mona/css/result.css'>");
	    	out.print("</head>");
	    	out.print("<body>");
	    	out.println("<h1>Thankyou for joining our mailing list</h1>");
	    	out.print("<h4>Here is the information that you entered:</h4>");
	    	out.print("<table>");
	    	out.print("<tr><td><b>First name:</b></td>");
	    	out.println("<td>"+fname+"</td></tr>");
	    	out.print("<tr><td><b>Last name:</b></td>");
	    	out.println("<td>"+lname+"</td></tr>");
	    	out.print("<tr><td><b>Email:</b></td>");
	    	out.println("<td>"+email+"</td></tr>");
	    	out.print("<tr><td><b>Zip:</b></td>");
	    	out.println("<td>"+zip+"</td></tr>");
	    	out.print("<tr><td><b>Username:</b></td>");
	    	out.println("<td>"+username+"</td></tr>");
	    	out.print("<tr><td><b>Password:</b></td>");
	    	out.println("<td>"+password+"</td></tr>");
	
	    	if(musics!=null) {
	    		out.print("<tr><td><b>Favourite Music:</b></td>");
	    		out.println("<td>");
	    		String mlist="";
	    		for(String s: musics) {
	    			mlist+=s+",";
	    		}
	    		out.println(mlist.substring(0,mlist.length()-1));
	    		out.println("</td></tr>");
	    	}
	    	if(!permission.isEmpty()) {
	    		out.print("<tr><td><b>Receive Special Sale notification:</b></td>");
		    	out.println("<td>"+permission+"</td></tr>");
	    	}
	    	out.print("</table>");
	    	out.print("</body>");
	    	out.print("</html>");
		}
	}


}
