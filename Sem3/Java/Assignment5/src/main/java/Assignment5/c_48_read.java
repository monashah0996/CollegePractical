package Assignment5;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class c_48_read
 */
@WebServlet("/read")
public class c_48_read extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private FriendsDAO friendsDao;

	public void init(ServletConfig config) throws ServletException {
		// TODO Auto-generated method stub
		try {
			friendsDao = new FriendsDAO();
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
		ArrayList<m_48> list = null;
		try {
			list = friendsDao.readFriend();
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		request.setAttribute("data", list);
		RequestDispatcher rd =  request.getRequestDispatcher("v_48_read.jsp");
		rd.forward(request, response);
	}

}
