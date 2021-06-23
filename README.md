#instala as depenências do typescript para modo de desenvolvimento

yarn add typescript -D

#Iniciar TS para rodar o typescript

yarn tsc --init

#Convere os arquivos ts para js

yarn tsc 

#Add yarn para criação do servidor

yarn add express

#Add as bibliotecas de tipos do express

yarn add @types/express -D

#Add uma dependência que fica rodando o yarn tsc autoamticamente, assim o ts será convertido sempre para js

yarn add ts-node-dev -D

=====================


REGRAS 

- Cadastro de usuário
    -[] Email único e não nulo
    
- Cadastro de TAG
    -[] nome único e não nulo
    -[] somente adm úpodem criar
    -[] somente cadastrar para usuários válidos e diferentes do current

- Cadastro de elogios
    -[] não pode elogio para si
    -[] somente cadastrar para usuários válidos e diferentes do current

