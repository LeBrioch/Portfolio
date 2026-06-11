function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function() {
  const boutons = document.querySelectorAll(".onglets button");
  const contenu = document.querySelector(".contenu-onglet");
  
  const contenus = {
    0: `
      <div class="langue">
        <img src="france.jpg" alt="Français" onerror="this.style.display='none'">
        <p>Français – Langue maternelle</p>
      </div>
      <div class="langue">
        <img src="england.jpg" alt="Anglais" onerror="this.style.display='none'">
        <p>Anglais – Courant, certification Cambridge C1</p>
      </div>
      <div class="langue">
        <img src="russie.jpg" alt="Russe" onerror="this.style.display='none'">
        <p>Russe – Notions de conversation</p>
      </div>
    `,
    1: `
      <div class="competences-list">
        <div class="competence-item">Java</div>
        <div class="competence-item">JavaScript</div>
        <div class="competence-item">Python</div>
        <div class="competence-item">SQL</div>
        <div class="competence-item">Git</div>
        <div class="competence-item">Algorithmique</div>
      </div>
    `,
    2: `
      <div class="competences-list">
        <div class="competence-item">Analyse mathématique</div>
        <div class="competence-item">Esprit logique</div>
        <div class="competence-item">Autodidacte</div>
        <div class="competence-item">Persévérance</div>
        <div class="competence-item">Résolution de problèmes</div>
        <div class="competence-item">Aisance à l'expression publique</div>
      </div>
    `
  };

  function changerOnglet(index) {
    contenu.innerHTML = contenus[index];
    
    boutons.forEach(b => b.classList.remove("actif"));
    boutons[index].classList.add("actif");
  }

  boutons.forEach((bouton, index) => {
    bouton.addEventListener("click", () => {
      changerOnglet(index);
    });
  });

  changerOnglet(0);
});

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('#contact form');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const nom = form.querySelector('input[type="text"]').value;
      const email = form.querySelector('input[type="email"]').value;
      const message = form.querySelector('textarea').value;
      
      if (nom.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Veuillez remplir tous les champs.');
        return;
      }
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Veuillez entrer une adresse email valide.');
        return;
      }
      
      alert('Message envoyé avec succès ! Merci pour votre message.');
      form.reset();
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  const etapes = document.querySelectorAll('.etape');
  etapes.forEach(etape => {
    etape.style.opacity = '0';
    etape.style.transform = 'translateY(30px)';
    etape.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(etape);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const liens = document.querySelectorAll('a[href^="#"]');
  
  liens.forEach(lien => {
    lien.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80;
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const projetCards = document.querySelectorAll('.projet-card');
  
  projetCards.forEach(card => {
    const btn = card.querySelector('.btn-details');
    const details = card.querySelector('.projet-details');
    
    if (btn && details) {
      details.style.display = 'none';
      
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (details.style.display === 'none') {
          details.style.display = 'flex';
          btn.textContent = 'Réduire les détails';
        } else {
          details.style.display = 'none';
          btn.textContent = 'Voir plus de détails';
        }
      });
    }
  });
});

function handleMobileResize() {
  if (window.innerWidth <= 768) {
    document.body.style.minHeight = window.innerHeight + 'px';
    
    const hero = document.querySelector('.image-hero');
    if (hero) {
      hero.style.height = window.innerHeight + 'px';
    }
  }
}

window.addEventListener('load', handleMobileResize);
window.addEventListener('resize', handleMobileResize);