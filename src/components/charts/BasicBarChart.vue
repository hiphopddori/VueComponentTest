
<script>
// https://www.npmjs.com/package/vue-chartjs

import { Bar,Line } from 'vue-chartjs'
export default {
    extends: "Bar"
    ,props: ['data']
    ,mounted () {
    // Overwriting base render method with actual data.
        this.renderChart(this.data
        ,{
            responsive: true,
            legend: {
                display: false
            }
            , title: {
                display: false
            }
        }
    ) 
  }
}
</script>
