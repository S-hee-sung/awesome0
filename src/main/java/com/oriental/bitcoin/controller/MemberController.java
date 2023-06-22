package com.oriental.bitcoin.controller;

import com.oriental.bitcoin.model.AccountDTO;
import com.oriental.bitcoin.model.Coins;
import com.oriental.bitcoin.model.Prices;
import com.oriental.bitcoin.service.AccountDAO;
import com.oriental.bitcoin.service.WebPageService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;


@Service
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class MemberController {

    @Autowired
    private AccountDAO aDAO;

// ================================= coin =====================================================
    @Autowired
    WebPageService webPageService;

    @GetMapping("/api/coinSet") // http://localhost:8080/ 진입 시 main.html 페이지 진입을 위한 ModelandView
    @ResponseBody
    public String mainPage(Model model) throws Exception {
        List<Coins> coinList = webPageService.findAllCoins();
        model.addAttribute("coinList",coinList); // 전체 코인 리스트 전달

        List<Prices> priceList = new ArrayList<>();
        priceList = webPageService.findPriceList(coinList.get(0).getCoincode());
        model.addAttribute("priceList",priceList); // 코인 리스트의 첫번째 코인의 가격 정보 전달
//        return "main";
        if(coinList == null || priceList == null){
            return "fail";
        }
        else return "success"; // 기존 페이지에서 불러지게 axios로 부르고 return aDAO.MakeLogin(requestJsonHashMap, ac);
    }

    @GetMapping("/coin/prices") // AJAX 구현을 위한 Price 데이터 전달 메소드 // 페이지 이도 axios
    public String getCoinPrices(Model model, @RequestParam String coinCode) throws Exception {

        List<Prices> priceList = new ArrayList<>();
        priceList = webPageService.findPriceList(coinCode); // 코인코드를 파라미터로 받아, DB 조회 후 가격 정보를 전달
        model.addAttribute("priceList",priceList);
        return "main :: priceTable"; // thymeleaf AJAX 구현을 위해, 데이터가 변경 될 ":: ID" 추가
    }

//    ==========================================================================================

    @PostMapping("/api/login")
    @ResponseBody
    public AccountDTO login(@RequestBody HashMap<String, Object> requestJsonHashMap, AccountDTO ac) {
        return aDAO.MakeLogin(requestJsonHashMap, ac);
    }

    @PostMapping("/api/signUp")
    @ResponseBody
    public int SignUp(@RequestBody HashMap<String, Object> requestJsonHashMap, AccountDTO ac) {
        return aDAO.MakeSignUp(requestJsonHashMap, ac);
    }

}
