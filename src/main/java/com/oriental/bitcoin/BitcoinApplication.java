package com.oriental.bitcoin;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;
@MapperScan(value = {"com.oriental.bitcoin.mapper"})
@EnableScheduling // CronTab 스케쥴 기능을 사용하기 위해 어노테이션 추가
@SpringBootApplication
public class BitcoinApplication {

	public static void main(String[] args) {
		SpringApplication.run(BitcoinApplication.class, args);
	}

}