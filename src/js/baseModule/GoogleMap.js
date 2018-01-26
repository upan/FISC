import MapStyles from './mapStyles.js'

export default class GoogleMap {
    constructor(el,zoom){
        this.el = el,
        this.zoom = zoom
    }

    initMap(){
        var adsbMap = new google.maps.Map(document.getElementById(this.el), {
            center: {lat: 34.65128519895413, lng: 103.73291015625},
            zoom: this.zoom,
            mapTypeControl:	false,
            mapTypeControlOptions: {
                mapTypeIds: ['styled_map']
            }
        });
        //Associate the styled map with the MapTypeId and set it to display.
        adsbMap.mapTypes.set('styled_map', MapStyles);
        // adsbMap.overlayMapTypes.insertAt(0, overlayOpacityLayer);
        adsbMap.setMapTypeId('styled_map');

        return adsbMap
    }
}