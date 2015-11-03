// generate a random username
/*
var $input = $('#chat-input'); // Campo para o usuario escrever o texto
var $output = $('#chat-output'); // Onde ficará as conversas

var channel = 'photopop-lobby-demo';

// start pubnub
var me = randomName();
$('#whoami').text(me);
// Quando alguem mandar alguma mensagem
$('#chat').submit(function() {

	// Publica a mensagem no canal
	pubnub.publish({
		channel: channel,
		message: {
			text: $input.val(),
			uuid: me
		}
	});

	// Limpa a area de mandar a msg
	$input.val('');

	// Cancela para publicar apenas 1x
	return false;
});

		// Cria uma nova linha para a mensagem
	    var $line = $('<li class="list-group-item"><strong>' + data.username + ':</strong> </span>');

		// filtra o html da mensagem
		var $message = $('<span class="text" />').text(.text);

		if(data.username == me) {
      		$line.addClass('me');
    	}

		// Cria a linha com a mensagem
		$line.append($message);
		$output.append($line);

		
	}
});
*/
$(document).ready(function () {
$("#send").click(function(e) {
e.preventDefault();
var texto = $("#my-input").val();
var miPrimerMensaje = $("<p></p>").text(texto);
$(".resultado").append(miPrimerMensaje);
})
})