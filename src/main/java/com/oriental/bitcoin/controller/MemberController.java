package com.oriental.bitcoin.controller;

import com.oriental.bitcoin.model.AccountDTO;
import com.oriental.bitcoin.service.AccountDAO;
import com.oriental.bitcoin.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

//@Controller
//public class AccountController {
//
//    @Autowired
//    SqlSession ss;
//
//    @Autowired
//    private AccountDAO aDAO;
//    private HttpServletResponse response;
//
//    @RequestMapping(value = "/api/login", method = RequestMethod.POST)
//    public String goToMain(HttpServletRequest request) {
//
////        aDAO.autoLogin(request);
//        aDAO.loginCheck(request);
//        request.setAttribute("contentPage", "home.jsp");
//        return "main";
//    }
//
//
//}

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @PostMapping("/login")
    public AccountDTO login(@RequestBody final AccountDTO params) {
        AccountDTO entity = memberService.findBy(params);
        return entity;
    }

}
