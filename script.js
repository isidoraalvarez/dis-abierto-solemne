// --- 1. DESAFÍO: BOTÓN VISÍTANOS CAMBIA EL COLOR DE FONDO Y SE EXPANDE ---
const botonVisitanos = document.querySelector('.btn-visitanos');
const listaColores = ['#070b12', '#1a1a24', '#7b8dc2', '#b5120a', '#282836', '#333333'];

if (botonVisitanos) {
    botonVisitanos.addEventListener('click', (e) => {
        // Evita que salte de inmediato para mostrar la animación de expansión
        if (!botonVisitanos.classList.contains('expanded')) {
            e.preventDefault(); 
            botonVisitanos.classList.add('expanded');
        }

        // Aplica el desafío de la clase: cambia el color de fondo usando style.backgroundColor
        const colorAleatorio = listaColores[Math.floor(Math.random() * listaColores.length)];
        document.body.style.backgroundColor = colorAleatorio;
    });
}

// --- 2. VENTANA FLOTANTE (MODAL) DE CRÉDITOS ---
const btnCreditos = document.getElementById('btn-creditos');
const modalCreditos = document.getElementById('modal-creditos');
const cerrarModal = document.getElementById('cerrar-modal');

if (btnCreditos && modalCreditos && cerrarModal) {
    btnCreditos.addEventListener('click', () => {
        modalCreditos.classList.add('active');
    });

    cerrarModal.addEventListener('click', () => {
        modalCreditos.classList.remove('active');
    });

    modalCreditos.addEventListener('click', (e) => {
        if (e.target === modalCreditos) {
            modalCreditos.classList.remove('active');
        }
    });
}

// --- 3. MENÚ HAMBURGUESA MÓVIL ---
const btnHamburger = document.getElementById('btn-hamburger');
const mobileDrawer = document.getElementById('mobile-drawer');
const cerrarDrawer = document.getElementById('cerrar-drawer');
const drawerTabs = document.querySelectorAll('.drawer-tab');

if (btnHamburger && mobileDrawer && cerrarDrawer) {
    btnHamburger.addEventListener('click', () => {
        mobileDrawer.classList.add('active');
    });

    cerrarDrawer.addEventListener('click', () => {
        mobileDrawer.classList.remove('active');
    });

    mobileDrawer.addEventListener('click', (e) => {
        if (e.target === mobileDrawer) {
            mobileDrawer.classList.remove('active');
        }
    });

    drawerTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            mobileDrawer.classList.remove('active');
        });
    });
}