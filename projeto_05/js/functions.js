$(function(){
	
		/*
			Sistema depesquisa
        */

        var currentValue = 0;
        var isDrag = false;
        var preco_maximo = 70000;
        var preco_atual = 0;

        $('.pointer-barra').mousedown(function(){
        	isDrag = true;
        })

        $(document).mouseup(function(){
        	isDrag = false;
        	enableTextSelection();
        })

        $('.barra-preco').mousemove(function(e){
        	if(isDrag){
        		disableTextSelection();
        		var elBase = $(this);
        		var mouseX = e.pageX - elBase.offset().left;
        		if(mouseX < 0)
        			mouseX = 0;
        		if(mouseX > elBase.width())
        			mouseX = elBase.width();

        		$('.pointer-barra').css('left',(mouseX-13)+'px');
        		currentValue = (mouseX / elBase.width()) * 100;
        		$('.barra-preco-fill').css('width',currentValue+'%');

        		//TODO: Ajustar o formato do preço!
        		preco_atual = (currentValue/100) * preco_maximo;
        		$('.preco_pesquisa').html('R$'+preco_atual);
        	}
        })

        function disableTextSelection(){
	          $("body").css("-webkit-user-select","none");
	          $("body").css("-moz-user-select","none");
	          $("body").css("-ms-user-select","none");
	          $("body").css("-o-user-select","none");
	          $("body").css("user-select","none");
        }

        function enableTextSelection(){
	          $("body").css("-webkit-user-select","auto");
	          $("body").css("-moz-user-select","auto");
	          $("body").css("-ms-user-select","auto");
	          $("body").css("-o-user-select","auto");
	         $("body").css("user-select","auto");
        }
		/*
			Sistema individual do carro
        */
    	var imgShow = 3;
    	var maxIndex = Math.ceil($('.mini-img-wraper').length/3) - 1;
    	var curIndex = 0;

    	initSlider();
    	navigateSlider();
    	clickSlider();
    	function initSlider() {
    		var amt =$('.mini-img-wraper').length * 33.3;
    		var elScroll = $('.nav-galeria-wraper');
    		var elSingle = $('.mini-img-wraper');
    		elScroll.css('width',amt+'%');
    		elSingle.css('width',33.3*(100/amt)+'%');
    	}

    	function navigateSlider(){
    		$('.arrow-right-nav').click(function(){
    			if(curIndex < maxIndex){
    				curIndex++;
    				var elOff = $('.mini-img-wraper').eq(curIndex*3).offset().left - $('.nav-galeria-wraper').offset().left;
    				$('.nav-galeria').animate({'scrollLeft':elOff+'px'});
    			}else{

    			}
    			
    		});
    		
    		$('.arrow-left-nav').click(function(){
    			if(curIndex > 0){
    				curIndex--;
    				var elOff = $('.mini-img-wraper').eq(curIndex*3).offset().left - $('.nav-galeria-wraper').offset().left;
    				$('.nav-galeria').animate({'scrollLeft':elOff+'px'});
    			}else{
    			
    			}
    		});
    	}

    	function clickSlider(){
    		$('.mini-img-wraper').click(function(){
    			$('.mini-img-wraper').css('background-color','transparent');
    			$(this).css('background-color','rgb(210,210,210)');
    			var img = $(this).children().css('background-image');
    			$('.foto-destaque').css('background-image',img);
    		})
    		
    		$('.mini-img-wraper').eq(0).click();
    	}

    	/*
			Sistema contato
        */

    	$('[goto=contato]').click(function(){
    		$('nav a').css('color','black');
    		$(this).css('color','#EB2D2D');
    		$('html,body').animate({'scrollTop':$('#contato').offset().top});
    		return false;
    	})
	/*
    	var directory = '/Danki Code- Projetos/Webmaster-Projetos/projeto_05'

    	$('[goto=contato]').click(function(){
    		location.href=directory+'index.html?contato';
    		return false;
    	})

    	checkUrl();

    	function checkUrl(){
    		var url = location.href.split('/');
    		var curPage = [url.length-1].split('?');

    		if (curPage [1] != undefined && curPage[1] == 'contato'){
    			$('header nav a').css('color','black');
    			$('footer nav a').css('color','white');
    			$('[goto=contato]').css('color','#EB2D2D');
    			$('html,body').animate({'scrollTop':$('#contato').offset().top});
    		}

    	}
*/

    	$('.mobile').click(function(){
    		$(this).find('ul').slideToggle();
    	})

    	/*
		Sistem de navegação
    	*/

    	var amtDepoimento = $('.depoimento-single p').length;
    	var puIndex = 0;

    	iniciarDepoimento();
    	navegarDepoimento();

    	function iniciarDepoimento(){
    		$('.depoimento-single p').hide();
    		$('.depoimento-single p').eq(0).show();
    	}


    	function navegarDepoimento(){
    		$('[next]').click(function(){
    			 
    				puIndex++;
    				if (puIndex >= amtDepoimento)
    				 puIndex = 0;	
    				$('.depoimento-single p').hide();
    				$('.depoimento-single p').eq(puIndex).show();

    			
    		})

    		$('[prev]').click(function(){
    				puIndex--;
    				if (puIndex >= 0)
    				 puIndex = amtDepoimento-1;	
    				$('.depoimento-single p').hide();
    				$('.depoimento-single p').eq(puIndex).show();
    		})
    	}

})