<%@ Page Title="Home" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <div class="bgIntro">
        <section id="intro" class="page-section">

            <div class="container">
                <div id="principal">
                    <h1 id="meunome">Henrique Thiago Gonçalves</h1>
                    <p id="servico">Análise e Desenvolvimento de Sistemas</p>
                </div>
            </div>

        </section>
    </div>
    <div class="dvSeparation"></div>
    <div class="bgSobre">
        <section id="sobre" class="page-section">
            <div class="container">
                <div align="center">
                    <a class="aSobre" href="#contato">
                        <div class="img_me" title="Clique para ir aos meios de Contato">
                            
                        </div>
                    </a>
                    <h1 class="sub-titulo">Sobre mim...</h1>
                </div>
                <div class="conteudoAbout">
                    <p class="justify">
                        Atuando como analista Microsiga jr. Cursando 6º Semestre de Análise e Desenvolvimento de Sistemas na Faculdade de Tecnologia de Sorocaba (FATEC).<br />
                        <br />
                        Experiência de 7 anos na área de Tecnologia com conhecimentos em:
                        <br />
                        <br />
                        Liguagens de programação: Visual Basic 6 e VBA, Java, C#, C++, C, ADVPL, Clipper, HTML, CSS.<br />
                        <br />
                        Linguagens de Marcação, Consulta e afins: XML, UML e Transact SQL (DML e DDL).<br />
                        <br />
                        Bancos de Dados: SQL Server, SQLite, MySQL, MS Access, Firebird.
                        <br />
                        <br />
                        Plataformas de Sistemas Operacionais: Windows e Linux; para servidores: Windows Server 2000, 2003,2008 e 2012.
                        <br />
                        <br />
                        Desenvolvimento de aplicativos Windows Forms e Google Android.
                    </p>
                </div>
            </div>

        </section>
    </div>
    <div class="dvSeparation"></div>
    <div class="bgPort">
        <section id="portfolio" class="page-section">
            <div class="container">
                <div id="principal">
                    <h1 class="sub-titulo">Experiências</h1>
                </div>
                <div class="conteudoPort">
                    <figure>
                        <figcaption>Analista Microsiga Jr.</figcaption>
                        <p>
                            Atuando em loco nos clientes como analista de suporte e desenvolvedor de customizações, bem como implementações, atualizações
                        e treinamentos do sistema Microsiga Protheus.
                        </p>
                        <img class="atividades" src="img/proj_wallpaper_1.png" title="Analista Microsiga Jr." />
                    </figure>
                    <figure>
                        <figcaption>Desenvolvimento de Apps Android</figcaption>
                        <p>
                            Desenvolvimento de aplicativos Android utilizando padrões Material Design. Conhecimentos em linguagem JAVA integrando banco de dados nativo SQLite e SQL Server ou MySQL,
                        criação de Serviços executados em Background, Handler Services, Threads, conexão movel de internet, entre outras práticas utilizadas no desenvolvimento mobile
                        para plataforma Android.
                        </p>
                        <img class="atividades" src="img/proj_wallpaper_2.1.png" title="Desenvolvimento de Apps Android" />
                    </figure>
                    <figure>
                        <figcaption>Sustentação de Sistemas VB6</figcaption>
                        <p>
                            Experiência de 4 anos em sustentação de sistemas desenvolvidos na linguagem Visual Basic 6. Com integração com relógios de ponto, utilização de Sockets do Windows,
                        integração com Bancos SQL Server, MySQL, Access, entre outros. Integração com o Pacote Microsift Office.
                        </p>
                        <img class="atividades" src="img/proj_wallpaper_4.png" title="Sustentação de Sistemas VB6" />
                    </figure>
                    <figure>
                        <figcaption>Integração dos aplicativos pacote Microsoft Office</figcaption>
                        <p>
                            Desenvolvimento de Macros VBA (Visual Basic Application) para integração entre os aplicativos do Pacote Microsoft Office, tais como: MS Outlook, MS Excel,
                        MS PowerPoint e MS Access.
                        </p>
                        <img class="atividades" src="img/proj_wallpaper_3.png" title="Desenvolvimento de Macros VBA" />
                    </figure>
                    <figure>
                        <figcaption>Outsourcing de TI</figcaption>
                        <p>
                            Experiência de 7 anos no setor de Tecnologia da Informação, onde pude supervisionar e manter o setor de TI, como Servidores ambiente Windows e Linux (Firewall), Redes Windows,
                        Sistemas Operacionais gerais, Impressoras Deskjets, LaserJets, Plotter, entre outras.
                        </p>
                        <img class="atividades" src="img/dev_wallpaper_3.png" title="Outsourcing de TI" />
                    </figure>
                </div>
            </div>
        </section>
    </div>
    <div class="dvSeparation"></div>
    <section id="contato" class="page-section">
        <div class="bgContato">
            <div class="container">
                <div align="center">
                    <h1 class="sub-titulo">Contato</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div align="center" class="conteudoContato">
                <div class="dadosContato">
                    <i id="location"></i>
                    <a target="_blank" href="https://www.google.com.br/maps/place/Cajuru+do+Sul,+Sorocaba+-+SP/@-23.4035755,-47.3926072,15z/data=!3m1!4b1!4m5!3m4!1s0x94cf5e965c1cabb9:0x51d95a530847f2b5!8m2!3d-23.4035761!4d-47.3838524">
                        Sorocaba, SP</a>                    
                    <br />
                    <i id="phone"></i>
                    <a href="tel:+55996211245">(11) 9 9621-1245</a>
                    <br />
                    <i id="mail"></i>
                    <a target="_blank" href="mailto:henrique.ss@hotmail.com?subject=Primeiro Contato">henrique.ss@hotmail.com</a>
                    <br />
                </div>
                <div class="redesSociais">
                    <a target="_blank" href="http://www.linkedin.com">
                        <img src="img/linkedin-logo.png" /></a>
                    <a target="_blank" href="http://www.facebook.com">
                        <img src="img/facebook-logo.png" /></a>
                    <a target="_blank" href="http://www.twitter.com">
                        <img src="img/twitter-logo.png" /></a>
                </div>
            </div>
        </div>
    </section>

</asp:Content>

