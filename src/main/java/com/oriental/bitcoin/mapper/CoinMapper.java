package com.oriental.bitcoin.mapper;

import com.oriental.bitcoin.model.Prices;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;


@Repository
@Mapper
public interface CoinMapper {

    int UpDatePrice(Prices price);


    Prices getPrice(String coinCode);
}

