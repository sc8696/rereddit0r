$('img').each(function(){
    if($(this).attr('src') === 'http://s3.amazonaws.com/redditstatic/heavy-load.png'){
      location.reload();
    }
})