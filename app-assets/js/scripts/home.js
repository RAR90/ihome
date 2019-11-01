// Dashboard - Modern
//----------------------

(function (window, document, $) {
    // //Sample toast
    setTimeout(function () {
        M.toast({ html: "Olá! Eu sou um exemplo de Toast" });
    }, 2000);

    // Donut chart
    // -----------
    var CurrentBalanceDonutChart = new Chartist.Pie(
        "#current-balance-donut-chart",
        {
            labels: [1, 2],
            series: [{ meta: "Completed", value: 80 }, { meta: "Remaining", value: 20 }]
        },
        {
            donut: true,
            donutWidth: 8,
            showLabel: false,
            plugins: [
                Chartist.plugins.tooltip({ class: "current-balance-tooltip", appendToBody: true }),
                Chartist.plugins.fillDonut({
                    items: [
                        {
                            content: '<p class="small">Arrecadado</p><h5 class="mt-0 mb-0">R$ 10k</h5>'
                        }
                    ]
                })
            ]
        }
    )


    var CurrentBalanceDonutChartAlt = new Chartist.Pie(
        "#current-balance-donut-chart-2",
        {
            labels: [1, 2],
            series: [{ meta: "Completed", value: 80 }, { meta: "Remaining", value: 20 }]
        },
        {
            donut: true,
            donutWidth: 8,
            showLabel: false,
            plugins: [
                Chartist.plugins.tooltip({ class: "current-balance-tooltip", appendToBody: true }),
                Chartist.plugins.fillDonut({
                    items: [
                        {
                            content: '<p class="small">Arrecadado</p><h5 class="mt-0 mb-0">R$ 10k</h5>'
                        }
                    ]
                })
            ]
        }
    )

    // Total Transaction
    // -----------------
    var TotalTransactionLine = new Chartist.Line(
        "#total-transaction-line-chart",
        {
            series: [[3, 10, 4, 20, 7, 45, 5, 35, 20, 48, 30, 50]]
        },
        {
            chartPadding: 0,
            axisX: {
                showLabel: true,
                showGrid: false
            },
            axisY: {
                showLabel: true,
                showGrid: true,
                low: 0,
                high: 50,
                scaleMinSpace: 40
            },
            lineSmooth: Chartist.Interpolation.simple({
                divisor: 2
            }),
            plugins: [Chartist.plugins.tooltip({ class: "total-transaction-tooltip", appendToBody: true })],
            fullWidth: true
        }
    );

    TotalTransactionLine.on("created", function (data) {
        var defs = data.svg.querySelector("defs") || data.svg.elem("defs");
        defs
            .elem("linearGradient", {
                id: "lineLinearStats",
                x1: 0,
                y1: 0,
                x2: 1,
                y2: 0
            })
            .elem("stop", {
                offset: "0%",
                "stop-color": "#ffb376"
            })
            .parent()
            .elem("stop", {
                offset: "10%",
                "stop-color": "#ffb376"
            })
            .parent()
            .elem("stop", {
                offset: "30%",
                "stop-color": "#ffb376"
            })
            .parent()
            .elem("stop", {
                offset: "95%",
                "stop-color": "#F79543"
            })
            .parent()
            .elem("stop", {
                offset: "100%",
                "stop-color": "#F79543"
            });

        return defs;

    }).on("draw", function (data) {
        var circleRadius = 5;
        if (data.type === "point") {
            var circle = new Chartist.Svg("circle", {
                cx: data.x,
                cy: data.y,
                "ct:value": data.y,
                r: circleRadius,
                class: data.value.y === 35 ? "ct-point ct-point-circle" : "ct-point ct-point-circle-transperent"
            });
            data.element.replace(circle);
        }
    });



    // User Statics
    var UserStatisticsBarChart = new Chartist.Bar(
        "#user-statistics-bar-chart",
        {
            labels: ["B1", "B2", "B3", "B4", "B5", "B6"],
            series: [[4000, 8000, 12000, 14000, 12000, 18000], [5000, 10000, 13000, 12000, 11000, 15000]]
        },
        {
            // Default mobile configuration
            stackBars: true,
            chartPadding: 0,
            axisX: {
                showGrid: false
            },
            axisY: {
                showGrid: false,
                labelInterpolationFnc: function (value) {
                    return value / 1000 + "k";
                },
                scaleMinSpace: 50
            },
            plugins: [Chartist.plugins.tooltip({ class: "user-statistics-tooltip", appendToBody: true })]
        },
        [
            // Options override for media > 800px
            [
                "screen and (min-width: 800px)",
                {
                    stackBars: false,
                    seriesBarDistance: 10
                }
            ],
            // Options override for media > 1000px
            [
                "screen and (min-width: 1000px)",
                {
                    reverseData: false,
                    horizontalBars: false,
                    seriesBarDistance: 15
                }
            ]
        ]
    );

    UserStatisticsBarChart.on("draw", function (data) {
        if (data.type === "bar") {
            data.element.attr({
                style: "stroke-width: 12px",
                x1: data.x1 + 0.001
            });
            data.group.append(
                new Chartist.Svg(
                    "circle",
                    {
                        cx: data.x2,
                        cy: data.y2,
                        r: 6
                    },
                    "ct-slice-pie"
                )
            );
            data.element.animate({
                y2: {
                    begin: 500,
                    dur: 500,
                    from: data.y1,
                    to: data.y2
                }
            });


        }
    });

    UserStatisticsBarChart.on("created", function (data) {
        var defs = data.svg.querySelector("defs") || data.svg.elem("defs");
        defs
            .elem("linearGradient", {
                id: "barGradient1",
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
            })
            .elem("stop", {
                offset: 0,
                "stop-color": "#F79543"
            })
            .parent()
            .elem("stop", {
                offset: 1,
                "stop-color": "#F79543"
            });

        defs
            .elem("linearGradient", {
                id: "barGradient2",
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
            })
            .elem("stop", {
                offset: 0,
                "stop-color": "#bb5f14"
            })
            .parent()
            .elem("stop", {
                offset: 1,
                "stop-color": "#bb5f14"
            });
        return defs;
    });

    $("#sales-bar-1").sparkline([2, 5, 3, 2, 2, 4, 6, 7, 5, 6, 7], {
      type: 'bar',
      height: '50',
      width: '80',
      barSpacing: 2,
      barColor: '#FF4081',
      //tooltipFormat: $.spformat('{{value}}', 'tooltip-class')
    });

    $("#sales-bar-2").sparkline([2, 5, 3, 2, 2, 4, 6, 7, 5, 6, 7], {
      type: 'bar',
      height: '50',
      width: '80',
      barSpacing: 2,
      barColor: '#2196f3',
      //tooltipFormat: $.spformat('{{value}}', 'tooltip-class')
    });

    $("#sales-bar-3").sparkline([2, 5, 3, 2, 2, 4, 6, 7, 5, 6, 7], {
      type: 'bar',
      height: '50',
      width: '80',
      barSpacing: 2,
      barColor: '#8bc34a',
      //tooltipFormat: $.spformat('{{value}}', 'tooltip-class')
    });

    $("#sales-bar-4").sparkline([2, 5, 3, 2, 2, 4, 6, 7, 5, 6, 7], {
      type: 'bar',
      height: '50',
      width: '80',
      barSpacing: 2,
      barColor: '#ffd740',
      //tooltipFormat: $.spformat('{{value}}', 'tooltip-class')
    });



})(window, document, jQuery);