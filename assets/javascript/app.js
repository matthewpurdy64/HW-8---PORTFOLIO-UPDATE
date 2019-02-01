$(document).ready(function () {
    //functions for materialize
    $(".dropdown-trigger").dropdown({
        alignment: 'left',
        coverTrigger: false,
        inDuration: 200,
        outDuration: 400
    });
    //populating content
    function populateIntro() {
        var introTitle = $("<p id='intro-headText'><span class='red-text'>Hi</span>!</p>");
        var introContent = $("<p id='intro-text'>My name is <span class='red-text'>Matthew</span>. <br>I'm studying to become a <span class='red-text'>full stack web developer</span>. <br>Welcome to my portfolio site!</p>");
        var introDiv = $("<div class='content'></div>");
        introDiv.attr("value", 1);
        introDiv.append(introTitle).append(introContent);
        return introDiv;
    }

    function populateAbout() {
        var aboutTitle = $("<p id='about-headText'><span class='red-text'>About Me</span>:</p>");
        var aboutContent = $("<p id='about-text'>I am a passionate learner who is striving to do something great for human kind.  Currently I am a sales representative at Oldcastle Infrastructure and I am studying to be a Full Stack Web Developer.  My life long goals are to enhance A.I. in robotics to help amputees and to run for political office. </p>")
        var aboutDiv = $("<div class='content'></div>");
        aboutDiv.attr("value", 2);
        aboutDiv.append(aboutTitle).append(aboutContent);
        return aboutDiv;
    }

    function populateContact() {
        var contactTitle = $("<p id='contact-headText' class='red-text'>Contact</p>");
        var contactContent1 = $("<p class='contact-text' class='left-align'>Social Media: </p>");
        var contactContent2 = $("<p class='contact-text' class='left-align' style='padding-bottom: 5%'>Email: <br><span class='red-text'><a href='mailto:matthewpurdy64@gmail.com'>matthewpurdy64@gmail.com</a></span></p>")
        var imgrow = $("<div class='row'></div>");
        var githubImgDiv=$("<div class='col s6'><a href='https://github.com/matthewpurdy64' target='_blank'><img class='responsive-img ourImage' src='assets/images/githublogo.jpg'></a></div>");
        var linkedinImgDiv=$("<div class='col s6'><a href='https://www.linkedin.com/in/matthew-purdy-14ab0a95' target='_blank'><img class='responsive-img ourImage' src='assets/images/linkedinlogo.jpg'></a></div>");
        imgrow.append(githubImgDiv).append(linkedinImgDiv);
        var contactDiv = $("<div class='content'></div>");
        contactDiv.attr("value",4);
        contactDiv.append(contactTitle).append(contactContent1).append(imgrow).append(contactContent2);
        return contactDiv;
    }

    function populatePortfolio() {
        var portfolioTitle = $("<p id='portfolio-headText' class='red-text'>Portfolio</p>");
        //make cards from materialize card
        var projcard1 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/beerpeerspic.jpg'><span style='font-size:1.40em;' class='card-title white-text red'>Train Scheduler</span></div><div class='card-content'><p class='card-textcontent'>A train scheduling website, developed to find out when a train will be at the station.</p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='https://matthewpurdy64.github.io/HW-7---Train-Scheduler/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://matthewpurdy64.github.io/HW-7---Train-Scheduler/' target='_blank'>GitHub</a></p></div></div>");
        var projcard2 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/cookieFinderPic.JPG'><span style='font-size:1.40em;' class='card-title white-text red'>Javascript-2_Trivia</span></div><div class='card-content'><p class='card-textcontent'>A web application of trivial fun with Monnie the Pyton characters with Bill and Ted. </p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='https://matthewpurdy64.github.io/H5---Javascript-2_Trivia/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://matthewpurdy64.github.io/H5---Javascript-2_Trivia/' target='_blank'>GitHub</a></p></div></div>");
        var projcard3 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/time4colorboxthumbnail.jpg'><span style='font-size:1.40em;' class='card-title white-text red'>Psychic-Game</span></div><div class='card-content'><p class='card-textcontent'>A mobile application timed game created using Android Studio and Java programming</p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='https://matthewpurdy64.github.io/Psychic-Game/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://matthewpurdy64.github.io/Psychic-Game/' target='_blank'>GitHub</a></p></div></div>");
        var projcard4 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/gifwebpagethumbnail.jpg'><span style='font-size:1.40em;' class='card-title white-text red'>Giftastic Web App</span></div><div class='card-content'><p class='card-textcontent'>A web page using the GIPHY API to generate button categories which then generate gifs</p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='https://matthewpurdy64.github.io/HW-6-ajax/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://matthewpurdy64.github.io/HW-6-ajax/' target='_blank'>GitHub</a></p></div></div>");
        var projcard5 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/triviaquestiongamethumbnail.jpg'><span style='font-size:1.40em;' class='card-title white-text red'>The Crystal Collector</span></div><div class='card-content'><p class='card-textcontent'>A numbers game that adds up points based on the color crystal that is selected created using JavaScript timeout functions and CSS for design</p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='https://matthewpurdy64.github.io/HW-4---Crystrals-Collector-Game/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://matthewpurdy64.github.io/HW-4---Crystrals-Collector-Game/' target='_blank'>GitHub</a></p></div></div>");

        var cardrow = $("<div class='row'></div>");
        cardrow.append(projcard1).append(projcard2).append(projcard3);
        var cardrow2 = $("<div class='row'></div>");
        cardrow2.append(projcard4).append(projcard5);
        var portfolioDiv = $("<div class='content'></div>");
        portfolioDiv.attr("value",3);
        portfolioDiv.append(portfolioTitle).append(cardrow);
        portfolioDiv.append(cardrow2);
        return portfolioDiv;
    }

    function changeDiv(cValue,valueNew,newDiv){
        if(cValue != valueNew){
            $("div[value=" + cValue + "]").fadeOut(1000,function(){
                newDiv.fadeIn(500);
            });
        }
    }
    var currentValue = 1;
    var intro = populateIntro();
    var about = populateAbout();
    var portfolio = populatePortfolio();
    var contact = populateContact();
    $("#attachDiv").append(intro).append(about).append(portfolio).append(contact);
    //when user first loads page, only show intro
    
    about.hide();
    portfolio.hide();
    contact.hide();
    //click functions
    $("#homePage").click(function(){
        changeDiv(currentValue,1,intro);
        currentValue = 1;
    })
    $("#topTitle").click(function(){
        $("#homePage").trigger('click');
    })
    $("#aboutPage").click(function(){
        changeDiv(currentValue,2,about);
        currentValue = 2;
    })
    $("#portfolioPage").click(function(){
        changeDiv(currentValue,3,portfolio);
        currentValue = 3;
    })
    $("#contactPage").click(function(){
        changeDiv(currentValue,4,contact);
        currentValue = 4;
    })
})