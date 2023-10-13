function επιλεχθένΌργανο(αναγνωριστικό) {
  // console.log(αναγνωριστικό);

  function φώτισηΠλήκτρου(α) {
    var ενεργόΠλήκτρο = document.querySelector('.' + α);

    ενεργόΠλήκτρο.classList.add('pressed')

    setTimeout(function () {
      ενεργόΠλήκτρο.classList.remove('pressed')
    }, 100)
  }

  switch (αναγνωριστικό) {
    case 'ς':
      var ήχος = new Audio('./sounds/tom-1.mp3');
      ήχος.play();
      φώτισηΠλήκτρου(αναγνωριστικό);
      break;
    case 'α':
      var ήχος = new Audio('./sounds/tom-2.mp3');
      ήχος.play();
      φώτισηΠλήκτρου(αναγνωριστικό);
      break;
    case 'σ':
      var ήχος = new Audio('./sounds/tom-3.mp3');
      ήχος.play();
      φώτισηΠλήκτρου(αναγνωριστικό);
      break;
    case 'δ':
      var ήχος = new Audio('./sounds/tom-4.mp3');
      ήχος.play();
      φώτισηΠλήκτρου(αναγνωριστικό);
      break;
    case 'ξ':
      var ήχος = new Audio('./sounds/crash.mp3');
      ήχος.play();
      φώτισηΠλήκτρου(αναγνωριστικό);
      break;
    case 'κ':
      var ήχος = new Audio('./sounds/kick-bass.mp3');
      ήχος.play();
      φώτισηΠλήκτρου(αναγνωριστικό);
      break;
    case 'λ':
      var ήχος = new Audio('./sounds/snare.mp3');
      ήχος.play();
      φώτισηΠλήκτρου(αναγνωριστικό);
      break;

    default:
      console.log('Λάθος πλήκτρο. Ελέγξτε γλώσσα πληκτρολογίου.');
      break;
  }
}

for (var i = 0; i < document.querySelectorAll('.drum').length; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function () {
    var αναγνωριστικό = this.innerHTML;

    επιλεχθένΌργανο(αναγνωριστικό);
  });
}

document.addEventListener('keydown', function (event) {
  var αναγνωριστικό = event.key;

  επιλεχθένΌργανο(αναγνωριστικό);
});
