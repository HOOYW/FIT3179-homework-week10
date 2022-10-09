var vg_1 = "js/visualization(Olympic Medal).vl.json";
var vg_2 = "js/visualization(Global Emissions).vl.json"

vegaEmbed("#OlympicMedal", vg_1).then(function(result) {
    // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed("#GlobalEmissions", vg_2).then(function(result) {
    // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);