<?php
date_default_timezone_set('America/Sao_Paulo');

include('../intranet/conn.php');
$id = $_POST['id_func'];

$query = mysql_query("SELECT * FROM ponto_acesso WHERE id_funcionario = $id ORDER BY entrada1 DESC LIMIT 1");
$query_res = mysql_num_rows($query);

/**while ($row2 = mysql_fetch_assoc($query)){

  $horas_at = $row2['entrada1'];
  $hora_atual5 = date('H:i',strtotime('+3 minutes', $horas_at));
  echo $hora_atual5;

    if($horas_at <= $hora_atual5){
      echo "USUARIO JA CADASTRADO";
      exit();
    }
}**/


$query_funcionario = mysql_query("SELECT * FROM funcionario WHERE id_funcionario = $id");
$query_res_func = mysql_num_rows($query_funcionario);

if($query_res_func){

  while ($row = mysql_fetch_assoc($query_funcionario)){
    $id_func = $row['id_funcionario'];
    $nome = $row['nome'];
    $id_reg = $row['id_regiao'];
    $data_atual = date('Y-m-d');
    $horas = date('H:i:s');

  //  print_r($row);

    $query_insert = "INSERT INTO ponto_acesso (id_regiao,id_funcionario,data,entrada1) VALUES ($id_reg,$id_func,'{$data_atual}','{$horas}')";
    mysql_query($query_insert) or die($query_insert);
    //echo "<h4>Cadastrado com sucesso! {$nome}</h4>";
    echo "<div class='alert alert-dismissable alert-success'>
              <strong>Cadastrado com sucesso!</strong> <a href='#' class='alert-link'>{$nome}</a>!
          </div>";
  }

}else{
  echo "<div class='alert alert-dismissable alert-danger'>
            <strong>Oh Não!</strong> <a href='#' class='alert-link'>Cadastro não encontrado</a> tente novamente ou entre em contato com o administrador!
        </div>";
  //echo "Usuario não cadastrado no sistema!";
}





 ?>
