package com.oriental.bitcoin.service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.PostConstruct;
import javax.transaction.Transactional;

import com.oriental.bitcoin.mapper.AccountMapper;
import com.oriental.bitcoin.mapper.CoinMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.oriental.bitcoin.model.Coins;
import com.oriental.bitcoin.model.Prices;
import com.oriental.bitcoin.repository.CoinsRepository;
import com.oriental.bitcoin.repository.PricesRepository;
import com.oriental.bitcoin.service.external.Api_Client;

import lombok.extern.slf4j.Slf4j;

@Service
@Transactional
@Slf4j
/* 일정 주기로 코인 가격정보를 저장하기 위한 서비스 */
public class SavePriceService {

	@Autowired
	CoinsRepository coinsRepository;
	@Autowired
	PricesRepository pricesRepository;

	@Autowired
	CoinMapper coinMapper;

	// 빗썸에서 제공한 API_Client Class 정의 (API Key 와 Secret를 입력)
	static Api_Client apiClient = new Api_Client("b14e9b2f143bb89ef844a4b8873b328c", "0ca53c26c0f5b76408ceac1fdcdb9f35");

	// 10분 동안 거래량 계산을 위한, 10분 전 가격 정보를 담을 Map
	static Map<String,Double> preVolumeMap = new HashMap<>();

	// 프로그램 실행 시 이전에 저장했던 가격 정보는 삭제
//	@PostConstruct
//	private void initDelAllPrices() throws Exception {
//		log.info("[initDelAllPrices] 프로그램 최초 실행 시, 기존 Price 데이터 삭제 (지운 데이터: " + pricesRepository.count() + ")");
//		pricesRepository.deleteAll();
//	}

	// 10분마다 코인의 가격과 거래량 정보를 저장
	@Scheduled(cron = "30 9,19,21,22,23,24,25,29,39,49,59 * * * *") // 매시 09:30, 19:30, 29:30, 39:30, 49:30, 59:30에 실행
	public void savePriceEvery10min() throws Exception {
		Prices currentPrice = new Prices();
		List<Coins> coins = (List<Coins>) coinsRepository.findAll();
//		log.info("[savePriceEvery10min] 10분마다 가격 정보를 저장 (현재 시간: " + LocalDateTime.now() + ", 저장할 코인 수: "+ coins.size() + ")");

		double curPreGap = 0.0;

		// =========================================================================
//		for(Coins c : coins) {
//			currentPrice = getCoinPrice(c.getCoincode());
//			if( preVolumeMap.get(c.getCoincode()) == null || pricesRepository.countByCoincode(c.getCoincode()) == 0 ) {// 최초 실행의 경우, 거래량은 0으로 현재가격을 저장
//				preVolumeMap.put(c.getCoincode(), Double.valueOf(currentPrice.getVolume()));
//				currentPrice.setVolume(String.valueOf(0.0));
//			} else { // 직전 데이터가 있는 경우
//				log.info(currentPrice.toString()+ "|" +preVolumeMap.toString());
//				curPreGap = Integer.parseInt(currentPrice.getVolume()) - preVolumeMap.get(c.getCoincode()); // 현재 거래량에서 직전거래량을 빼면 10분 동안 거래량
//				preVolumeMap.put(c.getCoincode(), Double.valueOf(currentPrice.getVolume()));
//				if( curPreGap >= 0 ) {
//					currentPrice.setVolume(String.valueOf(curPreGap));
//				} else { // 매일 00:09:30의 경우, 빗썸 API가 00시 기준으로 리셋이 되기 때문에 그 전날 23:59:30~24:00:00의 30초동안 거래량은 버리고 00:00:00~00:09:30의 거래량만 저장
//					currentPrice.setVolume(currentPrice.getVolume());
//				}
//			}
//			pricesRepository.save(currentPrice); // DB에 저장
//		}
		// =========================================================================

		for(Coins c : coins) {
			currentPrice = getCoinPrice(c.getCoincode());
			System.out.println("============");
			System.out.println(c);
			System.out.println("============");
			currentPrice.getPrice();
		}
	}

	// 빗썸 API를 통해 코인의 현재 가격 정보를 가져 옴
	private Prices getCoinPrice(String coinCode) throws Exception{

		Prices price = new Prices();
		// 빗썸 API 호출을 위한 URL 생성
		String url = "/public/ticker/";
		url = url + coinCode + "_KRW";
		// 빗썸 API 호출
		HashMap<String,String> params = new HashMap<>();
		String result = apiClient.callApi(url,params);


		// 응답받은 String 데이터를 Map 객체로 저장
		ObjectMapper mapper = new ObjectMapper();
		Map<String,String> m = (Map<String, String>) mapper.readValue(result, Map.class).get("data");

		System.out.println("============");
		System.out.println(m.get("opening_price"));
		System.out.println(m.get("closing_price"));
		System.out.println(m.get("min_price"));
		System.out.println(m.get("max_price"));
		System.out.println(m.get("units_traded"));
		System.out.println(m.get("prev_closing_price"));
		System.out.println(m.get("units_traded_24H"));
		System.out.println(LocalDateTime.now());
		System.out.println("============");

		// Price 객체에 각각 응답 값을 저장
		price.setCoincode(coinCode);
		price.setPrice(m.get("closing_price"));
		price.setVolume(m.get("units_traded"));
		price.setDate(LocalDateTime.now());

		// price seq 주입
		Prices upDatePrice = new Prices();
		if(coinMapper.UpDatePrice(price)== 1){
			//성공
			upDatePrice = coinMapper.getPrice(coinCode);
		}
		else{
			upDatePrice = null;
		}

		return upDatePrice;
	}
}