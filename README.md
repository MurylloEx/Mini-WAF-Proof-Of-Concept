# Mini-WAF Proof of Concept
* (Português) Prova de conceito criada para mostrar como o Mini-WAF funciona e consegue contornar ataques diretos a vários servidores.

* (English) Proof of Concept created to show how Mini-WAF works and can avoid directly attacks to many servers.

# > Reproduzindo o experimento do Firewall (Mini-WAF)

- (Português) Manual para preparo do ambiente de testes
    1. Requisitos
	    * [1.1 Requisitos de hardware](#en-sec-11)
	    * [1.2 Requisitos de software](#en-sec-12)
    2. Ambiente de reprodução
	    * [2.1 Como preparar o ambiente](#en-sec-21)
	    * [2.2 Como realizar os testes](#en-sec-22)
    3. Resultados da pesquisa
	    * [3.1 Resultados obtidos](#en-sec-31)
        * [3.2 Resultados em ambiente real](#en-sec-32)
    4. Licença do projeto e mantenedores
	    * [4.1 Licença do projeto](#en-sec-41)
	    * [4.2 Mantenedores do projeto](#en-sec-42)

- (English) Guide to prepare the test environment
    1. Requirements
        * [1. Hardware requirements](#pt-sec-11)
	    * [1.2 Software requirements](#pt-sec-12)
    2. Reproduction environment
	    * [2.1 How to prepare the environment](#pt-sec-21)
	    * [2.1 How to perform the tests](#pt-sec-22)
    3. Research results
	    * [3. Results obtained](#pt-sec-31)
        * [3. Results in real environment](#pt-sec-32)
    4. Project license and maintainers
	    * [6. Project license](#pt-sec-41)
	    * [7. Project maintainers](#pt-sec-42)

<div id="en-sec-11"></div>

## 1.1 Requisitos de hardware
O ambiente de testes requer um computador com:

```
[+] 2 GB de memória RAM (ou mais);
[+] Processador i3 ou superior com no mínimo 2.4 GHz de frequência;
[+] Disco rígido ou SSD com espaço suficiente para executar uma imagem linux de 16 GB (para melhor desempenho recomenda-se 24GB);
[+] Acesso à conexão cabeada com a internet;
[+] Monitor, mouse e teclado para operar o sistema.
```

<div id="en-sec-12"></div>

## 1.2 Requisitos de software

```
[+] Sistema operacional Windows 7 ou superior / Linux kernel 3.2 ou superior;
[+] Navegador com acesso a internet (de preferência Chrome, Chromium, Mozilla ou Opera);
[+] Oracle VM VirtualBox (https://www.virtualbox.org/wiki/Downloads)
[+] Utilitário de descompressão de arquivos zipados (WinRAR, 7Zip, por exemplo).
```

<div id="en-sec-21"></div>

## 2.1 Como preparar o ambiente

Após certifica-se de que todos os requisitos de hardware e software foram atendidos, realize o download da imagem mais recente da máquina virtual contendo os aparatos para o experimento de segurança e importe-o em sua Oracle VM VirtualBox. O processo de importação da máquina Virtual pode ser feito da seguinte forma:

## 1 - Execute a Oracle VM VirtualBox

<p align="center">
	<img src="https://i.imgur.com/vPQGyaU.png"/>
</p>

## 2 - Clique em "Importar Appliance..."

<p align="center">
	<img src="https://i.imgur.com/Cln40SA.png"/>
</p>

## 3 - Clique no botão imediatamente à direita da caixa de texto e selecione a imagem baixada anteriormente com a extensão ".ova".

<p align="center">
	<img src="https://i.imgur.com/P2PYPYo.png"/>
</p>

## 4 - Concorde com a licença do Appliance e importe a máquina virtual

<p align="center">
	<img src="https://i.imgur.com/sm14mYr.png">
</p>

## 5 - Após a importação, a máquina virtual estará pronta para ser executada. 

**OBS: A senha do sistema é: sbseg2020**

<p align="center">
	<img src="https://i.imgur.com/GMCcqPh.png"/>
</p>

<div id="en-sec-22"></div>

## 2.2 Como realizar os testes



<div id="en-sec-31"></div>

## 3.1 Resultados obtidos

<div id="en-sec-32"></div>

## 3.2 Resultados em ambiente real

<div id="en-sec-41"></div>

## 4.1 Licença do projeto

##### O projeto está sendo mantido sob a licença MIT e pode ser encontrada [aqui](). Aceitamos contribuições de qualquer pessoa no projeto bem como sugestões e relatórios de bugs que também serão muito bem vindos.

<div id="en-sec-42"></div>

## 4.2 Mantenedores do projeto
##### Esse projeto é mantido por Muryllo Pimenta de Oliveira - [GitHub Profile](https://github.com/MurylloEx/), atualmente orientado pelo professor da Universidade de Pernambuco Carlo Marcelo Revoredo - [GitHub Profile](https://github.com/cmrevoredo/).


<div id="pt-sec-11"></div>
<div id="pt-sec-12"></div>
<div id="pt-sec-21"></div>
<div id="pt-sec-22"></div>
<div id="pt-sec-31"></div>
<div id="pt-sec-32"></div>
<div id="pt-sec-41"></div>
<div id="pt-sec-42"></div>