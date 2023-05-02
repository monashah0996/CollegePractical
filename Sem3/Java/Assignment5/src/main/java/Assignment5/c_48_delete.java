package Assignment5;

import java.io.IOException;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class c_48_delete
 */
@WebServlet("/delete")
public class c_48_delete extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private FriendsDAO friendsDao;
	private int deleteResult;

	public void init(ServletConfig config) throws ServletException {
		// TODO Auto-generated method stub
		try {
			friendsDao = new FriendsDAO();
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		int id = Integer.parseInt(request.getParameter("fid"));
		try {
			deleteResult = friendsDao.deleteFriend(id);
			if(deleteResult!=0) {
				response.sendRedirect("read");
			}
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

}
