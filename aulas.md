# Módulo 2 - conceitos adquiridos #

- Criando aplicação com typescript;
- Configuração de eslint, commitlint, commitizen;
- ts-node-dev;
- conceitos de SOLID;
- Upload de arquivos com o MULTER;
- Documentação com o swagger;
-----------------------------------------------

SOLID

S => SRP: Single Responsability Principle (Princípio da Responsabilidade Única)
Cada arquivo tem sua função. 
PS: Um módulo ele deve ter 1 e apenas 1 razão para ele poder mudar.


Exemplos:
  - Rotas => Recebe uma request, chama um serviço específico e retorna a
  a informação retornada pelo serviço.
