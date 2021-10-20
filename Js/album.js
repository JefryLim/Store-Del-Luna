$(document).ready(function(){
    let $CA1 = $('.CA1')
    let $CA1BOX = $('.CA1BOX')
    let $CA2 = $('.CA2')
    let $CA2BOX = $('.CA2BOX')
    let $CA3 = $('.CA3')
    let $CA3BOX = $('.CA3BOX')
    let $CA1B1 = $('.CA1B1')
    let $CA1B2 = $('.CA1B2')
    let $CA1B3 = $('.CA1B3')
    let $CA2B1 = $('.CA2B1')
    let $CA2B2 = $('.CA2B2')
    let $CA2B3 = $('.CA2B3')
    let $CA3B1 = $('.CA3B1')
    let $CA3B2 = $('.CA3B2')
    let $CA3B3 = $('.CA3B3')

    $CA1BOX.hide()
    $CA2BOX.hide()
    $CA3BOX.hide()
    
    $CA1.on('click',function(){
        $CA1BOX.slideToggle(2000)
    })
    $CA1B1.on('click',function(){
        var con = prompt("Do you want to buy Album BTS ANSWER Versi SELF",'yes/no')
        if(con == 'yes'){
            alert('Thank You for Buying, Successful Transaction')
        }else{
            alert('Sorry Transaction Failed!')
        }
    })
    $CA1B2.on('click',function(){
        var con = prompt("Do you want to buy Album 'Love Yourself'",'yes/no')
        if(con == 'yes'){
            alert('Thank You for Buying, Successful Transaction')
        }else{
            alert('Sorry Transaction Failed!')
        }
    })
    $CA1B3.on('click',function(){
        var con = prompt("Do you want to buy Map of the Soul: 7 BTS",'yes/no')
        if(con == 'yes'){
            alert('Thank You for Buying, Successful Transaction')
        }else{
            alert('Sorry Transaction Failed!')
        }
    })

    $CA2.on('click',function(){
        $CA2BOX.slideToggle(2000)
    })
    $CA2B1.on('click',function(){
        var con = prompt("Do you want to buy BLACKPINK 1st FULL Album",'yes/no')
        if(con == 'yes'){
            alert('Thank You for Buying, Successful Transaction')
        }else{
            alert('Sorry Transaction Failed!')
        }
    })
    $CA2B2.on('click',function(){
        var con = prompt("Do you want to buy BLACKPINK Square up Album pink version",'yes/no')
        if(con == 'yes'){
            alert('Thank You for Buying, Successful Transaction')
        }else{
            alert('Sorry Transaction Failed!')
        }
    })
    $CA2B3.on('click',function(){
        var con = prompt("Do you want to buy BLACKPINK Lovesick Girls",'yes/no')
        if(con == 'yes'){
            alert('Thank You for Buying, Successful Transaction')
        }else{
            alert('Sorry Transaction Failed!')
        }
    })
    $CA3.on('click',function(){
        $CA3BOX.slideToggle(2000)
    })
    $CA3B1.on('click',function(){
        var con = prompt("Do you want to buy Album EXO Love Shot (Love / Shot ver)",'yes/no')
        if(con == 'yes'){
            alert('Thank You for Buying, Successful Transaction')
        }else{
            alert('Sorry Transaction Failed!')
        }
    })
    $CA3B2.on('click',function(){
        var con = prompt("Do you want to buy EXO PLANET#2: The Exo'luXion in Seoul DVD",'yes/no')
        if(con == 'yes'){
            alert('Thank You for Buying, Successful Transaction')
        }else{
            alert('Sorry Transaction Failed!')
        }
    })
    $CA3B3.on('click',function(){
        var con = prompt("Do you want to buy EXO-2nd Album: EXODUS (Korean+Chinese)",'yes/no')
        if(con == 'yes'){
            alert('Thank You for Buying, Successful Transaction')
        }else{
            alert('Sorry Transaction Failed!')
        }
    })
}) 