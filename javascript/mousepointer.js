var width = "100%",
  height = "200%";

var i = 0;

var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height);

svg.append("rect")
  .attr("width", width)
  .attr("height", height)
  .on("ontouchstart" in document ? "touchmove" : "mousemove", particle);

function particle() {
  var m = d3.mouse(this);
  var n = d3.touch(this);

  svg.insert("circle", "rect")
    .attr("cx", m[0])
    .attr("cy", m[1])
    .attr("r", 1) // 1e-6
    .style("stroke", d3.hsl("#112B3C"))
    .style("stroke-opacity", 1)
    .transition()
    .duration(400)
    .ease(Math.sqrt)
    .attr("r", 1)
    .style("stroke-opacity", 1e-2)
    .style("stroke-width", 70)
    .remove();


  d3.event.preventDefult();
}
