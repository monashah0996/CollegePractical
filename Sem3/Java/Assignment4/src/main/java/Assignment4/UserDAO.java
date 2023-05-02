package Assignment4;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class UserDAO {

	
	public int validateUser(UserModel user) throws ClassNotFoundException {
		int result = 0;
		//String sqlSelect = "select * from Login where Username = ? and Password = ?";
		Class.forName("com.mysql.jdbc.Driver");
		try
		{
			Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/W11?useSSL=false",
					"root", "root");
			Statement stmt = connection.createStatement(); 
			System.out.println(user.getUsername());
			System.out.println(user.getPassword());
			ResultSet rs = stmt.executeQuery("select * from User where Username='" + user.getUsername() + 
					"' and Password='" + user.getPassword() + "'");
			
			if(rs.next()) {
				 result = result+1;
			}
			System.out.println(result);
			} catch (SQLException e) {
			// process sql exception
			e.printStackTrace();
			e.getMessage();
			//printSQLException(e);
		}
		return result;

	}
}
