
var calculateComplexity = function (password) {
    var complexity = 0;
    
    var regExps = [ 
      /[a-z]/,
      /[A-Z]/,
      /[0-9]/,
      /.{8}/,
      /.{16}/,
      /[!-//:-@[-`{-ÿ]/
    ];
    
    regExps.forEach(function (regexp) {
      if (regexp.test(password)) {
        complexity++;
      }
    });
    
    return {
      value: complexity,
      max: regExps.length
    };
  };
   
  var checkPasswordStregth = function (password) {
    var progress = document.querySelector('#passwordComplexity'),
        complexity = calculateComplexity(this.value); 
    
    progress.value = complexity.value;
    progress.max = complexity.max;
  };
  
  var input = document.querySelector('#passwordField');
  input.addEventListener('keyup', checkPasswordStregth);
  
  var PasswordField = document.querySelector('#passwordFiled');
var BntPasswordView = document.querySelector('#bnt-password-view');
BntPasswordView.addEventListener('click', () => {
    toggle(PasswordField);
});

function toggle(e){e.type=(e.type=="password")?"text":"password";}