package com.vr.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="editor")
public class Editor {
	@Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 @Column(name = "id")
    private Integer id;
	 
	 @Column(name="username")
    private Integer username;
	 
	 @Column(name="password")
    private Integer password;

	public Integer getId() {
		return id;
	}

	public Editor(Integer username, Integer password) {
		super();
		this.username = username;
		this.password = password;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getUsername() {
		return username;
	}

	public void setUsername(Integer username) {
		this.username = username;
	}

	public Integer getPassword() {
		return password;
	}

	public void setPassword(Integer password) {
		this.password = password;
	}
}