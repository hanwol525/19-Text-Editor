const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async (event) => {
    const installPrompt = window.deferredPrompt;
    if (!installPrompt){
        alert("Application already installed!");
        return;
    };
    installPrompt.prompt();
    const result = await installPrompt.userChoice
    console.log(result);
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
    console.log('Successfully installed!');
    window.deferredPrompt = null;
});
