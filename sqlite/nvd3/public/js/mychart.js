function myData() {
    var series1 = [
      { x: 1, y: 5.6 },
      { x: 2, y: 5.6 },
      { x: 3, y: 5.0 },
      { x: 4, y: 4.4 },
      { x: 5, y: 4.4 },
      { x: 6, y: 3.9 },
      { x: 7, y: 3.9 },
      { x: 8, y: 2.8 },
      { x: 9, y: 3.9 },
      { x: 10, y: 4.4 },
      { x: 11, y: 6.1 },
      { x: 12, y: 7.8 },
      { x: 13, y: 8.9 },
      { x: 14, y: 8.9 },
      { x: 15, y: 10.0 },
      { x: 16, y: 10.0 },
      { x: 17, y: 10.0 },
      { x: 18, y: 8.3 },
      { x: 19, y: 3.9 },
      { x: 20, y: 2.8 },
      { x: 21, y: 1.7 },
      { x: 22, y: 1.1 },
      { x: 23, y: 0.6},
      { x: 24, y: -0.6}
    ];

    var series2 = [
        { x: 1, y: 3.9},
        { x: 2, y: 5.0},
        { x: 3, y: 5.0},
        { x: 4, y: 5.0},
        { x: 5, y: 4.4},
        { x: 6, y: 4.4},
        { x: 7, y: 3.9},
        { x: 8, y: 3.9},
        { x: 9, y: 4.4},
        { x: 10, y: 5.6},
        { x: 11, y: 6.1},
        { x: 12, y: 7.2},
        { x: 13, y: 8.3},
        { x: 14, y: 8.3},
        { x: 15, y: 8.3},
        { x: 16, y: 8.9},
        { x: 17, y: 8.3},
        { x: 18, y: 6.1},
        { x: 19, y: 2.8},
        { x: 20, y: 1.7},
        { x: 21, y: 1.1},
        { x: 22, y: -0.6},
        { x: 23, y: -0.6},
        { x: 24, y: 0.0},
    ];

    return [
        {
            key: "New Paltz",
            values: series1,
            color: "#0000ff"
        },
        {
            key: "Danbury",
            values: series2,
            color: "#00ff00"
        }
    ];
}

nv.addGraph(function() {
    var chart = nv.models.lineChart();

    chart.xAxis
            .axisLabel("Hour");

    chart.yAxis
            .axisLabel("Temp (C)")
            .tickFormat(d3.format("d"));

    d3.select("svg")
            .datum(myData())
            .transition().duration(500).call(chart);

    nv.utils.windowResize(function () {
        chart.update();
    });

    return chart;
});
