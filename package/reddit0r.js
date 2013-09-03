$('img').each(function(){
    if($(this).attr('src').indexOf('heavy-load.png') !== -1){
      location.reload();
    }
})