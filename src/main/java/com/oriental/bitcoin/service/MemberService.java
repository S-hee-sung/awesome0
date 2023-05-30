package com.oriental.bitcoin.service;

import com.oriental.bitcoin.model.AccountDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberService {

    //final 붙여야지 생성자 만들어줌
    private final MemberRepository memberRepository;

    public AccountDTO findBy(final AccountDTO params){
        AccountDTO entity = memberRepository.findByEmailAndPasswd(params.getAc_id(), params.getAc_pw());
        return entity;
    }

}