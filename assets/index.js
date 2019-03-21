var interest = 10; // interest use 10% by hardcoded
var tax = 5; // tax rate use 5% by hardcoded

var vm = new Vue({
    el: '#app',
    data: {
        savingsGoalVal: '',
        savingsBalanceVal: '',
        savingsYearsVal: '',
        savingsRateVal: '',
        monthlySavingTotal: 0
    },
    computed: {
        cal_sav_goal_month: function () {
            var goal = this.savingsGoalVal;
            var years = this.savingsYearsVal;
            var cur_balance = this.savingsBalanceVal;
            var interest_rate = (interest / 100) * ((100 - tax) / 100);
            this.monthlySavingTotal = (goal - cur_balance) / ((Math.pow(1 + (interest_rate / 12), years * 12) - 1) / (interest_rate / 12));
            return parseFloat(Math.round(this.monthlySavingTotal * 100) / 100).toFixed(2);
        },
        cal_sav_goal_week: function () {
            return parseFloat(Math.round((this.monthlySavingTotal / 7) * 100) / 100).toFixed(2);
        },
        numberCheck: function () {
            return this.cal_sav_goal_month == Infinity || this.cal_sav_goal_month == 'NaN'
        }
    }
})
