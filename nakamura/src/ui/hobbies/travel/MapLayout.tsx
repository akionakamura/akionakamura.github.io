const layout = {
    font: {
        family: 'Roboto+Regular, serif',
        size: 6
    },
    titlefont: {
        size: 16
    },
    autosize: false,
    width: '10%',
    margin: {
        l: 10,
        r: 10,
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
        resolution: 100,
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
