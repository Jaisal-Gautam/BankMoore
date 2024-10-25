
//  Bar Graph
 var c1 =  document.getElementById("bar_chart").getContext("2d");

 var bar_chart = new Chart(c1,{
    type:"bar",
    data: {
        labels :["Mon","Tue","Web","Thurs","Fri","Sat","Sun"],
        datasets:[
            {
                label:["Deposits"],
                data:["490","325","315","490","150","395","300"],
                borderRadius:50,
                borderSkipped: false,
                barPercentage:0.6,
            },
            {
                label:["Withdraw"],
                data:["225","125","275","380","250","265","450"],
                borderRadius: 50,
                borderSkipped: false,
                barPercentage: 0.6,
                barThickness: 'flex'


            }


        ]
    },
    options:{
        responsive:true,
        maintainAspectRatio:false,
        scales: {
            y: {
                beginAtZero:true,

                grid: {
                    drawBorder: false,
                    
                },
                min: 0,
                max: 500,
                ticks: {
                    stepSize: 100
                }
            },
            x:{
                beginAtZero:true,
                borderWidth:5,
                grid:{
                    display:false,
                    drawOnChartArea:false,
                }

            }
        },
    }
    

 })

//  Polar Chart

var c2 =  document.getElementById("polar_chart").getContext("2d");
var polar_chart = new Chart(c2,{
    type:'polarArea',
    data :{
        labels: ["Entertainment","Investment","Bill-Expense","Others"],
        datasets: [{
          label: 'Expense',
          data: [15,35,20,30],
          backgroundColor: [
            'rgba(255, 99, 132,0.2)',
            'rgba(54, 162, 242,0.2)',
            'rgba(25, 159, 64,0.2)',
            'rgba(153, 102, 255,0.2)'
          ],
          borderWidth:8,
        }]
      },

      options:{
        responsive:true,
        maintainAspectRatio:false,
        scales: {
            r: {
              display: false,  
              grid: {
                display: false  
              },
              pointLabels: {
                display: false  
              },
              ticks: {
                display: false  
              }
            }},
            plugins:{
                legend:{
                        display:true
                    
                },
            }
      },
});

//  Line Chart
var c3 =  document.getElementById("line_chart").getContext("2d");


var line_chart = new Chart(c3,{
    type:'line',
    data:{labels: ['Jan','Feb','Mar','Apr','May','Jun'],
    datasets: [{
      label: 'My First Dataset',
      data: [6005, 5900, 8000, 8100, 5006, 5005, 4020],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.5
    }]},
    options:{
      responsive:true,
      maintainAspectRatio:false,
      pointStyle: false,
      plugins:{
        legend:{
                display:false
        }
    }}}
    
);



