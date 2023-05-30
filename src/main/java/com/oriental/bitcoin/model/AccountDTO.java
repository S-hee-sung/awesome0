package com.oriental.bitcoin.model;


import java.util.Date;

public class AccountDTO {
	private String ac_id;
	private String ac_pw;
	private String ac_name;
	private String ac_birth;
	private String ac_phone;
	private String ac_gender;
	private Date ac_date;

	public AccountDTO() {
		// TODO Auto-generated constructor stub
	}

	public String getAc_id() {
		return ac_id;
	}

	public void setAc_id(String ac_id) {
		this.ac_id = ac_id;
	}

	public String getAc_pw() {
		return ac_pw;
	}

	public void setAc_pw(String ac_pw) {
		this.ac_pw = ac_pw;
	}

	public String getAc_name() {
		return ac_name;
	}

	public void setAc_name(String ac_name) {
		this.ac_name = ac_name;
	}

	public String getAc_birth() {
		return ac_birth;
	}

	public void setAc_birth(String ac_birth) {
		this.ac_birth = ac_birth;
	}

	public String getAc_phone() {
		return ac_phone;
	}

	public void setAc_phone(String ac_phone) {
		this.ac_phone = ac_phone;
	}

	public String getAc_gender() {
		return ac_gender;
	}

	public void setAc_gender(String ac_gender) {
		this.ac_gender = ac_gender;
	}

	public Date getAc_date() {
		return ac_date;
	}

	public void setAc_date(Date ac_date) {
		this.ac_date = ac_date;
	}

	public AccountDTO(String ac_id, String ac_pw, String ac_name, String ac_birth, String ac_phone, String ac_gender,
					  Date ac_date) {
		super();
		this.ac_id = ac_id;
		this.ac_pw = ac_pw;
		this.ac_name = ac_name;
		this.ac_birth = ac_birth;
		this.ac_phone = ac_phone;
		this.ac_gender = ac_gender;
		this.ac_date = ac_date;
	}


}