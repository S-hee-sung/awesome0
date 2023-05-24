//package com.oriental.bitcoin.controller;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//
//import com.oriental.bitcoin.model.Coins;
//import com.oriental.bitcoin.model.Prices;
//import com.oriental.bitcoin.service.WebPageService;
//
//@Controller
//public class CoinwebController {
//
//	@Autowired
//	WebPageService webPageService;
//
//	@GetMapping("/hello") // http://localhost:8080/ 진입 시 main.html 페이지 진입을 위한 ModelandView
//	public String mainPage(Model model) throws Exception {
//		List<Coins> coinList = webPageService.findAllCoins();
//		model.addAttribute("coinList",coinList); // 전체 코인 리스트 전달
//
//		List<Prices> priceList = new ArrayList<>();
//		priceList = webPageService.findPriceList(coinList.get(0).getCoincode());
//		model.addAttribute("priceList",priceList); // 코인 리스트의 첫번째 코인의 가격 정보 전달
//		return "main";
//	}
//
//	@GetMapping("/coin/prices") // AJAX 구현을 위한 Price 데이터 전달 메소드
//	public String getCoinPrices(Model model, @RequestParam String coinCode) throws Exception {
//
//		List<Prices> priceList = new ArrayList<>();
//		priceList = webPageService.findPriceList(coinCode); // 코인코드를 파라미터로 받아, DB 조회 후 가격 정보를 전달
//		model.addAttribute("priceList",priceList);
//		return "main :: priceTable"; // thymeleaf AJAX 구현을 위해, 데이터가 변경 될 ":: ID" 추가
//	}
//
//}