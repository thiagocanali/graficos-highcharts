import { Options } from 'highcharts';

export const donutChartOptions: Options = {
  chart: {
    type: 'pie',
    plotShadow: false,
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      innerSize: '99%',
      borderWidth: 40,
      /*borderColor: null,*/  //não entendi o erro, aparentemente na versão 9 do highcharts dá certo
      borderColor: 'null',    //menos mal, mas ainda zoado e continuo sem entender 
      slicedOffset: 20,
      dataLabels: {
        connectorWidth: 0,
      },
    },
  },
  title: {
    text: 'Gráfico Pizza </br> R$500.000,00',
    verticalAlign: 'middle',
    floating: true,

  },
  legend: {
    enabled: false,
  },
  series: [
    {
      type: 'pie',
      data: [
        { name: 'A', y: 1, color: '#eeeeee' },
        { name: 'B', y: 2, color: '#393e46' },
        { name: 'C', y: 3, color: '#00adb5' },
        { name: 'D', y: 4, color: '#eeeeee' },
        { name: 'E', y: 5, color: '#506ef9' },
      ],
    },
  ],
};
