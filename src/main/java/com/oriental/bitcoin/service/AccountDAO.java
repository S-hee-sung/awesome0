package com.oriental.bitcoin.service;

import java.io.File;
import java.io.PrintWriter;
import java.sql.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.oriental.bitcoin.mapper.AccountMapper;
import com.oriental.bitcoin.model.AccountDTO;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

@Service
public class AccountDAO {
	@Autowired
	SqlSession ss;

//	public void login(HttpServletRequest req, HttpServletResponse response, AccountDTO ac) {
//		// post input
//		String id2 = req.getParameter("ac_id2");
//		String pw2 = req.getParameter("ac_pw2");
//		String loginallways = "";
//		loginallways = req.getParameter("loginallways");
//
//		ac.setAc_id(id2);
//		ac.setAc_pw(pw2);
//
//		AccountDTO a2 = (AccountDTO) ss.getMapper(AccountMapper.class).getAccountById(ac);
//
//		if (a2 != null) {
//			if (ac.getAc_pw().equals(a2.getAc_pw())) {
//				req.getSession().setAttribute("loginAccount", a2);
//				if (loginallways == null) {
//					req.getSession().setMaxInactiveInterval(60 * 10);
//				} else if (loginallways.equals("on")) {
//					// 자동로그인을 체크한 경우
//
//					// 세션 값
//					Cookie cookie = new Cookie("loginCookie", a2.getAc_id());
//					// SessionId : 6D6FDA1F96413C09419DEFA151AAB587
//
//					cookie.setPath("/");
//					int amount = 60 * 60 * 24 * 7;
//					cookie.setMaxAge(amount);
//
//					// 세션 유효기간
//					Date ac_sessionlimit = new Date(System.currentTimeMillis() + (1000 * amount));
//
//					System.out.println("세션 유효기간 : " + ac_sessionlimit);
//					// 쿠키 적용
//					response.addCookie(cookie);
//
////					// 실제 디비에 내용 저장하기
////					a2.setAc_sessionkey(a2.getAc_id());
////					a2.setAc_sessionlimit(ac_sessionlimit);
//					if (ss.getMapper(AccountMapper.class).addUserSession(a2) == 1) {
//						System.out.println("사용자 자동 로그인 쿠키 등록 완료");
//					} else {
//						System.out.println("사용자 자동 로그인 쿠키 등록 실패");
//					}
//				}
//			} else {
//				req.setAttribute("r", "로그인 실패 -> pw오류");
//			}
//		} else {
//			req.setAttribute("r", "로그인 실패 -> 미가입 id");
//		}
//
//	}
//	public boolean loginCheck2(HttpServletRequest request) {
//		AccountDTO a = (AccountDTO) request.getSession().getAttribute("loginAccount");
//
//		if(a != null) {
//			return true;
//		}else {
//			return false;
//		}
//	}
//
//
//	public void loginCheck(HttpServletRequest request) {
//		// 이건 나중에 한번 봄
//
//		String page = request.getRequestURL().toString();
//		String params = request.getQueryString();
//
//		if (params != null)
//			page += "?" + params;
//		System.out.println("page : " + page);
//
//		// 로그인 화면 클릭한 경우가 아니라면
//		AccountDTO a = (AccountDTO) request.getSession().getAttribute("loginAccount");
//		if (!page.contains("go.Login.Head"))
//			request.getSession().setAttribute("prevPage", page);
//
//		if (a == null) {
//			request.setAttribute("loginPage", "account/login.jsp");
//		} else {
//			request.setAttribute("loginPage", "account/login_done.jsp");
//		}
//	}
//
//	public void logout(HttpServletRequest req, HttpServletResponse response) {
//		System.out.println("로그아웃 !!");
//		req.getSession().setAttribute("loginAccount", null);
//
//		Cookie loginCookie = new Cookie("loginCookie", null); // choiceCookieName(쿠키 이름)에 대한 값을 null로 지정
//
//		loginCookie.setPath("/");
//		loginCookie.setMaxAge(0); // 유효시간을 0으로 설정
//
//		System.out.println("유효기간 체크 : "  + loginCookie.getMaxAge());
//		System.out.println("값 체크 :  " + loginCookie.getValue());
//		response.addCookie(loginCookie);
//	}
//
//	public int idCheck(HttpServletRequest req) {
//		String ac_id2 = req.getParameter("ac_id2");
//		System.out.println(ac_id2);
//
//		// check : 1이면 x, 0이면 o
//		return ss.getMapper(AccountMapper.class).getIdCheck(ac_id2);
////		if(check.equals(ac_id2)) {
////			req.setAttribute("idCheckResult", "no");
////		}else {
////			req.setAttribute("idCheckResult", "ok");
////		}
////		req.setAttribute("ac_id2", ac_id2);
//	}

	public AccountDTO MakeLogin(HttpServletRequest req, AccountDTO ac) {
		String ac_id = (String) req.getParameter("ac_id");
		String ac_pw = (String) req.getParameter("ac_pw");

		System.out.println(ac_id);
		System.out.println(ac_pw);

		AccountMapper mm = ss.getMapper(AccountMapper.class);
		AccountDTO vo = mm.getAccountById(ac_id);

		if (vo != null) {
			if (ac_pw.equals(vo.getAc_pw())) {
				return vo;
			} else {
				req.setAttribute("r", "로그인 실패 -> pw오류");
				return vo;
			}
		} else {
			req.setAttribute("r", "로그인 실패 -> 미가입 id");
			return vo;
		}

	}

}
