<?php
date_default_timezone_set('America/Sao_Paulo');

include('conn.php');
$id = $_POST['id_func'];

$query = mysql_query("SELECT * FROM ____ WHERE ____ = $id ORDER BY ____ DESC LIMIT 1");
$query_res = mysql_num_rows($query);


$query_funcionario = mysql_query("SELECT * FROM ____");
$query_res_func = mysql_num_rows($query_funcionario);

if($query_res_func){

  while ($row = mysql_fetch_assoc($query_funcionario)){

    $data_atual = date('Y-m-d');
    $horas = date('H:i:s');
  //  print_r($row);

    $query_insert = "INSERT INTO acesso_qrcode (____) VALUES (____)";
    mysql_query($query_insert) or die($query_insert);
    //echo "<h4>Cadastrado com sucesso! {$nome}</h4>";
    echo "<div class='alert alert-dismissable alert-success'>
              <strong>Cadastrado com sucesso!</strong> <a href='#' class='alert-link'>{$nome}</a>!
          </div>";
  }

}else{
  echo "<div class='alert alert-dismissable alert-danger'>
            <strong>Oh Não!</strong> <a href='#' class='alert-link'>Imagem não encontrada</a> tente novamente ou entre em contato com o administrador!
        </div>";
  //echo "Usuario não cadastrado no sistema!";
}





 ?>
