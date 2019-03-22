
var vm = new Vue({
    el: '#app',
    data: {
        savingsGoalVal: '',
        savingsBalanceVal: '',
        savingsYearsVal: '',
        savingsRateVal: '',
        savingsInterestVal: '',
        savingsTaxVal: '',
        monthlySavingTotal: 0
    },
    methods: {
        resetValues: function () {
            this.savingsGoalVal= '';
            this.savingsBalanceVal= '';
            this.savingsYearsVal= '';
            this.savingsRateVal= '';
            this.savingsInterestVal='';
            this.savingsTaxVal=''
            document.getElementById('calculationArea').style.border = "1px solid white"
        },
        borderChange: function() {
           document.getElementById('calculationArea').style.border = "1px solid #d2473d";;
        }
    },
    computed: {
        cal_sav_goal_month: function () {
            var goal = this.savingsGoalVal;
            var years = this.savingsYearsVal;
            var interest = this.savingsInterestVal;
            var tax = this.savingsTaxVal;
            var cur_balance = this.savingsBalanceVal;
            var interest_rate = (interest / 100) * ((100 - tax) / 100);
            this.monthlySavingTotal = (goal - cur_balance) / ((Math.pow(1 + (interest_rate / 12), years * 12) - 1) / (interest_rate / 12));
            return parseFloat(Math.round(this.monthlySavingTotal * 100) / 100).toFixed(2);
        },
        cal_sav_goal_week: function () {
            return parseFloat(Math.round((this.monthlySavingTotal / 4) * 100) / 100).toFixed(2);
        },
        numberCheck: function () {
            return this.cal_sav_goal_month == Infinity || this.cal_sav_goal_month == 'NaN'
        }
    }
})
