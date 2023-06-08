var isAdEnabled = isAdEnabled || !1;

if( !isAdEnabled ){
　   //Ads.js not loaded
    
　　 // AdBlock detected
    
    console.info("Ads.js not loaded");
    console.warn("AdBlock detected! ");

} else {
    console.log("Ads.js loaded");
    console.info("AdBlock not detected! ");
}
