$(document).ready(function(){
    $('#open-card1').click(function(){
        var span = $('.desaparesse1')
        if ($('.desaparesse1').css('display') === 'block'){
            $('.desaparesse1').css('display', 'none');
            $('#span1').text('<');
        }
        else{
            span.css('display', 'block');
            $('#span1').text('>');
        }
    })
    $('#open-card2').click(function(){
        var span = $('.desaparesse2')
        if ($('.desaparesse2').css('display') === 'block'){
            $('.desaparesse2').css('display', 'none');
            $('#span2').text('<');
        }
        else{
            span.css('display', 'block');
            $('#span2').text('>');
        }
    })
    $('#open-card3').click(function(){
        var span = $('.desaparesse3')
        if ($('.desaparesse3').css('display') === 'block'){
            $('.desaparesse3').css('display', 'none');
            $('#span3').text('<');
        }
        else{
            span.css('display', 'block');
            $('#span3').text('>');
        }
    })
    $('#open-card4').click(function(){
        var span = $('.desaparesse4')
        if ($('.desaparesse4').css('display') === 'block'){
            $('.desaparesse4').css('display', 'none');
            $('#span4').text('<');
        }
        else{
            span.css('display', 'block');
            $('#span4').text('>');
        }
    })
    $('#open-card5').click(function(){
        var span = $('.desaparesse5')
        if ($('.desaparesse5').css('display') === 'block'){
            $('.desaparesse5').css('display', 'none');
            $('#span5').text('<');
        }
        else{
            span.css('display', 'block');
            $('#span5').text('>');
        }
    })
    $('#open-card6').click(function(){
        var span = $('.desaparesse6')
        if ($('.desaparesse6').css('display') === 'block'){
            $('.desaparesse6').css('display', 'none');
            $('#span6').text('<');
        }
        else{
            span.css('display', 'block');
            $('#span6').text('>');
        }
    })
    $('#open-card7').click(function(){
        if ($('.desaparesse7').css('display') === 'block') {
            $('.desaparesse7').css('display', 'none')
            div_senha.css('display', 'none')
        }
        const div_senha = $('.pai-senha')
        div_senha.css('display', 'flex')
        $('.btn-sucess').click(function(){
                const valor_input = $('.input').val()
                if (valor_input === 'lala') {
                    $('.desaparesse7').css('display', 'block')
                    div_senha.css('display', 'none')
                }
                else {
                    alert('senha incorreta, por favor tente novamente')
                }
            
        });
    })
    //sub cads:
    $('#sub-open-card1').click(function(){
        var span = $('.sub-desaparesse1')
        if ($('.sub-desaparesse1').css('display') === 'block'){
            $('.sub-desaparesse1').css('display', 'none');
            $('#sub-span1').text('<');
        }
        else{
            span.css('display', 'block');
            $('#sub-span1').text('>');
        }
    })
    $('#sub-open-card2').click(function(){
        var span = $('.sub-desaparesse2')
        if ($('.sub-desaparesse2').css('display') === 'block'){
            $('.sub-desaparesse2').css('display', 'none');
            $('#sub-span2').text('<');
        }
        else{
            span.css('display', 'block');
            $('#sub-span2').text('>');
        }
    })
    $('#sub-open-card3').click(function(){
        var span = $('.sub-desaparesse3')
        if ($('.sub-desaparesse3').css('display') === 'block'){
            $('.sub-desaparesse3').css('display', 'none');
            $('#sub-span3').text('<');
        }
        else{
            span.css('display', 'block');
            $('#sub-span3').text('>');
        }
    })
    $('#sub-open-card4').click(function(){
        var span = $('.sub-desaparesse4')
        if ($('.sub-desaparesse4').css('display') === 'block'){
            $('.sub-desaparesse4').css('display', 'none');
            $('#sub-span4').text('<');
        }
        else{
            span.css('display', 'block');
            $('#sub-span4').text('>');
        }
    })
    $('#sub-open-card5').click(function(){
        var span = $('.sub-desaparesse5')
        if ($('.sub-desaparesse5').css('display') === 'block'){
            $('.sub-desaparesse5').css('display', 'none');
            $('#sub-span5').text('<');
        }
        else{
            span.css('display', 'block');
            $('#sub-span5').text('>');
        }
    })
    $('#sub-open-card6').click(function(){
        var span = $('.sub-desaparesse6')
        if ($('.sub-desaparesse6').css('display') === 'block'){
            $('.sub-desaparesse6').css('display', 'none');
            $('#sub-span6').text('<');
        }
        else{
            span.css('display', 'block');
            $('#sub-span6').text('>');
        }
    })
    $('#sub-open-card7').click(function(){
        var span = $('.sub-desaparesse7')
        if ($('.sub-desaparesse7').css('display') === 'block'){
            $('.sub-desaparesse7').css('display', 'none');
            $('#sub-span7').text('<');
        }
        else{
            span.css('display', 'block');
            $('#sub-span7').text('>');
        }
    })
    $('#sub-open-card8').click(function(){
        var span = $('.sub-desaparesse8')
        if ($('.sub-desaparesse8').css('display') === 'block'){
            $('.sub-desaparesse8').css('display', 'none');
            $('#sub-span8').text('<');
        }
        else{
            span.css('display', 'block');
            $('#sub-span8').text('>');
        }
    })
    $('#sub-open-card9').click(function(){
        var span = $('.sub-desaparesse9')
        if ($('.sub-desaparesse9').css('display') === 'block'){
            $('.sub-desaparesse9').css('display', 'none');
            $('#sub-span9').text('<');
        }
        else{
            span.css('display', 'block');
            $('#sub-span9').text('>');
        }
    })
    $('#sub-open-card10').click(function(){
        var span = $('.sub-desaparesse10')
        if ($('.sub-desaparesse10').css('display') === 'block'){
            $('.sub-desaparesse10').css('display', 'none');
            $('#sub-span10').text('<');
        }
        else{
            span.css('display', 'block');
            $('#sub-span10').text('>');
        }
    })
    $('#sub-open-card11').click(function(){
        var span = $('.sub-desaparesse11')
        if ($('.sub-desaparesse11').css('display') === 'block'){
            $('.sub-desaparesse11').css('display', 'none');
            $('#sub-span11').text('<');
        }
        else{
            span.css('display', 'block');
            $('#sub-span11').text('>');
        }
    })
    $('#sub-open-card12').click(function(){
        var span = $('.sub-desaparesse12')
        if ($('.sub-desaparesse12').css('display') === 'block'){
            $('.sub-desaparesse12').css('display', 'none');
            $('#sub-span12').text('<');
        }
        else{
            span.css('display', 'block');
            $('#sub-span12').text('>');
        }
    })
    $('#sub-open-card13').click(function(){
        var span = $('.sub-desaparesse13')
        if ($('.sub-desaparesse13').css('display') === 'block'){
            $('.sub-desaparesse13').css('display', 'none');
            $('#sub-span13').text('<');
        }
        else{
            span.css('display', 'block');
            $('#sub-span13').text('>');
        }
    })
})
    $('#sub-open-card14').click(function(){
        var span = $('.sub-desaparesse14')
        if ($('.sub-desaparesse14').css('display') === 'block'){
            $('.sub-desaparesse14').css('display', 'none');
            $('#sub-span14').text('<');
        }
        else{
            span.css('display', 'block');
            $('#sub-span14').text('>');
        }
    })
