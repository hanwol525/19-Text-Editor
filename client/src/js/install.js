const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
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

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('Successfully installed!');
    window.deferredPrompt = null;
});
