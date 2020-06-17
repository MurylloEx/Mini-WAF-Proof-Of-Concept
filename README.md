# Mini-WAF Proof of Concept
* (Português) Prova de conceito criada para mostrar como o Mini-WAF funciona e consegue contornar ataques diretos a vários servidores.

* (English) Proof of Concept created to show how Mini-WAF works and can avoid directly attacks to many servers.

# > Reproduzindo o experimento do Firewall (Mini-WAF)

- (Português) Manual para preparo do ambiente de testes
    1. Requisitos
	    * [1.1 Requisitos de hardware](#pt-sec-11)
	    * [1.2 Requisitos de software](#pt-sec-12)
    2. Ambiente de reprodução
	    * [2.1 Como preparar o ambiente](#pt-sec-21)
	    * [2.2 Como realizar os testes](#pt-sec-22)
    3. Resultados da pesquisa
	    * [3.1 Resultados obtidos](#pt-sec-31)
        * [3.2 Resultados em ambiente real](#pt-sec-32)
    4. Licença do projeto e mantenedores
	    * [4.1 Licença do projeto](#pt-sec-41)
	    * [4.2 Mantenedores do projeto](#pt-sec-42)

- (English) Guide to prepare the test environment
    1. Requirements
        * [1.1 Hardware requirements](#en-sec-11)
	    * [1.2 Software requirements](#en-sec-12)
    2. Reproduction environment
	    * [2.1 How to prepare the environment](#en-sec-21)
	    * [2.1 How to perform the tests](#en-sec-22)
    3. Research results
	    * [3.1 Results obtained](#en-sec-31)
        * [3.2 Results in real environment](#en-sec-32)
    4. Project license and maintainers
	    * [4.1 Project license](#en-sec-41)
	    * [4.2 Project maintainers](#en-sec-42)

<div id="pt-sec-11"></div>

## 1.1 Requisitos de hardware
O ambiente de testes requer um computador com:

```
[+] 2 GB de memória RAM (ou mais);
[+] Processador i3 ou superior com no mínimo 2.4 GHz de frequência;
[+] Disco rígido ou SSD com espaço suficiente para executar uma imagem linux de 16 GB (para melhor desempenho recomenda-se 24GB);
[+] Acesso à conexão cabeada com a internet;
[+] Monitor, mouse e teclado para operar o sistema.
```

<div id="pt-sec-12"></div>

## 1.2 Requisitos de software

```
[+] Sistema operacional Windows 7 ou superior / Linux kernel 3.2 ou superior;
[+] Navegador com acesso a internet (de preferência Chrome, Chromium, Mozilla ou Opera);
[+] Oracle VM VirtualBox (https://www.virtualbox.org/wiki/Downloads)
[+] Utilitário de descompressão de arquivos zipados (WinRAR, 7Zip, por exemplo).
```

<div id="pt-sec-21"></div>

## 2.1 Como preparar o ambiente

Após certifica-se de que todos os requisitos de hardware e software foram atendidos, realize o download da imagem mais recente da máquina virtual contendo os aparatos para o experimento de segurança e importe-o em sua Oracle VM VirtualBox. O processo de importação da máquina Virtual pode ser feito da seguinte forma:

### 1 - Execute a Oracle VM VirtualBox

<p align="center">
	<img src="https://i.imgur.com/vPQGyaU.png"/>
</p>

### 2 - Clique em "Importar Appliance..."

<p align="center">
	<img src="https://i.imgur.com/Cln40SA.png"/>
</p>

### 3 - Clique no botão imediatamente à direita da caixa de texto e selecione a imagem baixada anteriormente com a extensão ".ova".

<p align="center">
	<img src="https://i.imgur.com/P2PYPYo.png"/>
</p>

### 4 - Concorde com a licença do Appliance e importe a máquina virtual

<p align="center">
	<img src="https://i.imgur.com/sm14mYr.png">
</p>

### 5 - Após a importação, a máquina virtual estará pronta para ser executada. 

**OBS: A senha do sistema é: sbseg2020**

<p align="center">
	<img src="https://i.imgur.com/GMCcqPh.png"/>
</p>

<div id="pt-sec-22"></div>

## 2.2 Como realizar os testes



<div id="pt-sec-31"></div>

## 3.1 Resultados obtidos

<div id="pt-sec-32"></div>

## 3.2 Resultados em ambiente real

### 1. Burlando a proteção da Cloudflare e obtendo o endereço de IP real do servidor (ferramenta [CloudFail](https://github.com/m0rtem/CloudFail) utilizada no processo).

<p align="center">
	<img src="https://i.imgur.com/DmgvGko.png"/>
</p>

### 2. Realizando uma conexão SSH com o servidor alvo de domínio particular e estabelecendo um túnel TCP entre as portas 5901 do servidor remoto e local para posterior uso do VNC.

<p align="center">
	<img src="https://i.imgur.com/MTY6ZTL.png"/>
</p>

### 3. De posse do endereço de IP real do servidor (191.240.183.32), iniciando uma simulação de injeção de SQL no parâmetro GET http://191.240.183.32?id= (ferramenta [Sqlmap](https://github.com/sqlmapproject/sqlmap) usada no processo).

<p align="center">
	<img src="https://i.imgur.com/kdoHta3.png"/>
</p>

### 4. Após o tunelamento SSH concluído nas portas 5901, conectando-se ao servidor VNC remoto e visualizando o Minimalistic WAF contendo mais de 90% dos ataques realizados e rejeitando as conexões de entrada com status HTTP 403.

Nessa etapa, foram usados payloads de level 1 e level 2, obtendo respectivamente os seguintes números de conexões bloqueadas:

<center>

| Nível | Requisições |  Não bloqueadas | Bloqueadas |
|:-----:|:-----------:|:---------------:|:----------:|
| 1     |     78      |        5        |     73     |
| 2     |     372     |        22       |     350    |

</center>

<p align="center">
	<img src="https://i.imgur.com/qkvHrtx.png"/>
</p>

### [+] Vídeo do experimento

<center>

[<img src="https://img.youtube.com/vi/NjGa_2IjXH8/maxresdefault.jpg" width="50%">](https://youtu.be/NjGa_2IjXH8)

</center>

<div id="pt-sec-41"></div>

## 4.1 Licença do projeto

##### O projeto está sendo mantido sob a licença MIT e pode ser encontrada [aqui](https://github.com/MurylloEx/Mini-WAF). Aceitamos contribuições de qualquer pessoa no projeto bem como sugestões e relatórios de bugs que também serão muito bem vindos.

<div id="pt-sec-42"></div>

## 4.2 Mantenedores do projeto
##### Esse projeto é mantido por Muryllo Pimenta de Oliveira - [GitHub Profile](https://github.com/MurylloEx/), atualmente orientado pelo professor da Universidade de Pernambuco Carlo Marcelo Revoredo - [GitHub Profile](https://github.com/cmrevoredo/).


<div id="en-sec-11"></div>

## 1.1 Hardware requirements

The test environment requires a computer with:

```
[+] 2 GB of RAM (or more);
[+] Processor i3 or higher with a minimum frequency of 2.4 GHz;
[+] Hard disk or SSD with enough space to run a 16 GB linux image (24 GB is recommended for best performance);
[+] Access to the wired internet connection;
[+] Monitor, mouse and keyboard to operate the system.
```

<div id="en-sec-12"></div>

## 1.2 Software requirements


```
[+] Operating system Windows 7 or higher / Linux kernel 3.2 or higher;
[+] Browser with internet access (preferably Chrome, Chromium, Mozilla or Opera);
[+] Oracle VM VirtualBox (https://www.virtualbox.org/wiki/Downloads)
[+] Zip file decompression utility (WinRAR, 7Zip, for example).
```

<div id="en-sec-21"></div>

## 2.1 How to prepare the environment

After making sure that all hardware and software requirements have been met, download the latest image of the virtual machine containing the devices for the security experiment and import it into your Oracle VM VirtualBox. The Virtual machine import process can be done as follows:

## 1 - Run the Oracle VM VirtualBox

<p align="center">
	<img src="https://i.imgur.com/vPQGyaU.png"/>
</p>

## 2 - Click on "Importar Appliance..."

<p align="center">
	<img src="https://i.imgur.com/Cln40SA.png"/>
</p>

## 3 - Click the button immediately to the right of the text box and select the previously downloaded image with the extension ".ova".

<p align="center">
	<img src="https://i.imgur.com/P2PYPYo.png"/>
</p>

## 4 - Agree to the Appliance license and import the virtual machine

<p align="center">
	<img src="https://i.imgur.com/sm14mYr.png">
</p>

## 5 - After import, the virtual machine will be ready to run 

**OBS: The password of the system is: sbseg2020**

<p align="center">
	<img src="https://i.imgur.com/GMCcqPh.png"/>
</p>

<div id="en-sec-22"></div>



<div id="en-sec-22"></div>
<div id="en-sec-31"></div>
<div id="en-sec-32"></div>

## 3.2 Results in real environment

### 1. Bypassing the protection of Cloudflare and obtaining the real IP address of the server (tool [CloudFail](https://github.com/m0rtem/CloudFail) used in the process).

<p align="center">
	<img src="https://i.imgur.com/DmgvGko.png"/>
</p>

### 2. Making an SSH connection with the target server of private domain and establishing a TCP tunnel between ports 5901 of the remote and local server for later use of VNC.

<p align="center">
	<img src="https://i.imgur.com/MTY6ZTL.png"/>
</p>

### 3. With the real IP address of the server (191.240.183.32), starting a SQL injection simulation in the GET parameter http://191.240.183.32?id= (tool [Sqlmap](https://github.com/sqlmapproject/sqlmap) used in the process).

<p align="center">
	<img src="https://i.imgur.com/kdoHta3.png"/>
</p>

### 4. After the SSH tunneling completed on ports 5901, connecting to the remote VNC server and viewing the Minimalistic WAF containing over 90% of the attacks carried out and rejecting incoming connections with HTTP 403 status.

In this step, level 1 and level 2 payloads were used, obtaining respectively the following numbers of blocked connections:

| Level | 	Requests  |   Non-blocked   |   Blocked  |
|:-----:|:-----------:|:---------------:|:----------:|
|   1   |     78      |        5        |     73     |
|   2   |     372     |        22       |     350    |

<p align="center">
	<img src="https://i.imgur.com/qkvHrtx.png"/>
</p>

### [+] Video of experiment

<center>

[<img src="https://img.youtube.com/vi/NjGa_2IjXH8/maxresdefault.jpg" width="50%">](https://youtu.be/NjGa_2IjXH8)

</center>

<div id="en-sec-41"></div>

## 4.1 License of project

##### The project is being maintained under the MIT license and can be found [here] (https://github.com/MurylloEx/Mini-WAF). We accept contributions from anyone on the project as well as suggestions and bug reports that are also very welcome.

<div id="en-sec-42"></div>

## 4.2 Maintainers of project

#### This project is maintained by Muryllo Pimenta de Oliveira - [GitHub Profile](https://github.com/MurylloEx/), currently supervised by professor at the University of Pernambuco Carlo Marcelo Revoredo - [GitHub Profile](https://github.com/cmrevoredo/).