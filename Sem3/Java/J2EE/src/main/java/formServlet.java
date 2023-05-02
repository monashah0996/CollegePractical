

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/formServlet")
public class formServlet extends HttpServlet {
       

    public formServlet() {
        super();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		out.println(request.getParameter("myname"));
		out.println(request.getParameter("email"));
		out.println(request.getParameter("gender"));
		out.println(request.getParameter("age"));
		out.println(request.getParameter("textarea"));
	}


}
