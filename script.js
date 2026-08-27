// Mobile nav toggle and simple form handling
document.addEventListener('DOMContentLoaded', function(){
  var nav = document.getElementById('nav');
  var toggle = document.getElementById('navToggle');
  if(toggle && nav){
    toggle.addEventListener('click', function(){
      var isHidden = nav.style.display === 'none' || window.getComputedStyle(nav).display === 'none';
      nav.style.display = isHidden ? 'flex' : 'none';
      toggle.setAttribute('aria-expanded', isHidden);
    });
  }

  var form = document.getElementById('notifyForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var phone = form.querySelector('#phone');
      var val = phone.value.trim();
      // basic validation (international format or local pattern)
      var ok = /^\+?[0-9\s-]{7,20}$/.test(val);
      if(!ok){
        phone.focus();
        phone.setAttribute('aria-invalid','true');
        phone.style.outline = '2px solid rgba(255,0,0,0.12)';
        return;
      }
      phone.setAttribute('aria-invalid','false');
      phone.style.outline = '';

      // Simulate sending link (placeholder)
      var btn = form.querySelector('button');
      var original = btn.textContent;
      btn.textContent = 'Sending…';
      btn.disabled = true;

      setTimeout(function(){
        btn.textContent = original;
        btn.disabled = false;
        // show success message
        var success = document.createElement('div');
        success.className = 'success';
        success.textContent = 'We sent a download link to ' + val + '. Check your messages.';
        if(!form.nextElementSibling){
          form.parentNode.appendChild(success);
        }
        form.reset();
      }, 1000);
    });
  }
});
