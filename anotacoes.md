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
`window.alert(`\``A soma entra ${n1} e ${n2} é ${s}`\``)`

## Formatação de Strings
Exemplos:  
Quantidade de caracteres da string
- s.length  
Tudo para maiúsculo  
- s.toUpperCase()  
Tudo para minúsculo  
- s.toLowerCase()

## Formatação de Números
Exemplos:  
Fixar o número de casa decimais
- n1.toFixed(2)  
Trocar um caractere por outro  
- n1.toFixed(2).replace('.' , '.') //Troca o ponto '.' por vírgula ','  
Formata a variável de acordo com a moeda selecionada.  
- n1.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'}) //'BRL' ; 'EUR'
