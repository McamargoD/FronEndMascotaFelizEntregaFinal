

$(function(){
    $('[data-toggle=tooltip]').tooltip();
    $('body').scrollspy({ target: '#navegacion' });
        
    var menu = $('#menu'),
        menuItems = menu.find('a');
    
    menuItems.on('click', function(e){
        var href = $(this).attr('href');
        $(href).animatescroll({
            scrollSpeed: 2000
        });
        e.preventDefault();
    });
    
    
    $('.tp-banner').revolution({
        delay:15000,
        startwidth:1170,
        startheight:500,
        hideThumbs:10,
        fullWidth:"off",
        fullScreen:"on",
        fullScreenOffsetContainer: "",
        fullScreenAlignForce:"on"
    });
    
    $('.content').magnificPopup({
		delegate: 'li',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});
    
    
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }else{
            RegistrarProspecto
            event.preventDefault()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

  function RegistrarProspecto(){
    let nombres = document.querySelector("#validationNombres").value;
    let apellidos = document.querySelector("#validationApellidos").value;
    let correo = document.querySelector("#validationCorreo").value;
    let celular = document.querySelector("#validationCelular").value;

    let url = 'http://localhost:3000/prospectos';
    let datos = {
        nombres: nombres,
        apellidos : apellidos,
        correo: correo,
        celular: celular
    

    };

    fetch(url, {
        method: 'POST',
        body : JSON.stringify(datos),
        headers: {'Content-Type': 'application/js'}

    }).then(res => res.json())
    .then(mensaje => {
        console.log(mensaje)
    })

    alert ("Datos Registrados");
  }