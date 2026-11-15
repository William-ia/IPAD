// Nécessaire pour que Chrome propose « Installer l'application ».
// Ne garde rien en cache : la page vient toujours de GitHub, donc toujours à jour.
self.addEventListener("fetch", function () {});
