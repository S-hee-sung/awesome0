package com.oriental.bitcoin.controller;

import com.oriental.bitcoin.model.AccountDTO;
import com.oriental.bitcoin.service.AccountDAO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;

@RequestMapping("/api")
@Service
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class MemberController {

    @Autowired
    private AccountDAO aDAO;


//    @GetMapping("/api/hello")
//    public String test() {
//        return "Hello, world!";
//    }
    @PostMapping("/login")
    @ResponseBody
    public AccountDTO login(@RequestBody HashMap<String, Object> requestJsonHashMap, AccountDTO ac) {
        return aDAO.MakeLogin(requestJsonHashMap, ac);
    }

    @PostMapping("/signUp")
    @ResponseBody
    public int SignUp(@RequestBody HashMap<String, Object> requestJsonHashMap, AccountDTO ac) {
        return aDAO.MakeSignUp(requestJsonHashMap, ac);
    }

}
