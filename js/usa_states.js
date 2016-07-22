var election = new Datamap({
  scope: 'usa',
  element: document.getElementById('map_election'),

  //Get the name of the state you just clicked on (works on the computer)
  done: function(datamap) {
        datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
            alert(geography.properties.name);
        });
  },

  height: 1000,
  width : 1400,
  projection:"mercator",

  //Setting responsive to true so as to react to resize and other events
  responsive: false,

  geographyConfig: {
    highlightBorderColor: '#bada55',

   // Works as hover event on the computer but click event on the mobile
   popupTemplate: function(geography, data) {
      return '<div class="hoverinfo">'
                + "<img src='images/hillary.png'/>"
                + "<img src='images/bernie.png'/>"
                + "<img src='images/trump.png'/>"
                + "<img src='images/cruz.png'/>"
                + "<a href='#middle'>Analyse state electorate</a>"
                + "</div>"
    },
    highlightBorderWidth: 3
  },

  fills: {
      'Republican': '#CC4731',
      'Democrat': '#306596',
      'Heavy Democrat': '#667FAF',
      'Light Democrat': '#A9C0DE',
      'Heavy Republican': '#CA5E5B',
      'Light Republican': '#EAA9A8',
      defaultFill: '#EDDC4E'
},
data:{}
});

// Setting the default labels of state names
election.labels();

// Resize on window resize event
d3.select(window).on('resize', function() {
    election.resize();
});
