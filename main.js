//====================
//Lancement
//====================

    document.addEventListener("DOMContentLoaded", () => {

        initMap();
        initMarker();
        initTrackingLine();

        map.on('moveend',() =>{
            if (distance(lastPosition, [map.getCenter().lat, map.getCenter().lng]) < 3){
                isCentred = true;
                hideCenterButton();
            } else {
                isCentred = false;
                showCenterButton();
            }
        });
                document.getElementById('BtnCenter').addEventListener('click', () => {
                isCentred = true;
                hideCenterButton();
                map.panTo(lastPosition, 20);
                });
            

        updateButtonsUI(false);
        startGPS();

        showLoader();
        
        const Btnstart = document.getElementById('BtnStart');
        const Btnstop = document.getElementById('BtnStop');
    
        Btnstart.addEventListener("click", () => {
            startTracking();
            switchToStop();
        });
        Btnstop.addEventListener("click", () =>{
            stopTracking();
            switchToStart();
        });
        
    });