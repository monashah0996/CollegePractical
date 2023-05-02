package Assignment4;

import java.io.IOException;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class UserServlet
 */
@WebServlet("/login")
public class UserServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    private UserDAO userDao;   

	public void init(ServletConfig config) throws ServletException {
		// TODO Auto-generated method stub
		userDao = new UserDAO();
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		
		
		
		UserModel user = new UserModel();
		user.setUsername(username);
		user.setPassword(password);
		
try {
			
			int result = userDao.validateUser(user);
			//System.out.println(result);
			if(result != 0)
				response.sendRedirect("success.jsp");
			else
				response.sendRedirect("error.jsp");
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			}
		
	}


}
