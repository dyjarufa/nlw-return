# SOLID

1. Single Responsibility  Principle
2. Open/Close Principle
3. Liskov Substitution Principle
4. Interface Segregation Principle
5. Depedency Inversion Principle

---------------------------------------------------------------

1. Cada Classe tem uma responsabilidade única
   - cada classe precisa é responsável por uma funcionalidade

<p>

2. As classes da aplicação devem ser abertas para extensão e fechadas para modificação:
   - Se uma classe A faz uma ação, e outra classe B estende de A, a classe B não deveria modificar a funcionalidade da classe A
  
<p>

3.  Nós podemos substituir uma classe pai por uma herança dela e tudo continuar funcionando:
    - Aa heranças devem sempre incorporar as funcionalidades da classe pai

4. Implementar interfaces que possuem funcionalidades específicas.
   -  Impressora implements Imprimir, Scanner, Digitalizar

<p>

5. Forma de inverter as dependências da nossa classe. 
   -  Caso eu tenha uma classe/função, e ela depende de algo externo(nodemailer). ao invés dela solicitar as dependência que ela precisa, o contexto externo a ela informa ou passa as dependências que ela irá usar.

   