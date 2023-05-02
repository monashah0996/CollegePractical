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


@WebServlet("/add")
public class c_48_insert extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private FriendsDAO friendsDao;
	private int addResult;
	//private ArrayList<m_48> list;

	/**
	 * @see HttpServlet#HttpServlet()
	 */

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
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String name = request.getParameter("name");
		String email = request.getParameter("email");
		int age = Integer.parseInt(request.getParameter("age"));
		String color = request.getParameter("color");

		m_48 friend = new m_48();
		friend.setFriendName(name);
		friend.setEmail(email);
		friend.setAge(age);
		friend.setColor(color);

		try {

			addResult = friendsDao.addFriend(friend);
			if(addResult != 0) {
				response.sendRedirect("read");
			}

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
