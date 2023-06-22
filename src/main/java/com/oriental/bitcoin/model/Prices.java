package com.oriental.bitcoin.model;

import java.time.LocalDateTime;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "PRICES")
@Getter
@Setter
@ToString
public class Prices {

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int pnum;

	private String coincode;

	private String price;

	private String volume;

	private LocalDateTime date;

}