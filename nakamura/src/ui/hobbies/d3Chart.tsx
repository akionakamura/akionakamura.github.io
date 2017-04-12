import { EventEmitter }  from 'events';
import * as d3 from 'd3';

require('./d3Chart.css');

var ANIMATION_DURATION = 400;
var TOOLTIP_WIDTH = 30;
var TOOLTIP_HEIGHT = 30;

class D3Chart {
    create(el: any, props: any, state: any) {
        var svg = d3.select(el).append('svg')
            .attr('class', 'd3')
            .attr('width', props.width)
            .attr('height', props.height);

        svg.append('g')
            .attr('class', 'd3-points');

        svg.append('g')
            .attr('class', 'd3-tooltips');

        var dispatcher = new EventEmitter();
        this.update(el, state, dispatcher);

        return dispatcher;
    };

    update(el: any, state: any, dispatcher: any) {
        var scales = this._scales(el, state.domain);
        var prevScales = this._scales(el, state.prevDomain);
        this._drawPoints(el, scales, state.data, prevScales, dispatcher);
        this._drawTooltips(el, scales, state.tooltips, prevScales);
    };

    _scales(el: any, domain: any) {
        if (!domain) {
            return null;
        }

        var width = el.offsetWidth;
        var height = el.offsetHeight;

        var x = d3.scaleLinear()
            .range([0, width])
            .domain(domain.x);

        var y = d3.scaleLinear()
            .range([height, 0])
            .domain(domain.y);

        var z = d3.scaleLinear()
            .range([5, 20])
            .domain([1, 10]);

        return {x: x, y: y, z: z};
    };

    _drawPoints(el: any, scales: any, data: any, prevScales: any, dispatcher: any) {
        var g = d3.select(el).selectAll('.d3-points');

        var point = g.selectAll('.d3-point')
            .data(data, (d: any) => { return d.id; });

        point.enter().append('circle')
            .attr('class', 'd3-point')
            .attr('cx', (d: any) => {
                if (prevScales) {
                return prevScales.x(d.x);
                }
                return scales.x(d.x);
            })
            .transition()
            .duration(ANIMATION_DURATION)
            .attr('cx', (d: any) => { return scales.x(d.x); });

        point.attr('cy', (d: any) => { return scales.y(d.y); })
            .attr('r', (d: any) => { return scales.z(d.z); })
            .on('mouseover', (d: any) => {
                dispatcher.emit('point:mouseover', d);
            })
            .on('mouseout', (d: any) => {
                dispatcher.emit('point:mouseout', d);
            })
            .transition()
            .duration(ANIMATION_DURATION)
            .attr('cx', (d: any) => { return scales.x(d.x); });

        if (prevScales) {
            point.exit()
            .transition()
                .duration(ANIMATION_DURATION)
                .attr('cx', (d: any) => { return scales.x(d.x); })
                .remove();
        } else {
            point.exit().remove();
        }
    };

    _drawTooltips(el: any, scales: any, tooltips: any, prevScales: any) {
    var g = d3.select(el).selectAll('.d3-tooltips');

    var tooltipRect = g.selectAll('.d3-tooltip-rect')
        .data(tooltips, (d: any) => { return d.id; });

    tooltipRect.enter().append('rect')
        .attr('class', 'd3-tooltip-rect')
        .attr('width', TOOLTIP_WIDTH)
        .attr('height', TOOLTIP_HEIGHT)
        .attr('x', (d: any) => {
            if (prevScales) {
            return prevScales.x(d.x) - TOOLTIP_WIDTH / 2;
            }
            return scales.x(d.x) - TOOLTIP_WIDTH / 2;
        })
        .transition()
        .duration(ANIMATION_DURATION)
        .attr('x', (d: any) => { return scales.x(d.x) - TOOLTIP_WIDTH / 2; });

    tooltipRect.attr('y', (d: any) => { return scales.y(d.y) - scales.z(d.z) / 2 - TOOLTIP_HEIGHT; })
        .transition()
        .duration(ANIMATION_DURATION)
        .attr('x', (d: any) => { return scales.x(d.x) - TOOLTIP_WIDTH / 2; });

    if (prevScales) {
        tooltipRect.exit()
        .transition()
            .duration(ANIMATION_DURATION)
            .attr('x', (d: any) => { return scales.x(d.x) - TOOLTIP_WIDTH / 2; })
            .remove();
    } else {
        tooltipRect.exit()
            .remove();
    }

    var tooltipText = g.selectAll('.d3-tooltip-text')
        .data(tooltips, (d: any) => { return d.id; });

    tooltipText.enter().append('text')
        .attr('class', 'd3-tooltip-text')
        .attr('dy', '0.35em')
        .attr('text-anchor', 'middle')
        .text((d: any) => { return d.z; })
        .attr('x', (d: any) => {
            if (prevScales) {
            return prevScales.x(d.x);
            }
            return scales.x(d.x);
        })
        .transition()
        .duration(ANIMATION_DURATION)
        .attr('x', (d: any) => { return scales.x(d.x); });

    tooltipText.attr('y', (d: any) => { return scales.y(d.y) - scales.z(d.z) / 2 - TOOLTIP_HEIGHT / 2; })
        .transition()
        .duration(ANIMATION_DURATION)
        .attr('x', (d: any) => { return scales.x(d.x); });

    if (prevScales) {
        tooltipText.exit()
        .transition()
            .duration(ANIMATION_DURATION)
            .attr('x', (d: any) => { return scales.x(d.x); })
            .remove();
    } else {
        tooltipText.exit()
            .remove();
    }
    };

    destroy(el: any) {
        console.log('Detroyed')
    };
}

export default D3Chart;
