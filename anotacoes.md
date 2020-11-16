# Anotações de JS
Repositório para anotações e dicas do curso.

## Conversão
Funções para conversões de um tipo para outro.
Exemplos:
- Number(n)
- Number.parseInt(n)
- Number.parseFloat(n)

- String(n)
- n.toString()

## Template String
Utiliza de `${}` (placeholder) para adicionar variáveis a string.
Para que o template string funcione é necessário estar entre \` \` (crase).
Exemplo:
`window.alert(`\``A soma entre ${n1} e ${n2} é ${s}`\``)`

## Formatação de Strings
Exemplos:  
- s.length // Quantidade de caracteres da string
- s.toUpperCase() // Tudo para maiúsculo
- s.toLowerCase() // Tudo para minúsculo

## Formatação de Números
Exemplos:  
- n1.toFixed(2) // Fixar o número de casas decimais
- n1.toFixed(2).replace('.' , '.') // Trocar um caractere por outro. Como ponto '.' por vírgula ','
- n1.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'}) // Formata a variável de acordo com a moeda selecionada. Exemplo: 'BRL' ou 'EUR'

## Operadores  
### - ARITMÉTICOS: utilizados para cálculos  
`+  -  *  /  %  **`  

### Ordem de precedência:  
1. ( ) ;  
2. ** ;  
3. *, /, % ;  
4. +, -  
  
### - ATRIBUIÇÃO: atribuir valores a variáveis  
`var n = 3` // O `'='` é um operador de atribução  
  
### Auto-atribuição:  
`n = n + 4`  
  
### Simplificação de auto-atribuição:  
`n = n + 4` -> `n += 4`  
`n = n / 4` -> `n /= 4`  
`n = n ** 2` -> `n **= 2`  
`n = n % 5` -> `n %= 5`  
  
### Incremento/Decremento:  
`x = x + 1` -> `x++` (Exemplo de PRÉ-incremento!)  
`x = x + 1` -> `++a` (Exemplo de PÓS-incremento!)  
`x = x - 1` -> `x--` (Exemplo de PRÉ-decremento!)  
`x = x - 1` -> `--x` (Exemplo de PÓS-decremento!)  

### - RELACIONAIS: o resultado de operações relacionais é um valor booleano, ou seja, verdadeiro ou falso.  
`5 > 2 -> true`  
`8 < 4 -> false`  
`8 >= 8 -> true`  
`9 <= 7 -> false`  
`5 == 5 -> true`  
`4 != 4 -> false`  
  
### Operadores relacionais de Identidade:  
O sinal de igualdade '==' não testa o tipo do valor.  
`5 == 5 -> true`  
`5 == '5' -> true`  
Já o operador de Identidade (igualdade restrita) '===' testa se são o mesmo valor e o mesmo tipo.  
`5 === '5' -> false`  
`5 === 5 -> true`  
  
### - LÓGICOS:
1.`!` negação //Unário  
2.`&&` conjunção //Binário (dois valores lógicos)  
3.`||` disjunção //Binário (dois valores lógicos)  
  
### - TERNÁRIO: junta três operandos.  
expressão `?` opção 1 `:` opção 2  
Exemplo:  
`media >= 7.0 ? 'APROVADO' : 'REPROVADO'` // Se atender a condição retorna aprovado, se não, reprovado.  

### Ordem de precedência dos operadores:  
1. Aritméticos  
2. Relacionais  
3. Lógicos  

## DOM
Document Object Model  
Presente nos navegadores.  

### Árvore DOM
- Raiz: window (como é chamada a raiz dentro do navegador)  
	- location  
	- document
		- html
			- head
			- body
	- history 

### Selecionando
Selecionando elementos para navegar dentro da árvore DOM  
- por Marca
	- `getElementsByTagName()` // Seleciona mais de um objeto
- por ID
	- `getElmentById()`
- por Nome
	- `getElementsByName()`
- por Classe
	- `getElementsByClassName()`
- por Seletor
	- `querySelector()`
	- `querySelectorAll()`
