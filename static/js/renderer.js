$(function(){
$("#video_file").change(function(){
  for(var i=0; i<this.files.length; i++){
    $("video").attr("src", URL.createObjectURL(this.files[i]));
  }
});
$("#vtt_file").change(function(){
  for(var i=0; i<this.files.length; i++){
    $("track").attr("src", URL.createObjectURL(this.files[i]));
  }
});
});
