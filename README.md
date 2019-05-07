# Validador de Cartão de Crédito v.1.0.2

**Esta biblioteca destina-se à verificação de números de cartões de crédito, retornando true para um cartão válido, e false para um inválido.**
Na versão atual a biblioteca verifica números de cartões de crédito tanto em números quanto em string. O usuário também pode inserir o número do cartão com espaços a cada 4 dígitos, pois a verificação acontece normalmente.

## Como instalar:

```shell

$  npm install lib-credit-card

```

## Como utilizar:

### Validando um cartão de crédito:

```node

> const validate = require("lib-credit-card");
> validate(5156701090127154)
> // returns true

```

## roadmap oficial do projeto

#### versão 1.0.0 (released)
- funcionalidades: verificação da validade de cartões de crédito através de seus números.
- aceitando input de números e strings.
