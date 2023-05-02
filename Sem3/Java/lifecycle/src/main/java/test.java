
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/test")
public class test extends HttpServlet {
       

    public void init() throws ServletException {
    	System.out.println("This is init method");
    }
    
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    	response.setContentType("text/html");
    	PrintWriter out = response.getWriter();
    	
    	out.println("<html>");
    	out.println("<head>");
    	out.println("<title>");
    	out.println("</title>");
    	out.println("<link rel='stylesheet' href='/lifecycle/css/mycss.css'>");
    	out.println("</head>");
    	out.println("<body>");
    	out.println("<h5>Hello World</h5>");
    	out.println("</body>");
    	out.println("</html>");
    }
    
    public void destroy(){
    	System.out.println("This is destroy method");
    }
}