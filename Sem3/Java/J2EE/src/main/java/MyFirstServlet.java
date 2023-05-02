

import java.io.IOException;
import java.io.PrintWriter;
import java.net.InetAddress;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/MyFirstServlet")
public class MyFirstServlet extends HttpServlet {

    public MyFirstServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		InetAddress ip = InetAddress.getLocalHost();
		PrintWriter out = response.getWriter();
		out.println("Ip Address of my computer: "+ip.getHostAddress());
		out.println("Name of my computer: "+ip.getHostName());
	}

}
