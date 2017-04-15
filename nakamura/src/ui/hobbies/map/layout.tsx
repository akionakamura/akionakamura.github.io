const layout = {
    font: {
        family: 'Roboto+Regular, serif',
        size: 6
    },
    titlefont: {
        size: 16
    },
    margin: {
        r: 0,
        l: 0,
        b: 0,
        t: 0
    },
    padding: {
        r: 0,
        l: 0,
        b: 0,
        t: 0
    },
    dragmode: 'select',
    geo: {
        scope: 'world',
        projection: {
            type: 'kavrayskiy7'
        },
        resolution: 200,
        lonaxis: {
            'range': [-180, 180]
        },
        lataxis: {
            'range': [-90, 90]
        },
        showcoastlines: true,
        showrivers: true,
        rivercolor: '#fff',
        showlakes: true,
        showcountries: true,
        lakecolor: '#fff',
        showland: true,
        showocean: true,
        oceancolor: '#E0F7FA',
        landcolor: '#DCE775',
        countrycolor: '#d3d3d3',
        countrywidth: 1.5,
        subunitcolor: '#d3d3d3'
    }
};

export default layout;
