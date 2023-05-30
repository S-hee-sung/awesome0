package com.oriental.bitcoin.service;

import com.oriental.bitcoin.model.AccountDTO;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<AccountDTO, Long> {

    AccountDTO findByEmailAndPasswd(final String email, final String passwd);

}