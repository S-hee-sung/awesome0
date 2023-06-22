CREATE TABLE COINS
(COINCODE VARCHAR2(100 char) PRIMARY KEY,
 COINNAME VARCHAR2(100 char));


INSERT INTO COINS VALUES('XRP', 'Ripple');
INSERT INTO COINS VALUES('DOGE', 'DogeCoin');

CREATE TABLE PRICES (
    PNUM INT PRIMARY KEY,
    COINCODE VARCHAR2(10 char) NOT NULL,
    PRICE VARCHAR2(1000 char) not null,
    VOLUME VARCHAR2(1000 char) not null,
    "DATE" DATE not null
);

create sequence prices_seq;

drop table COINS;
drop table PRICES;

select * from COINS;
select * from PRICES;
