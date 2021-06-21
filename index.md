<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Churrascômetro</title>
    <!-- <link rel="stylesheet" type="text/css" href="churras_css.css"> -->
    <link rel="stylesheet" type="text/css" media="(max-width: 415px") href="churras_css_max_width415.css">
    <link rel="stylesheet" type="text/css" media="(max-width: 900px") href="churras_css_max_width749.css">
    <link rel="stylesheet" type="text/css" media="(min-width: 901px") href="churras_css.css">

    <!-- font import-->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap" rel="stylesheet">

</head>


<body>

    <h1>Que tal vermos o quanto de carne e bebida você vai precisar?</h1>

    <div id="container">
        <div id="containerImg">
            

        </div>

        <div id="containerForm">
        <h2>Quantos convidados irão ao churrasco?</h2><hr><br>

            <div id="form_churras">
            <div class="iconDiv"><img src="/churras_assets/adultIcon.png" alt=""></div><input id="adultos" type="number" placeholder="Adultos" style="background-color: #6f3cd6 ;"><br>
            <div class="iconDiv"><img src="/churras_assets/criancaIcon.png" alt=""></div><input id="criancas" type="number" placeholder="Crianças" style="background-color: #6f3cd6;"><br>
            <div class="iconDiv"><img src="/churras_assets/relogioIcon.png" alt=""></div><input id="duracao" type="number" placeholder="Duração" style="background-color: #6f3cd6;" ><br>
                
                <div id="inputSubmit">
                <input type="submit" id="calcular" value="Calcular"><br><br>
                </div>
                

                    <id id="divResultado">
                        <p id="escreveResultado"></p>
                    
                    </id>
                


            </div>
        </div>

    </div><br><br>


    <script src="churras_script.js"></script>

</body>


</html>