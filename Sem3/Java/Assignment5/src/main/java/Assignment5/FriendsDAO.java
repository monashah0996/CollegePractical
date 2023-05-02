package Assignment5;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import com.mysql.cj.jdbc.result.ResultSetMetaData;

public class FriendsDAO {
 
	Connection connection;

	public FriendsDAO() throws ClassNotFoundException{
		Class.forName("com.mysql.jdbc.Driver");
		try
		{
			connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/W11?useSSL=false",
					"root", "root");
		}catch (Exception e) {
			e.printStackTrace();
		}
	}

	public int addFriend(m_48 friend) throws ClassNotFoundException {
		String INSERT_SQL = "INSERT INTO Friends"
				+ " (friendName, emailAddr, age, favoriteColor) VALUES "
				+ " (?, ?, ?, ?);";
		int result = 0;
		try
		{
			PreparedStatement preparedStatement = connection.prepareStatement(INSERT_SQL); 
			preparedStatement.setString(1, friend.getFriendName());
			preparedStatement.setString(2, friend.getEmail());
			preparedStatement.setInt(3, friend.getAge());
			preparedStatement.setString(4, friend.getColor());
			// Do rest of the parameters as well
			System.out.println(preparedStatement);
			// Step 3: Execute the query or update query
			result = preparedStatement.executeUpdate();
		} catch (SQLException e) {
			// process sql exception
			e.printStackTrace();
			//printSQLException(e);
		}
		return result;

	}
	
	public int deleteFriend(int id) throws ClassNotFoundException {
		String DELETE_SQL = "Delete from Friends where friendId = "+id;
		int result = 0;
		try
		{
			PreparedStatement preparedStatement = connection.prepareStatement(DELETE_SQL);  
			result = preparedStatement.executeUpdate();
		} catch (SQLException e) {
			// process sql exception
			e.printStackTrace();
			//printSQLException(e);
		}
		return result;

	}
	

	public ArrayList<m_48> readFriend() throws ClassNotFoundException {
		ArrayList<m_48> FriendsList = new ArrayList<m_48>();
		try
		{
			Statement stmt = connection.createStatement(); 
			ResultSet rs = stmt.executeQuery("select * from Friends");

			while(rs.next()) {
				m_48 newFriend = new m_48();
				newFriend.setId(rs.getInt("friendId"));
				newFriend.setFriendName(rs.getString("friendName"));
				newFriend.setEmail(rs.getString("emailAddr"));
				newFriend.setAge(rs.getInt("age"));
				newFriend.setColor(rs.getString("favoriteColor"));
				FriendsList.add(newFriend);
			}
			System.out.println(FriendsList);
		} catch (SQLException e) {
			// process sql exception
			e.printStackTrace();
			//printSQLException(e);
		}
		return FriendsList;
	}
}
