### PRIMEIRO EXERCÍCIO

1 - Navegue até a pasta unix_tests ;

    cd unix_tests

2 - Crie um arquivo texto pelo terminal com o nome skills2.txt e adicione os valores Internet , Unix e Bash , um em cada linha.

    cat > skills2.txt
    Internet
    Unix
    Bash

3 - Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal. 

    cat >> skills.txt
    cada
    macaco
    no
    seu
    galho
    cat skills.txt | sort

4 - Conte quantas linhas tem o arquivo skills2.txt .

    wc -l skills.txt

5 - Crie um arquivo chamado top_skills.txt usando o skills2.txt , contendo as 3 primeiras skills em ordem alfabética.

    sort skills2.txt | head -3 | cat >> top_skills2.txt

6 - Crie um novo arquivo chamado phrases2.txt pelo terminal e adicione algumas frases de sua escolha.

    cat > phrases2.txt
    o céu é azul
    a grama é verde
    o sol é quente

7 -Conte o número de linhas que contêm as letras br .

    grep "br" phrases2.txt | wc -l

8 - Conte o número de linhas que não contêm as letras br .

    grep -v "br" phrases2.txt | wc -l

9 - Adicione dois nomes de países ao final do arquivo phrases2.txt .

    cat >> phrases2.txt
    china
    peru

10 - Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos phrases2.txt e countries.txt
11 - Ordene o arquivo bunch_of_things.txt .

    cat phrases2.txt countries.txt |sort > bunch_of_things.txt


### REQUISITOS DO SEGUNDO EXERCÍCIO

1 - Navegue até a pasta unix_tests ;

    cd unix_tests

2 - Rode o comando ls -l e veja quais as permissões dos arquivos;

    ls -l

3 - Mude a permissão do arquivo bunch_of_things.txt para que todos os usuários possam ter acesso à leitura e escrita, e verifique se está correto com o comando ls -l ;

Resultado esperado: -rw-rw-rw- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt

    chmod 666 bunch_of_things.txt

4 - Tire a permissão de escrita do arquivo bunch_of_things.txt para todos os usuários, verifique se está correto com o comando ls -l ;

Resultado esperado: -r--r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt

    chmod 444 bunch_of_things.txt 

5 - Volte à permissão do arquivo bunch_of_things.txt para a listada inicialmente utilizando o comando chmod 644 bunch_of_things.txt .

Resultado esperado: -rw-r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt

    chmod 644 bunch_of_things.txt 


### REQUISITOS DO TERCEIRO EXERCÍCIO


1 - Liste todos os processos;

    ps

2 - Agora use o comando sleep 30 & ;

    sleep 30 &

3 - Use a listagem de processos para encontrar o PID do processo que está executando o comando sleep 30 e termine a sua execução (mate o processo) ;

    ps
    kill 45021  //número do processo

4 - Execute novamente o comando sleep 30 , mas agora sem o & . Depois, faça com que ele continue executando em background;

    sleep 30
    ^Z //CTRL+Z
    bg

5 - Crie um processo em background que rode o comando sleep por 300 segundos.

    sleep 300 &

6 - Crie mais dois processos que rodem o comando sleep por 200 e 100 segundos, respectivamente.

Você deve criá-los em foreground (sem usar o & ) e suspendê-los (apertando ctrl+z ) após cada um começar a executar.

    sleep 200
    sleep 100
    ^Z //CTRL+Z

7 - Verifique que apenas o processo sleep 300 está em execução com o comando jobs . Suspenda a execução desse processo.

Você vai precisar trazer o processo para foreground ( fg ) e suspendê-lo ( ctrl+z ), ou enviar um sinal.

    jobs
    fg
    ^z //CTRL+C

8 - Retome a execução do processo sleep 100 em background com o comando bg .

    bg %3

9- Termine a execução de todos os processos sleep (mate os processos) .

    kill numeros dos processos ou kill -9 números dos processos