<?php
//$url= '107';
//echo "<img src='http://chart.apis.google.com/chart?cht=qr&chl=".$url."&chs=125x125&alt='".$url."'/>";
?>


<!DOCTYPE html>
<?php
?>
<html lang="pt">
    <head>
        <meta charset="utf-8">
        <title>Leitor QrCode</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="bootstrap-dialog.min.css">
        <!-- Latest compiled and minified JavaScript -->
        <script type="text/javascript" src="jquery-1.11.1.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
        <script src="leitor/bower_components/qcode-decoder/build/qcode-decoder.min.js"></script>
        <script type="text/javascript" src="bootstrap-dialog.min.js"></script>
		<style>
    body{
      /*background-color: #0d1a26;*/
    }

</style>
    </head>
    <body>
        <div class="container">

            <br /><br />

            <div class="container-fluid col-sm-6">
              <div class="row">
                <input type="text" name="" id="qrcode" value="" class="col-sm-6 form-control">
              </div>
              <div class="row" id="container"></div>
            </div>
            <div class="container-fluid col-sm-6">
              <div class="row">
                <button type="button" name="button" id="gerar" class="btn btn-default">Gerar QrCode</button>
              </div>
            </div>
        </div>
        <!-- Latest compiled and minified CSS -->

        <script>
            $(document).ready(function () {

            $("#gerar").click(function(){
              var qr =  $("#qrcode").val();
              //alert(qr);
              if(qr){
                $("#container").append("<img src='http://chart.apis.google.com/chart?cht=qr&chl="+qr+"&chs=125x125&alt='"+qr+"'/>");
              }else{
                $("#container").append("<p>Por favor, digite alguma informação no campo!</p>");
              }
            });


            });
        </script>
    </body>
</html>
