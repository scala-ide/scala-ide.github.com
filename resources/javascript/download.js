$(document).ready(function() {
  
  var clip = new ZeroClipboard.Client();
  clip.setHandCursor( true );
  clip.setText("http://download.scala-ide.org/releases-29/stable/site");	  			
  clip.glue("download-link");
});