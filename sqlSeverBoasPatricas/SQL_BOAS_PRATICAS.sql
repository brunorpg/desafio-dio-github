CREATE TABLE PRODUTOS(
	
	CODIGO		INT NOT NULL,
	DESCRICAO   VARCHAR(50) NOT NULL,
	DATA_VALIDADE DATETIME,
	EAN VARCHAR(15) NOT NULL,
	IND_INATIVO INT NOT NULL DEFAULT 0
)
;

ALTER TABLE PRODUTOS
	ADD CONSTRAINT PK_PRODUTOS
	PRIMARY KEY (CODIGO)
;

CREATE INDEX IDX_PRODUTOS_EAN
			ON PRODUTOS(EAN)
;

INSERT INTO PRODUTOS VALUES (1, 'NOME PRODUTO', GETDATE(), '1234567890', 0);
INSERT INTO PRODUTOS (CODIGO, DESCRICAO, EAN)VALUES (2, 'NOME PRODUTO 2', '1234567890');

CREATE TABLE LOJAS(
	CODIGO		INT NOT NULL,
	NOME        VARCHAR(50) NOT NULL,
	IND_INATIVO INT NOT NULL DEFAULT 0,
	CONSTRAINT PK_LOJAS PRIMARY KEY(CODIGO)		
)
;

INSERT INTO LOJAS (CODIGO, NOME) VALUES(00001,'FILIAL GUARATINGUET�');
INSERT INTO LOJAS (CODIGO, NOME) VALUES(00002,'FILIAL S�O PAULO');
INSERT INTO LOJAS (CODIGO, NOME) VALUES(00003,'FILIAL SANTOS');


CREATE TABLE ESTOQUE(
	CODIGO_PRODUTO	INT NOT NULL,
	CODIGO_FILIAL	INT NOT NULL,
	QUANTIDADE DECIMAL NOT NULL DEFAULT 0,
	CONSTRAINT PK_ESTOQUE PRIMARY KEY(CODIGO_PRODUTO, CODIGO_FILIAL)
)
;

ALTER TABLE ESTOQUE 
	ADD CONSTRAINT FK_ESTOQUE_PRODUTOS
		FOREIGN KEY (CODIGO_PRODUTO)
		REFERENCES PRODUTOS(CODIGO)
;

ALTER TABLE ESTOQUE 
	ADD CONSTRAINT FK_ESTOQUE_LOJAS
		FOREIGN KEY (CODIGO_FILIAL)
		REFERENCES LOJAS(CODIGO)
;

INSERT INTO ESTOQUE(CODIGO_PRODUTO, CODIGO_FILIAL, QUANTIDADE) VALUES(2, 00002, 20);

SELECT E.CODIGO_FILIAL
	, L.NOME
	, E.CODIGO_PRODUTO
	, P.DESCRICAO
	, E.QUANTIDADE
	FROM ESTOQUE E INNER JOIN LOJAS L
	 ON E.CODIGO_FILIAL = L.CODIGO
	INNER JOIN PRODUTOS P
	 ON E.CODIGO_PRODUTO = P.CODIGO










































