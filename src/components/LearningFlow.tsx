import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { sankey, sankeyLinkHorizontal, sankeyCenter } from 'd3-sankey';

interface SankeyData {
  nodes: { name: string }[];
  links: { source: number; target: number; value: number }[];
}

const data: SankeyData = {
  nodes: [
    { name: "Beginner" },
    { name: "Intermediate" },
    { name: "Advanced" },
    { name: "Completed" },
    { name: "Churned" },
    { name: "On Hold" }
  ],
  links: [
    { source: 0, target: 1, value: 4500 },
    { source: 0, target: 4, value: 1000 },
    { source: 0, target: 5, value: 500 },
    { source: 1, target: 2, value: 2800 },
    { source: 1, target: 4, value: 1200 },
    { source: 1, target: 5, value: 500 },
    { source: 2, target: 3, value: 2000 },
    { source: 2, target: 4, value: 500 },
    { source: 2, target: 5, value: 300 }
  ]
};

export default function LearningFlow() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 800;
    const height = 400;
    const margin = { top: 20, right: 100, bottom: 20, left: 100 };

    const svg = d3.select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .style("width", "100%")
      .style("height", "auto");

    svg.selectAll("*").remove();

    const sankeyGenerator = sankey<any, any>()
      .nodeWidth(24)
      .nodePadding(40)
      .extent([[margin.left, margin.top], [width - margin.right, height - margin.bottom]])
      .nodeAlign(sankeyCenter);

    const { nodes, links } = sankeyGenerator({
      nodes: data.nodes.map(d => Object.assign({}, d)),
      links: data.links.map(d => Object.assign({}, d))
    });

    // Links
    svg.append("g")
      .attr("fill", "none")
      .attr("stroke-opacity", 0.2)
      .selectAll("path")
      .data(links)
      .join("path")
      .attr("d", sankeyLinkHorizontal())
      .attr("stroke", d => d.target.name === "Churned" ? "#EF4135" : "#0055A4")
      .attr("stroke-width", d => Math.max(1, d.width))
      .on("mouseenter", function() { d3.select(this).attr("stroke-opacity", 0.5); })
      .on("mouseleave", function() { d3.select(this).attr("stroke-opacity", 0.2); });

    // Nodes
    const node = svg.append("g")
      .selectAll("g")
      .data(nodes)
      .join("g");

    node.append("rect")
      .attr("x", d => d.x0)
      .attr("y", d => d.y0)
      .attr("height", d => d.y1 - d.y0)
      .attr("width", d => d.x1 - d.x0)
      .attr("fill", d => {
        if (d.name === "Churned") return "#EF4135";
        if (d.name === "Completed") return "#10b981";
        return "#0055A4";
      })
      .attr("rx", 6);

    node.append("text")
      .attr("x", d => d.x0 < width / 2 ? d.x1 + 10 : d.x0 - 10)
      .attr("y", d => (d.y1 + d.y0) / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", d => d.x0 < width / 2 ? "start" : "end")
      .text(d => d.name)
      .attr("font-size", "12px")
      .attr("font-weight", "bold")
      .attr("fill", "#1e293b");

    node.append("text")
      .attr("x", d => d.x0 < width / 2 ? d.x1 + 10 : d.x0 - 10)
      .attr("y", d => (d.y1 + d.y0) / 2 + 15)
      .attr("dy", "0.35em")
      .attr("text-anchor", d => d.x0 < width / 2 ? "start" : "end")
      .text(d => `${d.value} users`)
      .attr("font-size", "10px")
      .attr("fill", "#64748b");

  }, []);

  return (
    <div className="w-full bg-white p-6 rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-lg font-bold text-fr-blue">Learning Flow Journey</h3>
          <p className="text-xs text-slate-400">User transitions between proficiency levels and outcomes</p>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500">
            <div className="w-2 h-2 bg-fr-blue rounded-full" /> Progression
          </div>
          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500">
            <div className="w-2 h-2 bg-fr-red rounded-full" /> Churn
          </div>
        </div>
      </div>
      <div className="relative">
        <svg ref={svgRef} />
      </div>
    </div>
  );
}
