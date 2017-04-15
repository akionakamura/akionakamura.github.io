const data = [{
    type: 'scattergeo',
    mode: 'markers',
    text: [
    'Aberdeen',
    'Amsterdam',
    'Athens',
    'Auschwitz',
    'Barcelona',
    'Bath',
    'Beslfast',
    'Belo Horizonte',
    'Berlin',
    'Blumenau',
    'Bratislava',
    'Brussels',
    'Bucharest',
    'Budapest',
    'Cabo da Roca',
    'Cappadocia',
    'Chania',
    'Ciudad del Este',
    'Cliffs of Moher',
    'Costa do Sauipe',
    'Dead Sea',
    'Dresden',
    'Dublin'
    ],
    lon: [
        -73.57, -79.24, -123.06, -114.1, -113.28,
        -75.43, -63.57, -123.21, -97.13, -104.6,
        -71.57, -72.24, -110.06, -78.1, -98.28,
        75.43, 63.57, -12.21, 12.13, -10.6, 
        13.21, 91.13, 54.6
    ],
    lat: [
        45.5, 43.4, 49.13, 51.1, 53.34, 45.24,
        -45.5, -43.4, -49.13, -51.1, -53.34, -45.24,
        35.5, 13.4, 39.13, 1.1, 43.34, 25.24,
        75.5, -23.4, 49.13, 11.1, 33.34
    ],
    marker: {
        symbol: 'diamond',
        size: 7,
        line: {
            width: 1
        }
    },
    name: 'Been',
    textposition: [
        'top right', 'top left', 'top center', 'bottom right', 'top right',
        'top left', 'bottom right', 'bottom left', 'top right', 'top right'
    ],
    hoverinfo: 'text',
}];

export default data
