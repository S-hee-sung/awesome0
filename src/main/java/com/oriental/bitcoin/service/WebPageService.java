package com.oriental.bitcoin.service;

import java.util.List;

import java.time.LocalDateTime;
import java.util.*;

import javax.annotation.PostConstruct;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.oriental.bitcoin.model.Coins;
import com.oriental.bitcoin.model.Prices;
import com.oriental.bitcoin.repository.CoinsRepository;
import com.oriental.bitcoin.repository.PricesRepository;
import com.oriental.bitcoin.service.external.Api_Client;

import lombok.extern.slf4j.Slf4j;
@Service
@Slf4j
/* Web 페이지의 정보 노출를 위한 조회용 서비스 */
public class WebPageService {
	
	@Autowired
	CoinsRepository coinsRepository;
	@Autowired
	PricesRepository pricesRepository;
	
	// 빗썸에서 제공한 API_Client Class 정의 (API Key 와 Secret를 입력)
	static Api_Client apiClient = new Api_Client("b14e9b2f143bb89ef844a4b8873b328c", "0ca53c26c0f5b76408ceac1fdcdb9f35");
	
	// 내가 저장한 (관리할) 모든 코인의 목록을 가져온다
	public List<Coins> findAllCoins() throws Exception{
		return (List<Coins>) coinsRepository.findAll();
	}
	// 매개 변수로 받은 코인의 최근 10개 가격 데이터 저장
	public List<Prices> findPriceList(String coinCode) throws Exception{
		return pricesRepository.findFirst10ByCoincodeOrderByDateDesc(coinCode);
	}
	

}