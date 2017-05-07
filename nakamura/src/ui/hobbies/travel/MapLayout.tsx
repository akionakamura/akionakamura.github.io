const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

const layout = {
    font: {
        family: 'Roboto+Regular, serif',
        size: 6
    },
    titlefont: {
        size: 12
    },
    width: Math.round((windowWidth > 800) ? Math.min(windowWidth * 0.5, 800) : windowWidth * 0.8),
    height: Math.round((windowWidth > 800) ? Math.min(windowHeight * 0.35, 350) : 200),
    autosize: false,
    margin: {
        l: 0,
        r: 0,
        b: 0,
        t: 0
    },
    padding: {
        r: 10,
        l: 10,
        b: 0,
        t: 0
    },
    textfont: {
        family: 'Roboto+Regular, serif'
    },
    dragmode: 'select',
    geo: {
        scope: 'world',
        projection: {
            type: 'kavrayskiy7'
        },
        resolution: 10,
        lonaxis: {
            range: [-180, 180]
        },
        lataxis: {
            range: [-90, 90]
        },
        showcoastlines: true,
        showrivers: true,
        rivercolor: '#fff',
        showlakes: true,
        showcountries: true,
        lakecolor: '#fff',
        showland: true,
        showocean: true,
        oceancolor: '#E3F2FD',
        landcolor: '#FFCC80',
        countrycolor: '#FFA726',
        countrywidth: 1.5,
        subunitcolor: '#d3d3d3'
    }
};

export default layout;
