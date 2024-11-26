// Función para alternar entre los formularios normal y VIP
function toggleForms(formType) {
    const normalRegister = document.getElementById('normal-register');
    const vipRegister = document.getElementById('vip-register');
    
    const signupText = document.getElementById('signup-text');
    const vipText = document.getElementById('vip-text');
    
    const signupTextVip = document.getElementById('signup-text-vip');
    const vipTextVip = document.getElementById('vip-text-vip');
  
    if (formType === 'normal') {
      // Mostrar formulario normal y ocultar VIP
      normalRegister.style.display = 'block';
      vipRegister.style.display = 'none';
  
      // Activar el texto "SIGN UP" y desactivar "VIP"
      signupText.classList.add('active');
      vipText.classList.remove('active');
  
      signupTextVip.classList.add('active');
      vipTextVip.classList.remove('active');
  
    } else if (formType === 'vip') {
      // Mostrar formulario VIP y ocultar normal
      normalRegister.style.display = 'none';
      vipRegister.style.display = 'block';
  
      // Activar el texto "VIP" y desactivar "SIGN UP"
      signupText.classList.remove('active');
      vipText.classList.add('active');
  
      signupTextVip.classList.remove('active');
      vipTextVip.classList.add('active');
    }
  }
  
  toggleForms("normal"); 