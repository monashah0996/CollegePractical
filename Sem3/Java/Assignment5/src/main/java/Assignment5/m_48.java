package Assignment5;
import java.io.Serializable;

public class m_48 implements Serializable {
	private int id;
	private String friendName;
	private String email;
	private int age;
	private String color;

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}

	public String getFriendName() {
		return friendName;
	}
	public void setFriendName(String friendName) {
		this.friendName = friendName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}


}