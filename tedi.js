    jQuery(document).ready(function(){
    	$("pre").transpose();
    });	
	jQuery(document).ready(function(){$('a[href*="#"]:not([href="#"])').click(function(){jQuery("gusted").toggleClass("gusted")})});var match,kuncigitar=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B","C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],kuncigitarRegex=/A#|C#|D#|F#|G#|Ab|Bb|Db|Eb|Gb|A|B|C|D|E|F|G/g;$("#transup").click(function(){$(".c").each(function(){for(var t=$(this).html(),i="",e=t.split(kuncigitarRegex),a=0;match=kuncigitarRegex.exec(t);){var c=kuncigitar.indexOf(match[0]);i+=e[a++]+kuncigitar[c+1]}i=(i=(i=(i=(i=(i+=e[a]).replace(/Gb/g,"F#")).replace(/Ab/g,"G#")).replace(/Bb/g,"A#")).replace(/Db/g,"C#")).replace(/Eb/g,"D#"),$(this).html(i).removeClass("tbi-tooltip "+t).addClass("tbi-tooltip "+i)}),$(".tbi-tooltip").each(function(){var t=$(this).text().trim(),i=$(this).find("span");if(t.includes("/")){var e=t.split("/")[0].replace("#","cis");i.attr("class","custom tbi-"+e)}else i.attr("class","custom tbi-"+t.replace("#","cis"))})}),$("#transdown").click(function(){$(".c").each(function(){for(var t=$(this).html(),i="",e=t.split(kuncigitarRegex),a=0;match=kuncigitarRegex.exec(t);){var c=kuncigitar.indexOf(match[0],1);i+=e[a++]+kuncigitar[c-1]}i=(i=(i=(i=(i=(i+=e[a]).replace(/Gb/g,"F#")).replace(/Ab/g,"G#")).replace(/Bb/g,"A#")).replace(/Db/g,"C#")).replace(/Eb/g,"D#"),$(this).html(i).removeClass("tbi-tooltip "+t).addClass("tbi-tooltip "+i)}),$(".c").each(function(){var t=$(this).text().trim(),i=$(this).find("span");if(t.includes("/")){var e=t.split("/")[0].replace("#","cis");i.attr("class","custom tbi-"+e)}else i.attr("class","custom tbi-"+t.replace("#","cis"))})});
	$(document).ready(function() {
          $('pre').bind('cut copy', function(e) {
              e.preventDefault();
            });
        });
$(document).ready(function(){
  //Pertama sembunyikan elemen class gambar
        $('.c').show();        

  //Ketika elemen class tampil di klik maka elemen class gambar tampil
        $('.lirik').on('click', function(e){
   $('.c').toggle();
        });
 });
 $(document).ready(function(){
  //Pertama sembunyikan elemen class gambar
        $('#speednav').hide();        

  //Ketika elemen class tampil di klik maka elemen class gambar tampil
        $('.otogulir').on('click', function(e){
   $('#speednav').toggle();
        });
 });
$(document).ready(function() {
        $( "#uptext" ).on( "click", function() {
            $( "pre" ).css( "font-size", "+=2" );
        });
        
        $( "#downtext" ).on( "click", function() {
            $( "pre" ).css( "font-size", "-=2" );
        });
    });
