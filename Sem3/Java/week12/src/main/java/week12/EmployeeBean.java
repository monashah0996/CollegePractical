package week12;

import java.io.Serializable;

public class EmployeeBean implements Serializable{
	private int id;
	private String name;
	
	//default constructor
	public EmployeeBean() {}
	
	//setter and getter
	public void setId(int id) {
		this.id=id;
	}
	
	public void setName(String name) {
		this.name=name;
	}
	
	public int getId() {
		return this.id;
	}
	
	public String getName() {
		return this.name;
	}
	
	

}
