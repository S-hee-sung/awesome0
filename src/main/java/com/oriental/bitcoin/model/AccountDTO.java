package com.oriental.bitcoin.model;


import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AccountDTO{
	private String ac_id;
	private String ac_pw;
	private String ac_name;
	private String ac_birth;
	private String ac_phone;
	private String ac_gender;
	private Date ac_date;


}