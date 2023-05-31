package com.oriental.bitcoin.mapper;

import com.oriental.bitcoin.model.AccountDTO;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;


@Repository
@Mapper
public interface AccountMapper {

    AccountDTO getAccountById(String ac_id);

    int accountRegDoIt(AccountDTO reqAccout);
//
//    AccountDTO getAccountById(AccountDTO a);
//
//    int getIdCheck(String ac_id2);
//
//    String GoFindId(Map<String, String> findId);
//
//    AccountDTO selectAccount(String ac_id);
//
//    int updatePw(AccountDTO a);
//
//    AccountDTO getAccountByEmail(String email);
//
//    int addUserSession(AccountDTO a2);
//
//    AccountDTO getAccountByCookie(AccountDTO loginDTO);
//
//    String doubleCheckPw(String ac_id);
//
//    int accountUpdateProfile(AccountDTO ac);
//
//    int deleteUserDoIt(String ac_id);
//
//    int updatePw(Map<String, String> resetPw);



}

