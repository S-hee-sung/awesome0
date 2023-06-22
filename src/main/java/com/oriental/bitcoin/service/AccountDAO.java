package com.oriental.bitcoin.service;

import java.util.ArrayList;
import java.util.HashMap;

import com.oriental.bitcoin.mapper.AccountMapper;
import com.oriental.bitcoin.model.AccountDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountDAO {

	@Autowired
	AccountMapper accountMapper;

	public AccountDTO MakeLogin(HashMap<String, Object> requestJsonHashMap, AccountDTO ac) {
//		String ac_id = (String) req.getParameter("userId");
//		String ac_pw = (String) req.getParameter("userPw");
//		System.out.println(ac_id);
//		System.out.println(ac_pw);
		String ac_id = "0";
		String ac_pw = "0";
		//response Data
		ArrayList<HashMap<String, Object>> rtnArray = new ArrayList<HashMap<String, Object>>();
		HashMap<String, Object> rtnMap = new HashMap<String, Object>();

		rtnMap.put("ac_id", requestJsonHashMap.get("userId"));
		rtnMap.put("ac_pw", requestJsonHashMap.get("userPw"));
		for(String i : rtnMap.keySet()){ //저장된 key값 확인
			System.out.println("[Key]:" + i + " [Value]:" + rtnMap.get(i));
			if(i == "ac_id") {ac_id = (String) rtnMap.get(i);}
			if(i == "ac_pw") {ac_pw = (String) rtnMap.get(i);}
		}
		System.out.println(ac_id);
		System.out.println(ac_pw);

//		rtnArray.add(rtnMap);

//		for(HashMap<String, Object> a : rtnArray){ //저장된 key값 확인
//			System.out.println(a);
//		}
		System.out.println("============");
		// 해당 부분 수정
		AccountDTO vo = accountMapper.getAccountById(ac_id);

		// =========================== build 할 떄는 여기 주석처리
//		System.out.println(vo.getAc_id());
//		System.out.println(vo.getAc_phone());

//		if (vo != null) {
//			if (ac_pw.equals(vo.getAc_pw())){
//				return vo;
//			} else {
////				req.setAttribute("r", "로그인 실패 -> pw오류");
//			}
//		} else {
////			req.setAttribute("r", "로그인 실패 -> 미가입 id");
//		}
		// =========================== build 할 떄는 여기 주석처리

		return vo;

	}

	public int MakeSignUp(HashMap<String, Object> requestJsonHashMap, AccountDTO ac) {
		String ac_id = null, ac_pw = null,ac_name = null,ac_gender = null,ac_birth_y = null,ac_birth_m = null,ac_birth_d = null,ac_phone = null;
//
		HashMap<String, Object> rtnMap2 = new HashMap<String, Object>();

		rtnMap2.put("ac_id", requestJsonHashMap.get("ac_id"));
		rtnMap2.put("ac_pw", requestJsonHashMap.get("ac_pw"));
		rtnMap2.put("ac_name", requestJsonHashMap.get("ac_name"));
		rtnMap2.put("ac_gender", requestJsonHashMap.get("ac_gender"));
		rtnMap2.put("ac_birth_y", requestJsonHashMap.get("ac_birth_y"));
		rtnMap2.put("ac_birth_m", requestJsonHashMap.get("ac_birth_m"));
		rtnMap2.put("ac_birth_d", requestJsonHashMap.get("ac_birth_d"));
		rtnMap2.put("ac_phone", requestJsonHashMap.get("ac_phone"));

		for(String i : rtnMap2.keySet()){ //저장된 key값 확인
			System.out.println("[Key]:" + i + " [Value]:" + rtnMap2.get(i));
			if(i == "ac_id") {ac_id = (String) rtnMap2.get(i);}
			if(i == "ac_pw") {ac_pw = (String) rtnMap2.get(i);}
			if(i == "ac_name") {ac_name = (String) rtnMap2.get(i);}
			if(i == "ac_gender") {ac_gender = (String) rtnMap2.get(i);}
			if(i == "ac_birth_y") {ac_birth_y = (String) rtnMap2.get(i);}
			if(i == "ac_birth_m") {ac_birth_m = (String) rtnMap2.get(i);}
			if(i == "ac_birth_d") {ac_birth_d = (String) rtnMap2.get(i);}
			if(i == "ac_phone") {ac_phone = (String) rtnMap2.get(i);}
		}
		String ac_birth = ac_birth_y + ac_birth_m + ac_birth_d;
		System.out.println("============");

		// dto에 넣기
		AccountDTO regAccount = new AccountDTO();
//		regAccount.setAc_id(ac_id);
//		regAccount.setAc_pw(ac_pw);
//		regAccount.setAc_name(ac_name);
//		regAccount.setAc_gender(ac_gender);
//		regAccount.setAc_birth(ac_birth);
//		regAccount.setAc_phone(ac_phone);

		// 오류 검증
		if (accountMapper.accountRegDoIt(regAccount)== 1){
			return 1;
		}else{
			return 0;
		}


	}
}
