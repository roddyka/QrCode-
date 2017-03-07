<!DOCTYPE html>
<?php
?>
<html lang="pt">
    <head>
        <meta charset="utf-8">


        <title>Leitor QrCode</title>


		<style>
    #container {
        margin: 0px auto;
        width: 500px;
        height: 375px;
        border: 10px #333 solid;
    }
    #videoElement {
        width: 500px;
        height: 375px;
        background-color: #666;
    }
</style>
    </head>
    <body>
        <div class="container">
            <div class="page-header box-principal-header"><h2><span class="fa fa-book"></span> - QRCODE F71</h2></div>
            <br /><br />

            <fieldset>
                <legend>Camera</legend>
				<div id="container">
					<video autoplay="true" id="videoElement">
					</video>
				</div>


        </div>
        <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

	       <script src="leitor/bower_components/qcode-decoder/build/qcode-decoder.min.js"></script>

        <script>
            $(document).ready(function () {

                $("#btn-alert").click(function () {
                    bootAlert("Mensagem aqui", "Titulo aqui", null, "danger");
                });
                $("#btn-confirm").click(function () {
                    bootConfirm("Mensagem aqui", "Titulo aqui", null, "success");
                });
                $("#btn-msg").click(function () {
                    bootDialog(
                            "Mensagem aqui",
                            "Titulo aqui",
                            [{
                                    label: 'Botão 1',
                                    action: function (dialog) {
                                        typeof dialog.getData('callback') === 'function' && dialog.getData('callback')(false);
                                        dialog.close();
                                    }
                                }, {
                                    label: 'Botão 2',
                                    cssClass: 'btn-warning' ,
                                    action: function (dialog) {
                                        typeof dialog.getData('callback') === 'function' && dialog.getData('callback')(true);
                                        dialog.close();
                                    }
                                }],
                            "warning"
                            );
                });

				var video = document.querySelector("#videoElement");

				navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

				if (navigator.getUserMedia) {
					navigator.getUserMedia({video: true}, handleVideo, videoError);
				}

				function handleVideo(stream) {
					video.src = window.URL.createObjectURL(stream);
				}

				function videoError(e) {
					// do something
				}

				var video =
			  document.getElementById('videoElement');

		     QCodeDecoder().decodeFromCamera(video, function(er,res){
    				if(res != undefined){
      				console.log(res);
              var id_func = res;
              var url = 'ponto_qrcode.php';

              $.post(url,{id_func:id_func},function(data){
                  bootAlert(data, "Controle de Acesso", null, "danger");
              });

              }
  				//alert();

			  });

            });
        </script>
    </body>
</html>
