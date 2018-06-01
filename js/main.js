$(document).ready(function(){
    
    
    $(".burger").click(function(){
        $('.navOpen').toggle(),
        $('.burger').toggleClass('close')  
    })
    $(".navOpen").find("a").click(function(){
        $('.navOpen').css('display',"none"),
        $('.burger').toggleClass('close') 
    })
    
   
    
  if($(window).width() < 500) {
        var left=($(".pharmacy").position().left) - ($(".pharmacy").width()/7);
        var top=$(".pharmacy").position().top;
        $('.drop').css('left',left);
        $('.drop').css('top',top-50);
  }else{
       var left=($(".pharmacy").position().left) - ($(".pharmacy").width()/7);
    var top=$(".pharmacy").position().top;
    $('.drop').css('left',left);
        $('.drop').css('top',top-50);
  }
    
    
    
  $('.hover>*').on('click', function(){
      var currentAttrValue = $(this).children('a').attr('href');
      $('.list ' + currentAttrValue).slideDown(100).siblings().slideUp(100);
      $(this).parent('.hover').addClass('active').siblings().removeClass('active');
      if($(window).width() < 500) {
          left=($(this).position().left) - ($(".market").width()/7);
          top=$(this).position().top;
          $('.drop').css('left',left);
          $('.drop').css('top',top-50);
      }else{
          left=($(this).position().left) - ($(".market").width()/7);
          top=$(this).position().top;
          $('.drop').css('left',left);
          $('.drop').css('top',top-80);
      }
      
  });

    
    

    /*
    $('.market').click(function(){
        $('.icons >.hover').css("backgroundColor","inherit"),
        $('.icons >.hover').children().css("border","0"),
        $('.icons >.hover:nth-child(1)').css("backgroundColor","#9ab068"),
        $('.icons >.hover:nth-child(1)').children().css("border","0"),
        $('.listMarket').css("display","block"),
        $('.listBook').css("display","none"),
        $('.listPharmacy').css("display","none"),
        $('.listBoy').css("display","none"),
        $('.listBarbell').css("display","none"),
        $('.listAtm').css("display","none"),
        $('.listArrow').css("display","none"),
        left=($(".market").position().left) - ($(".market").width()/7);
        top=$(".market").position().top;
        $('.drop').css('left',left);
        $('.drop').css('top',top-80);
    
    });
    
     $('.book').click(function(){
        $('.icons >.hover').css("backgroundColor","inherit"),
        $('.icons >.hover').children().css("border","0"),
        $('.icons >.hover:nth-child(2)').css("backgroundColor","#9ab068"),
        $('.icons >.hover:nth-child(2)').children().css("border","0")
        $('.listMarket').css("display","none"),
        $('.listBook').css("display","block"),
        $('.listPharmacy').css("display","none"),
        $('.listBoy').css("display","none"),
        $('.listBarbell').css("display","none"),
        $('.listAtm').css("display","none"),
        $('.listArrow').css("display","none"),
        left=($(".book").position().left) - ($(".book").width()/7);
        top=$(".book").position().top;
        $('.drop').css('left',left);
        $('.drop').css('top',top-80);
    });
    
        $('.pharmacy').click(function(){
            $('.icons >.hover').css("backgroundColor","inherit"),
            $('.icons >.hover').children().css("border","0"),
            $('.icons >.hover:nth-child(3)').css("backgroundColor","#9ab068"),
            $('.icons >.hover:nth-child(3)').children().css("border","0")
            $('.listMarket').css("display","none"),
            $('.listBook').css("display","none"),
            $('.listPharmacy').css("display","flex"),
            $('.listBoy').css("display","none"),
            $('.listBarbell').css("display","none"),
            $('.listAtm').css("display","none"),
            $('.listArrow').css("display","none"),
            left=($(".pharmacy").position().left) - ($(".pharmacy").width()/7);
            top=$(".pharmacy").position().top;
            $('.drop').css('left',left);
            $('.drop').css('top',top-80);
    });
    
    $('.boy').click(function(){
            $('.icons >.hover').css("backgroundColor","inherit"),
            $('.icons >.hover').children().css("border","0"),
            $('.icons >.hover:nth-child(4)').css("backgroundColor","#9ab068"),
            $('.icons >.hover:nth-child(4)').children().css("border","0")
            $('.listMarket').css("display","none"),
            $('.listBook').css("display","none"),
            $('.listPharmacy').css("display","none"),
            $('.listBoy').css("display","block"),
            $('.listBarbell').css("display","none"),
            $('.listAtm').css("display","none"),
            $('.listArrow').css("display","none"),
            left=($(".boy").position().left) - ($(".boy").width()/7);
            top=$(".boy").position().top;
            $('.drop').css('left',left);
            $('.drop').css('top',top-80);
    });
    
    $('.barbell').click(function(){
            $('.icons >.hover').css("backgroundColor","inherit"),
            $('.icons >.hover').children().css("border","0"),
            $('.icons >.hover:nth-child(5)').css("backgroundColor","#9ab068"),
            $('.icons >.hover:nth-child(5)').children().css("border","0")
            $('.listMarket').css("display","none"),
            $('.listBook').css("display","none"),
            $('.listPharmacy').css("display","none"),
            $('.listBoy').css("display","none"),
            $('.listBarbell').css("display","block"),
            $('.listAtm').css("display","none"),
            $('.listArrow').css("display","none"),
            left=($(".barbell").position().left) - ($(".barbell").width()/7);
            top=$(".barbell").position().top;
            $('.drop').css('left',left);
            $('.drop').css('top',top-80);
    });
    
    $('.atm').click(function(){
            $('.icons >.hover').css("backgroundColor","inherit"),
            $('.icons >.hover').children().css("border","0"),
            $('.icons >.hover:nth-child(6)').css("backgroundColor","#9ab068"),
            $('.icons >.hover:nth-child(6)').children().css("border","0")
            $('.listMarket').css("display","none"),
            $('.listBook').css("display","none"),
            $('.listPharmacy').css("display","none"),
            $('.listBoy').css("display","none"),
            $('.listBarbell').css("display","none"),
            $('.listAtm').css("display","block"),
            $('.listArrow').css("display","none"),
            left=($(".atm").position().left) - ($(".atm").width()/7);
            top=$(".atm").position().top;
            $('.drop').css('left',left);
            $('.drop').css('top',top-80);
    });
    
       $('.arrow').click(function(){
            $('.icons >.hover').css("backgroundColor","inherit"),
            $('.icons >.hover').children().css("border","0"),
            $('.icons >.hover:nth-child(7)').css("backgroundColor","#9ab068"),
            $('.icons >.hover:nth-child(7)').children().css("border","0")
            $('.listMarket').css("display","none"),
            $('.listBook').css("display","none"),
            $('.listPharmacy').css("display","none"),
            $('.listBoy').css("display","none"),
            $('.listBarbell').css("display","none"),
            $('.listAtm').css("display","none"),
            $('.listArrow').css("display","block"),
            left=($(".arrow").position().left) - ($(".arrow").width()/7);
            top=$(".arrow").position().top;
            $('.drop').css('left',left);
            $('.drop').css('top',top-80);

    }); 
        
    
    */
        
      
    
    $(".handleNext").click(
    function(){
        if ($(".mainContent").css("display") !== "none") {
            
            $('.mainContent').css("display","none"),
            $('.mainContent2').css("display","flex"),
            $(".main aside h3").text("Privalumas nr. 2")
            
        } else if ($(".mainContent2").css("display") !== "none") {
            
            $('.mainContent2').css("display","none"),
            $('.mainContent3').css("display","flex"),
            $(".main aside h3").text("Privalumas nr. 3")
            
        } else if ($(".mainContent3").css("display") !== "none") {
            
            $('.mainContent3').css("display","none"),
            $('.mainContent').css("display","flex"),
            $(".main aside h3").text("Privalumas nr. 1")}
        
        });
    
    $(".handleBack").click(
    function(){
        if ($(".mainContent").css("display") !== "none") {
            
            $('.mainContent').css("display","none"),
            $('.mainContent3').css("display","flex"),
            $(".main aside h3").text("Privalumas nr. 3")
            
        } else if ($(".mainContent3").css("display") !== "none") {
            
            $('.mainContent3').css("display","none"),
            $('.mainContent2').css("display","flex"),
            $(".main aside h3").text("Privalumas nr. 2")
            
        }else if ($(".mainContent2").css("display") !== "none") {
            
            $('.mainContent2').css("display","none"),
            $('.mainContent').css("display","flex"),
            $(".main aside h3").text("Privalumas nr. 1")}
        
        });
   

    
     $('input[name="tel"]').keyup(function(e){
        this.value = this.value.replace(/[^0-9\.]/g, '');
        });
    var email= /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?          \^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
    
    $('.submit').click(function(){
        function emailValid(){
            if($('input[name="email"]').val()==""){$('.errorEmail').text('Can not be empty');  return false;}
            else if(!email.test($('input[name="email"]').val())){$('.errorEmail').text('must be email'); return false;}
            else if($('input[name="email"]').val()!=""){$('.errorEmail').text(''); return true}
        }
        function emailTel(){
            if($('input[name="tel"]').val()==""){$('.errorTel').text('Can not be empty');return false;}
            else if($('input[name="tel"]').val()!=""){$('.errorTel').text('');return true}
        }
        function emailText(){
            if($('input[name="text"]').val()==""){$('.errorText').text('Can not be empty')}
            else if($('input[name="text"]').val()==="Rezervuoju laiką susitikimui x d. x val."){$('.errorText').text('Please write time and day');return false}
            else if($('input[name="text"]').val()!=""){$('.errorText').text('');return true}
            
        }
            
        
        if(emailValid()==true && emailTel()==true && emailText()==true){
            return true;
        }else{
            return false;
        }
        

    })
    
    
})

    
  