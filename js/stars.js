particlesJS("particles-js", {
    "particles": {
        "number": {
            "value":800, "density": {
                "enable": true, "value_area": 800
            }
        }
        , "color": {
            "value": "#ffffff"
        }
        , "shape": {
            "type":"circle", "stroke": {
                "width": 0, "color": "#000000"
            }
            , "polygon": {
                "nb_sides": 5
            }
            , "image": {
                "src": "img/github.svg", "width": 100, "height": 100
            }
        }
        , "opacity": {
            "value":1, "random":true, "anim": {
                "enable": true, "speed": 5, "opacity_min": 0, "sync": false
            }
        }
        , "size": {
            "value":2, "random":true, "anim": {
                "enable": false, "speed": 4, "size_min": 0.3, "sync": false
            }
        }
        , "line_linked": {
            "enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1
        }
        , "move": {
            "enable":true, "speed":1, "direction":"top", "random":true, "out_mode":"out", "bounce":false, "attract": {
                "enable": false, "rotateX": 600, "rotateY": 600
            }
        }
    }
    , "interactivity": {
        "events": {
            "onhover": {
                "enable": true, "mode": "repulse"
            }
            , "onclick": {
                "enable": true, "mode": "bubble"
            }
            , "resize":true
        }
        , "modes": {
            "grab": {
                "distance":400, "line_linked": {
                    "opacity": 1
                }
            }
            , "bubble": {
                "distance": 30, "size": 0, "duration": 2, "opacity": 50, "speed": 3
            }
            , "repulse": {
                "distance": 50, "duration": 0.4
            }
            , "push": {
                "particles_nb": 4
            }
            , "remove": {
                "particles_nb": 2
            }
        }
    }
    , "retina_detect":true
}

);