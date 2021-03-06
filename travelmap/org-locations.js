var addressPoints = [
  ['Aberdeen', 57.133333, -2.1, './images/.jpg'],
  ['Amsterdam', 52.35, 4.916667, './images/Amsterdam.jpg'],
  ['Athens', 37.9833333, 23.7333333, './images/Athens.jpg'],
  ['Auschwitz', 50.036838, 19.230829, './images/Auschwitz.jpg'],
  ['Barcelona', 41.398371, 2.1741, './images/Barcelona.jpg'],
  ['Bath', 51.379444, -2.365556, './images/Bath.jpg'],
  ['Belfast', 54.583333, -5.933333, './images/Belfast.jpg'],
  ['Belo Horizonte', -19.916667, -43.933333, './images/Belo Horizonte.jpg'],
  ['Berlin', 52.516667, 13.4, './images/Berlin.jpg'],
  ['Blumenau', -26.9222, -49.0615, './images/Blumenau.jpg'],
  ['Bratislava', 48.15, 17.1166667, './images/Bratislava.jpg'],
  ['Brussels', 50.833333, 4.333333, './images/Brussels.jpg'],
  ['Bucharest', 44.433333, 26.1, './images/Bucharest.jpg'],
  ['Budapest', 47.5, 19.083333, './images/Budapest.jpg'],
  ['Cabo da Roca', 38.781604, -9.497021, './images/Cabo da Roca.jpg'],
  ['Cappadocia', 38.643705, 34.835288, './images/Cappadocia.jpg'],
  ['Chania', 35.5122222, 24.0155556, './images/Chania.jpg'],
  // ['Ciudad del Este', -25.516667, -54.616667, './images/Ciudad del Este.jpg'],
  ['Chile', -33.6579972,-70.0828111, './images/Chile.jpg'],
  ['Cliffs of Moher', 53.0669444, -9.4, './images/Cliffs of Moher.jpg'],
  ['Porto de Sauipe', -12.4, -37.916667, './images/Porto de Sauipe.jpg'],
  ['Dead Sea', 31.5, 35.3, './images/Dead Sea.jpg'],
  ['Dresden', 51.05, 13.75, './images/Dresden.jpg'],
  ['Dublin', 53.3330556, -6.2488889, './images/Dublin.jpg'],
  ['City of Edinburgh', 55.933333, -3.25, './images/City of Edinburgh.jpg'],
  ['Elafonissi Beach', 35.3, 23.6, './images/Elafonissi Beach.jpg'],
  ['Florence', 43.766667, 11.25, './images/Florence.jpg'],
  ['Frankfurt am Main', 50.116667, 8.683333, './images/Frankfurt am Main.jpg'],
  ['Gardaland', 44.416667, 8.95, './images/Gardaland.jpg'],
  ['Giants Causeway', 55.233333, -6.5, './images/Giants Causeway.jpg'],
  ['Glasgow', 55.866667, -4.25, './images/Glasgow.jpg'],
  ['Heraklion', 35.325, 25.1305556, './images/Heraklion.jpg'],
  ['Inhotim', -20.128057, -44.2174207, './images/Inhotim.jpg'],
  ['Istanbul', 41.018611, 28.964722, './images/Istanbul.jpg'],
  ['Jerusalem', 31.78, 35.23, './images/Jerusalem.jpg'],
  ['Krakow', 50.083333, 19.916667, './images/Krakow.jpg'],
  ['Lake District', 54.4287613, -3.2369878, './images/Lake District.jpg'],
  ['Lands End', 50.1, -5.7, './images/Lands End.jpg'],
  ['Lisbon', 38.716667, -9.133333, './images/Lisbon.jpg'],
  ['London', 51.514125, -0.093689, './images/London.jpg'],
  ['Marrakesh', 31.631485, -8.008281, './images/Marrakesh.jpg'],
  ['Merzouga', 31.101753, -4.013655, './images/Merzouga.jpg'],
  ['Moscow', 55.752222, 37.615556, './images/Moscow.jpg'],
  ['Munich', 48.1500, 11.5833, './images/Munich.jpg'],
  ['Newcastle upon Tyne', 54.988056, -1.619444, './images/Newcastle upon Tyne.jpg'],
  ['Nuremberg', 49.447778, 11.068333, './images/Nuremberg.jpg'],
  ['Pamukkale', 37.915833, 29.120237, './images/Pamukkale.jpg'],
  ['Paphos', 34.7666667, 32.4166667, './images/Paphos.jpg'],
  ['Paris', 48.866667, 2.333333, './images/Paris.jpg'],
  ['Plitvice', 44.8991667, 15.5933333, './images/Plitvice.jpg'],
  ['Porto', 41.149606, -8.610993, './images/Porto.jpg'],
  // ['Porto Seguro', -16.433333, -39.083333, './images/Porto Seguro.jpg'],
  ['Prague', 50.083333, 14.466667, './images/Prague.jpg'],
  ['Rio de Janeiro', -22.9, -43.233333, './images/Rio de Janeiro.jpg'],
  ['Citta di San Marino', 43.9333333, 12.45, './images/Citta di San Marino.jpg'],
  ['Schmalkalden', 50.716667, 10.45, './images/Schmalkalden.jpg'],
  ['Sestriere', 44.95, 6.883333, './images/Sestriere.jpg'],
  ['Sofia', 42.6833333, 23.3166667, './images/Sofia.jpg'],
  ['Stonehenge', 51.178882, -1.826215, './images/Stonehenge.jpg'],
  ['Tel Aviv-Yafo', 32.067778, 34.764722, './images/Tel Aviv-Yafo.jpg'],
  // ['Tiradentes', -21.116667, -44.183333, './images/Tiradentes.jpg'],
  ['Torino', 45.05, 7.666667, './images/Torino.jpg'],
  // ['Ferret', 45.915471, 7.105082, './images/Ferret.jpg'],
  ['Venice', 45.438611, 12.326667, './images/Venice.jpg'],
  ['Vesuvio', 40.833333, 14.366667, './images/Vesuvio.jpg'],
  ['Vienna', 48.2, 16.366667, './images/Vienna.jpg'],
  ['Zagreb', 45.8, 16.0, './images/Zagreb.jpg'],
  ['Zurich', 47.366667, 8.55, './images/Zurich.jpg'],
  ['Zadar', 44.114167, 15.227778, './images/Zadar.jpg'],
  ['Krka National Park', 43.801944, 15.972778, './images/Krka National Park.jpg'],
  ['Ljubljana', 46.055556, 14.508333, './images/Ljubljana.jpg'],
  ['Vintgar Gorge', 46.39, 14.083, './images/Vintgar Gorge.jpg'],
  ['Bled', 46.368803, 14.113975, './images/Bled.jpg'],
  ['Sarajevo', 43.866667, 18.416667, './images/Sarajevo.jpg'],
  ['Mostar', 43.333333, 17.8, './images/Mostar.jpg'],
  ['Kravica', 44.216667, 19.2, './images/Kravica.jpg'],
  ['Dubrovnik', 42.640278, 18.108333, './images/Dubrovnik.jpg'],
  ['Kotor', 42.43, 18.77, './images/Kotor.jpg'],
  ['Ulcinj', 41.92, 19.2, './images/Ulcinj.jpg'],
  ['Tirana', 41.328889, 19.817778, './images/Tirana.jpg'],
  ['Ohrid', 41.116944, 20.801667, './images/Ohrid.jpg'],
  ['Skopje', 42, 21.433333, './images/Skopje.jpg'],
  ['Belgrade', 44.816667, 20.466667, './images/Belgrade.jpg'],
];



