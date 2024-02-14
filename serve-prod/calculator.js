/* Inputs - Transactability */
const input_transactabilityAssumption = $("#transactability-assumption");
const input_transactabilityQuarters = $("#transactability-quarters");
const input_transactabilityRamp = $("#transactability-ramp");
/* Input - ASP % + Assumption / Target */
const input_aspAssumption = $("#asp-assumption");
/* Inputs - Win Rate % + Assumption */
const input_winRateAssumption = $("#win-rate-assumption");
/* Inputs - Reciprocity */
const input_reciprocityAssumption = $("#reciprocity-assumption");
const input_reciprocityQuartersBefore = $("#reciprocity-quarters-before");
const input_reciprocityQuarters = $("#reciprocity-quarters");
const input_reciprocityRamp = $("#reciprocity-ramp");
/* Inputs - Baselines */
const input_baselineAnnualRevenue = $("#baseline-annual-revenue");
const input_baselineAvgSellingPrice = $("#baseline-average-selling-price");
const input_baselineBaseWinRate = $("#baseline-base-win-rate");
const input_baselineEstAnnualGrowth = $("#baseline-est-annual-growth");
const input_baselineQ1 = $("#baseline-q1");
const input_baselineQ2 = $("#baseline-q2");
const input_baselineQ3 = $("#baseline-q3");
/* Results - Baselines */
const result_baselineAnnualPipelineTarget = $("#baseline-annual-pipeline-target");
const result_baselineAnnualOpportunities = $("#baseline-annual-opportunities");
const result_baselineQ4 = $("#baseline-q4");
/* Results - Table - Baseline Pipeline */
const result_baselinePipelineFy1_Q1 = $("#baseline-pipeline-fy1-q1");
const result_baselinePipelineFy1_Q2 = $("#baseline-pipeline-fy1-q2");
const result_baselinePipelineFy1_Q3 = $("#baseline-pipeline-fy1-q3");
const result_baselinePipelineFy1_Q4 = $("#baseline-pipeline-fy1-q4");
const result_baselinePipelineFy2_Q1 = $("#baseline-pipeline-fy2-q1");
const result_baselinePipelineFy2_Q2 = $("#baseline-pipeline-fy2-q2");
const result_baselinePipelineFy2_Q3 = $("#baseline-pipeline-fy2-q3");
const result_baselinePipelineFy2_Q4 = $("#baseline-pipeline-fy2-q4");
/* Results - Table - Baseline Opportunity */
const result_baselineOpportunityFy1_Q1 = $("#baseline-opportunity-fy1-q1");
const result_baselineOpportunityFy1_Q2 = $("#baseline-opportunity-fy1-q2");
const result_baselineOpportunityFy1_Q3 = $("#baseline-opportunity-fy1-q3");
const result_baselineOpportunityFy1_Q4 = $("#baseline-opportunity-fy1-q4");
const result_baselineOpportunityFy2_Q1 = $("#baseline-opportunity-fy2-q1");
const result_baselineOpportunityFy2_Q2 = $("#baseline-opportunity-fy2-q2");
const result_baselineOpportunityFy2_Q3 = $("#baseline-opportunity-fy2-q3");
const result_baselineOpportunityFy2_Q4 = $("#baseline-opportunity-fy2-q4");
/* Results - Table - Baseline Revenue */
const result_baselineRevenueFy1_Q1 = $("#baseline-revenue-fy1-q1");
const result_baselineRevenueFy1_Q2 = $("#baseline-revenue-fy1-q2");
const result_baselineRevenueFy1_Q3 = $("#baseline-revenue-fy1-q3");
const result_baselineRevenueFy1_Q4 = $("#baseline-revenue-fy1-q4");
const result_baselineRevenueFy2_Q1 = $("#baseline-revenue-fy2-q1");
const result_baselineRevenueFy2_Q2 = $("#baseline-revenue-fy2-q2");
const result_baselineRevenueFy2_Q3 = $("#baseline-revenue-fy2-q3");
const result_baselineRevenueFy2_Q4 = $("#baseline-revenue-fy2-q4");
const result_baselineRevenueTotal = $("#baseline-revenue-total");
/* Results - Table - Marketplace Ramp */
const result_marketplaceRampFy1_Q1 = $("#marketplace-ramp-fy1-q1");
const result_marketplaceRampFy1_Q2 = $("#marketplace-ramp-fy1-q2");
const result_marketplaceRampFy1_Q3 = $("#marketplace-ramp-fy1-q3");
const result_marketplaceRampFy1_Q4 = $("#marketplace-ramp-fy1-q4");
const result_marketplaceRampFy2_Q1 = $("#marketplace-ramp-fy2-q1");
const result_marketplaceRampFy2_Q2 = $("#marketplace-ramp-fy2-q2");
const result_marketplaceRampFy2_Q3 = $("#marketplace-ramp-fy2-q3");
const result_marketplaceRampFy2_Q4 = $("#marketplace-ramp-fy2-q4");
/* Results - Table - Referral Target */
const result_referralTargetFy1_Q1 = $("#referral-target-fy1-q1");
const result_referralTargetFy1_Q2 = $("#referral-target-fy1-q2");
const result_referralTargetFy1_Q3 = $("#referral-target-fy1-q3");
const result_referralTargetFy1_Q4 = $("#referral-target-fy1-q4");
const result_referralTargetFy2_Q1 = $("#referral-target-fy2-q1");
const result_referralTargetFy2_Q2 = $("#referral-target-fy2-q2");
const result_referralTargetFy2_Q3 = $("#referral-target-fy2-q3");
const result_referralTargetFy2_Q4 = $("#referral-target-fy2-q4");
const result_referralTargetTotal = $("#referral-target-total");
/* Results - Table - Referral Projection */
const result_referralProjectionFy1_Q1 = $("#referral-projection-fy1-q1");
const result_referralProjectionFy1_Q2 = $("#referral-projection-fy1-q2");
const result_referralProjectionFy1_Q3 = $("#referral-projection-fy1-q3");
const result_referralProjectionFy1_Q4 = $("#referral-projection-fy1-q4");
const result_referralProjectionFy2_Q1 = $("#referral-projection-fy2-q1");
const result_referralProjectionFy2_Q2 = $("#referral-projection-fy2-q2");
const result_referralProjectionFy2_Q3 = $("#referral-projection-fy2-q3");
const result_referralProjectionFy2_Q4 = $("#referral-projection-fy2-q4");
const result_referralProjectionTotal = $("#referral-projection-total");
/* Results - Table - Pipeline Projection */
const result_pipelineProjectionFy1_Q1 = $("#pipeline-projection-fy1-q1");
const result_pipelineProjectionFy1_Q2 = $("#pipeline-projection-fy1-q2");
const result_pipelineProjectionFy1_Q3 = $("#pipeline-projection-fy1-q3");
const result_pipelineProjectionFy1_Q4 = $("#pipeline-projection-fy1-q4");
const result_pipelineProjectionFy2_Q1 = $("#pipeline-projection-fy2-q1");
const result_pipelineProjectionFy2_Q2 = $("#pipeline-projection-fy2-q2");
const result_pipelineProjectionFy2_Q3 = $("#pipeline-projection-fy2-q3");
const result_pipelineProjectionFy2_Q4 = $("#pipeline-projection-fy2-q4");
const result_pipelineProjectionTotal = $("#pipeline-projection-total");
/* Results - Table - Revenue Impact */
const result_revenueImpactFy1_Q1 = $("#revenue-impact-fy1-q1");
const result_revenueImpactFy1_Q2 = $("#revenue-impact-fy1-q2");
const result_revenueImpactFy1_Q3 = $("#revenue-impact-fy1-q3");
const result_revenueImpactFy1_Q4 = $("#revenue-impact-fy1-q4");
const result_revenueImpactFy2_Q1 = $("#revenue-impact-fy2-q1");
const result_revenueImpactFy2_Q2 = $("#revenue-impact-fy2-q2");
const result_revenueImpactFy2_Q3 = $("#revenue-impact-fy2-q3");
const result_revenueImpactFy2_Q4 = $("#revenue-impact-fy2-q4");
const result_revenueImpactTotal = $("#revenue-impact-total");
/* Results - Table - Revenue Impact */
const result_projectedRevenueFy1_Q1 = $("#projected-revenue-fy1-q1");
const result_projectedRevenueFy1_Q2 = $("#projected-revenue-fy1-q2");
const result_projectedRevenueFy1_Q3 = $("#projected-revenue-fy1-q3");
const result_projectedRevenueFy1_Q4 = $("#projected-revenue-fy1-q4");
const result_projectedRevenueFy2_Q1 = $("#projected-revenue-fy2-q1");
const result_projectedRevenueFy2_Q2 = $("#projected-revenue-fy2-q2");
const result_projectedRevenueFy2_Q3 = $("#projected-revenue-fy2-q3");
const result_projectedRevenueFy2_Q4 = $("#projected-revenue-fy2-q4");
const result_projectedRevenueTotal = $("#projected-revenue-total");
/* Ramp Variables */
const transactibilityScalar = 100;
const transactibilityDelay = 0;
const reciprocityScalar = 100;
/* We are not going to create results variables for all ramp types
we will use 9 variables that will be updated based on the ramp that is selected. */
/* Results - Ramps */
let result_transactibilityRamp = new Array(9);
let result_reciprocityRamp = new Array(9);
/* Chart.js Script */
let scriptChartJS = document.createElement("script");
scriptChartJS.src = "https://cdn.jsdelivr.net/npm/chart.js";
scriptChartJS.onload = function () {
    createCharts();
    updateCharts();
}
document.head.appendChild(scriptChartJS);
let chart_PipelineImpact, chart_RevenueImpact;
let chartData_ReferralProjection = new Array(8);
let chartData_ReferralTarget = new Array(8);
let chartData_PipelineProjection = new Array(8);
let chartData_BaselinePipeline = new Array(8);
let chartData_RevenueImpact = new Array(8);
let chartData_BaselineRevenue = new Array(8);
/* General Variables */
const key_intValue = "internal-value";
let isInitialized = false;

/* Grabs the internal value and set as the input val */
$("input").on("focus", function () {
    $(this).val($(this).attr(key_intValue));
});

/* Controls the allowed keys for each kind of input */
$("input").on("keydown", function (event) {
    /* Check if the pressed key is Enter (key code 13) */
    if (event.keyCode === 13) {
        /* Blur the input field when Enter is pressed */
        $(this).blur();
        return;
    }
    switch ($(this).attr("display-type")) {
        case "percentage" || "currency":
            /* Allow: backspace, delete, tab, escape, and enter */
            if ($.inArray(event.keyCode, [46, 8, 9, 27, 13]) !== -1 ||
                /* Allow: Ctrl+A */
                (event.keyCode == 65 && (event.ctrlKey === true || event.metaKey === true)) ||
                /* Allow: Ctrl+C */
                (event.keyCode == 67 && (event.ctrlKey === true || event.metaKey === true)) ||
                /* Allow: Ctrl+X */
                (event.keyCode == 88 && (event.ctrlKey === true || event.metaKey === true)) ||
                /* Allow: home, end, left, right */
                (event.keyCode >= 35 && event.keyCode <= 39)) {
                /* Let it happen, don't do anything */
                return;
            }
            /* Ensure that it is a number and stop the keypress */
            if ((event.shiftKey || (event.keyCode < 48 || event.keyCode > 57)) &&
                (event.keyCode < 96 || event.keyCode > 105)) {
                event.preventDefault();
            }
            break;
    }
});

/* Check if the content that is being pasted is supported by the input */
$("input").on("paste", function (event) {
    switch ($(this).attr("display-type")) {
        case "percentage" || "currency":
            /* Get the pasted text */
            let _pastedText = event.originalEvent.clipboardData.getData('text');
            /* Remove non-numeric characters */
            var _cleanedText = _pastedText.replace(/[^0-9]/g, '');
            /* Update the input value with the cleaned text */
            $(this).val(_cleanedText);
            /* Prevent the default paste behavior */
            event.preventDefault();
            break;
    }
});

/* On blur gets the internal value and format it to display as the input value */
$("input").on("blur", function () {
    /* First check if the input has a value val and if not reset to default */
    if ($(this).val() == "") { $(this).val($(this).attr("default-value")); }
    /* Save the val */
    $(this).attr(key_intValue, $(this).val());
    /* Format and update the input val */
    switch ($(this).attr("display-type")) {
        case "percentage":
            $(this).val(formatPercentage($(this).val()));
            break;
        case "currency":
            $(this).val(formatCurrency($(this).val()));
            break;
    }
    if (isInitialized) {
        runCalculations();
        updateCharts();
    }
});

$("select").on("change", function () {
    runCalculations();
    updateCharts();
});

function formatCurrency(num) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    }).format(num);
}

function formatPercentage(num) {
    return Math.floor(num) + "%";
}

function formatNumber(num, round = true) {
    let _num = parseFloat(num);
    if (round) {
        _num = Math.round(_num);
    }
    return _num.toLocaleString("en-US");
}

function calculateCloudSalesAssumptions() {
    /* Calculate */
    let _annualPipelineTarget = input_baselineAnnualRevenue.attr(key_intValue) / (
        input_baselineBaseWinRate.attr(key_intValue) / 100);
    let _annualOpportunities = _annualPipelineTarget / input_baselineAvgSellingPrice.attr(
        key_intValue);
    let _baselineQ4 = 100 - input_baselineQ3.attr(key_intValue) - input_baselineQ2.attr(
        key_intValue) - input_baselineQ1.attr(key_intValue);
    /* Save raw values */
    result_baselineAnnualPipelineTarget.attr(key_intValue, _annualPipelineTarget);
    result_baselineAnnualOpportunities.attr(key_intValue, _annualOpportunities);
    result_baselineQ4.attr(key_intValue, _baselineQ4);
    /* Show results */
    result_baselineAnnualPipelineTarget.text(formatCurrency(_annualPipelineTarget));
    result_baselineAnnualOpportunities.text(formatNumber(_annualOpportunities));
    result_baselineQ4.text(formatPercentage(_baselineQ4));
}

function calculateTableBaselinePipeline() {
    let _baselinePipelineFy1_Q1 = result_baselineAnnualPipelineTarget.attr(key_intValue) * (
        input_baselineQ1.attr(key_intValue) / 100);
    let _baselinePipelineFy1_Q2 = result_baselineAnnualPipelineTarget.attr(key_intValue) * (
        input_baselineQ2.attr(key_intValue) / 100);
    let _baselinePipelineFy1_Q3 = result_baselineAnnualPipelineTarget.attr(key_intValue) * (
        input_baselineQ3.attr(key_intValue) / 100);
    let _baselinePipelineFy1_Q4 = result_baselineAnnualPipelineTarget.attr(key_intValue) * (
        result_baselineQ4.attr(key_intValue) / 100);
    let _baselinePipelineFy2_Q1 = result_baselineAnnualPipelineTarget.attr(key_intValue) * (
        input_baselineQ1.attr(key_intValue) / 100) * (1 + (input_baselineEstAnnualGrowth.attr(
            key_intValue) / 100));
    let _baselinePipelineFy2_Q2 = result_baselineAnnualPipelineTarget.attr(key_intValue) * (
        input_baselineQ2.attr(key_intValue) / 100) * (1 + (input_baselineEstAnnualGrowth.attr(
            key_intValue) / 100));
    let _baselinePipelineFy2_Q3 = result_baselineAnnualPipelineTarget.attr(key_intValue) * (
        input_baselineQ3.attr(key_intValue) / 100) * (1 + (input_baselineEstAnnualGrowth.attr(
            key_intValue) / 100));
    let _baselinePipelineFy2_Q4 = result_baselineAnnualPipelineTarget.attr(key_intValue) * (
        result_baselineQ4.attr(key_intValue) / 100) * (1 + (input_baselineEstAnnualGrowth.attr(
            key_intValue) / 100));
    /* Save raw values */
    result_baselinePipelineFy1_Q1.attr(key_intValue, _baselinePipelineFy1_Q1);
    result_baselinePipelineFy1_Q2.attr(key_intValue, _baselinePipelineFy1_Q2);
    result_baselinePipelineFy1_Q3.attr(key_intValue, _baselinePipelineFy1_Q3);
    result_baselinePipelineFy1_Q4.attr(key_intValue, _baselinePipelineFy1_Q4);
    result_baselinePipelineFy2_Q1.attr(key_intValue, _baselinePipelineFy2_Q1);
    result_baselinePipelineFy2_Q2.attr(key_intValue, _baselinePipelineFy2_Q2);
    result_baselinePipelineFy2_Q3.attr(key_intValue, _baselinePipelineFy2_Q3);
    result_baselinePipelineFy2_Q4.attr(key_intValue, _baselinePipelineFy2_Q4);
    /* Show results */
    result_baselinePipelineFy1_Q1.text(formatCurrency(_baselinePipelineFy1_Q1));
    result_baselinePipelineFy1_Q2.text(formatCurrency(_baselinePipelineFy1_Q2));
    result_baselinePipelineFy1_Q3.text(formatCurrency(_baselinePipelineFy1_Q3));
    result_baselinePipelineFy1_Q4.text(formatCurrency(_baselinePipelineFy1_Q4));
    result_baselinePipelineFy2_Q1.text(formatCurrency(_baselinePipelineFy2_Q1));
    result_baselinePipelineFy2_Q2.text(formatCurrency(_baselinePipelineFy2_Q2));
    result_baselinePipelineFy2_Q3.text(formatCurrency(_baselinePipelineFy2_Q3));
    result_baselinePipelineFy2_Q4.text(formatCurrency(_baselinePipelineFy2_Q4));
}

function calculateTableBaselineOpportunities() {
    let _baselineOpportunityFy1_Q1 = result_baselinePipelineFy1_Q1.attr(key_intValue) /
        input_baselineAvgSellingPrice.attr(key_intValue);
    let _baselineOpportunityFy1_Q2 = result_baselinePipelineFy1_Q2.attr(key_intValue) /
        input_baselineAvgSellingPrice.attr(key_intValue);
    let _baselineOpportunityFy1_Q3 = result_baselinePipelineFy1_Q3.attr(key_intValue) /
        input_baselineAvgSellingPrice.attr(key_intValue);
    let _baselineOpportunityFy1_Q4 = result_baselinePipelineFy1_Q4.attr(key_intValue) /
        input_baselineAvgSellingPrice.attr(key_intValue);
    let _baselineOpportunityFy2_Q1 = result_baselinePipelineFy2_Q1.attr(key_intValue) /
        input_baselineAvgSellingPrice.attr(key_intValue);
    let _baselineOpportunityFy2_Q2 = result_baselinePipelineFy2_Q2.attr(key_intValue) /
        input_baselineAvgSellingPrice.attr(key_intValue);
    let _baselineOpportunityFy2_Q3 = result_baselinePipelineFy2_Q3.attr(key_intValue) /
        input_baselineAvgSellingPrice.attr(key_intValue);
    let _baselineOpportunityFy2_Q4 = result_baselinePipelineFy2_Q4.attr(key_intValue) /
        input_baselineAvgSellingPrice.attr(key_intValue);
    /* Save raw values */
    result_baselineOpportunityFy1_Q1.attr(key_intValue, _baselineOpportunityFy1_Q1);
    result_baselineOpportunityFy1_Q2.attr(key_intValue, _baselineOpportunityFy1_Q2);
    result_baselineOpportunityFy1_Q3.attr(key_intValue, _baselineOpportunityFy1_Q3);
    result_baselineOpportunityFy1_Q4.attr(key_intValue, _baselineOpportunityFy1_Q4);
    result_baselineOpportunityFy2_Q1.attr(key_intValue, _baselineOpportunityFy2_Q1);
    result_baselineOpportunityFy2_Q2.attr(key_intValue, _baselineOpportunityFy2_Q2);
    result_baselineOpportunityFy2_Q3.attr(key_intValue, _baselineOpportunityFy2_Q3);
    result_baselineOpportunityFy2_Q4.attr(key_intValue, _baselineOpportunityFy2_Q4);
    /* Show results */
    result_baselineOpportunityFy1_Q1.text(formatNumber(_baselineOpportunityFy1_Q1));
    result_baselineOpportunityFy1_Q2.text(formatNumber(_baselineOpportunityFy1_Q2));
    result_baselineOpportunityFy1_Q3.text(formatNumber(_baselineOpportunityFy1_Q3));
    result_baselineOpportunityFy1_Q4.text(formatNumber(_baselineOpportunityFy1_Q4));
    result_baselineOpportunityFy2_Q1.text(formatNumber(_baselineOpportunityFy2_Q1));
    result_baselineOpportunityFy2_Q2.text(formatNumber(_baselineOpportunityFy2_Q2));
    result_baselineOpportunityFy2_Q3.text(formatNumber(_baselineOpportunityFy2_Q3));
    result_baselineOpportunityFy2_Q4.text(formatNumber(_baselineOpportunityFy2_Q4));
}

function calculateBaselineRevenue() {
    let _baselineRevenueFy1_Q1 = result_baselineOpportunityFy1_Q1.attr(key_intValue) * (input_baselineBaseWinRate.attr(key_intValue) / 100) * input_baselineAvgSellingPrice.attr(key_intValue);
    let _baselineRevenueFy1_Q2 = result_baselineOpportunityFy1_Q2.attr(key_intValue) * (input_baselineBaseWinRate.attr(key_intValue) / 100) * input_baselineAvgSellingPrice.attr(key_intValue);
    let _baselineRevenueFy1_Q3 = result_baselineOpportunityFy1_Q3.attr(key_intValue) * (input_baselineBaseWinRate.attr(key_intValue) / 100) * input_baselineAvgSellingPrice.attr(key_intValue);
    let _baselineRevenueFy1_Q4 = result_baselineOpportunityFy1_Q4.attr(key_intValue) * (input_baselineBaseWinRate.attr(key_intValue) / 100) * input_baselineAvgSellingPrice.attr(key_intValue);
    let _baselineRevenueFy2_Q1 = result_baselineOpportunityFy2_Q1.attr(key_intValue) * (input_baselineBaseWinRate.attr(key_intValue) / 100) * input_baselineAvgSellingPrice.attr(key_intValue);
    let _baselineRevenueFy2_Q2 = result_baselineOpportunityFy2_Q2.attr(key_intValue) * (input_baselineBaseWinRate.attr(key_intValue) / 100) * input_baselineAvgSellingPrice.attr(key_intValue);
    let _baselineRevenueFy2_Q3 = result_baselineOpportunityFy2_Q3.attr(key_intValue) * (input_baselineBaseWinRate.attr(key_intValue) / 100) * input_baselineAvgSellingPrice.attr(key_intValue);
    let _baselineRevenueFy2_Q4 = result_baselineOpportunityFy2_Q4.attr(key_intValue) * (input_baselineBaseWinRate.attr(key_intValue) / 100) * input_baselineAvgSellingPrice.attr(key_intValue);
    let _baselineRevenueTotal = _baselineRevenueFy1_Q1 + _baselineRevenueFy1_Q2 + _baselineRevenueFy1_Q3 + _baselineRevenueFy1_Q4 + _baselineRevenueFy2_Q1 + _baselineRevenueFy2_Q2 + _baselineRevenueFy2_Q3 + _baselineRevenueFy2_Q4;
    /* Save raw values */
    result_baselineRevenueFy1_Q1.attr(key_intValue, _baselineRevenueFy1_Q1);
    result_baselineRevenueFy1_Q2.attr(key_intValue, _baselineRevenueFy1_Q2);
    result_baselineRevenueFy1_Q3.attr(key_intValue, _baselineRevenueFy1_Q3);
    result_baselineRevenueFy1_Q4.attr(key_intValue, _baselineRevenueFy1_Q4);
    result_baselineRevenueFy2_Q1.attr(key_intValue, _baselineRevenueFy2_Q1);
    result_baselineRevenueFy2_Q2.attr(key_intValue, _baselineRevenueFy2_Q2);
    result_baselineRevenueFy2_Q3.attr(key_intValue, _baselineRevenueFy2_Q3);
    result_baselineRevenueFy2_Q4.attr(key_intValue, _baselineRevenueFy2_Q4);
    result_baselineRevenueTotal.attr(key_intValue, _baselineRevenueTotal);
    /* Show results */
    result_baselineRevenueFy1_Q1.text(formatCurrency(_baselineRevenueFy1_Q1));
    result_baselineRevenueFy1_Q2.text(formatCurrency(_baselineRevenueFy1_Q2));
    result_baselineRevenueFy1_Q3.text(formatCurrency(_baselineRevenueFy1_Q3));
    result_baselineRevenueFy1_Q4.text(formatCurrency(_baselineRevenueFy1_Q4));
    result_baselineRevenueFy2_Q1.text(formatCurrency(_baselineRevenueFy2_Q1));
    result_baselineRevenueFy2_Q2.text(formatCurrency(_baselineRevenueFy2_Q2));
    result_baselineRevenueFy2_Q3.text(formatCurrency(_baselineRevenueFy2_Q3));
    result_baselineRevenueFy2_Q4.text(formatCurrency(_baselineRevenueFy2_Q4));
    result_baselineRevenueTotal.text(formatCurrency(_baselineRevenueTotal));
}

function calculateTransactibilityRamp() {
    for (let i = 0; i < result_transactibilityRamp.length; i++) {
        switch (input_transactabilityRamp.val()) {
            case "linear":
                let _linearRamp, _minValue;
                _linearRamp = linearRamp(transactibilityDelay, input_transactabilityQuarters.val(), transactibilityScalar, i);
                _minValue = Math.min(_linearRamp, transactibilityScalar);
                result_transactibilityRamp[i] = Math.max(_minValue, 0);
                break;

            case "aggressive":
                if (input_transactabilityQuarters.val() >= input_transactabilityQuarters.val() + transactibilityDelay) {
                    result_transactibilityRamp[i] = transactibilityScalar;
                }
                else {
                    result_transactibilityRamp[i] = aggressiveRamp(transactibilityDelay, input_transactabilityQuarters.val(), transactibilityScalar, i);
                }
                break;

            case "compounding":
                result_transactibilityRamp[i] = compoundingRamp(transactibilityDelay, input_transactabilityQuarters.val(), transactibilityScalar, i);
                break;
        }
    }
}

function calculateReciprocityRamp() {
    let _linearRamp, _minValue;
    for (let i = 0; i < result_reciprocityRamp.length; i++) {
        switch (input_reciprocityRamp.val()) {
            case "linear":
                _linearRamp = linearRamp(input_reciprocityQuartersBefore.val(), input_reciprocityQuarters.val(), reciprocityScalar, i);
                _minValue = Math.min(_linearRamp, reciprocityScalar);
                result_reciprocityRamp[i] = Math.max(_minValue, 0);
                break;

            case "aggressive":
                if (input_reciprocityQuarters.val() + 1 >= input_reciprocityQuarters.val() + input_reciprocityQuartersBefore.val()) {
                    result_reciprocityRamp[i] = transactibilityScalar;
                }
                else {
                    result_reciprocityRamp[i] = aggressiveRamp(input_reciprocityQuartersBefore.val(), input_reciprocityQuarters.val(), reciprocityScalar, i);
                }
                break;

            case "compounding":
                result_reciprocityRamp[i] = compoundingRamp(input_reciprocityQuartersBefore.val(), input_reciprocityQuarters.val(), reciprocityScalar, i);
                break;
        }
    }
}

function linearRamp(delay, duration, limit, period) {
    let _result = limit / duration * period + (0 - ((limit / duration) * delay));
    return _result;
}

function aggressiveRamp(delay, duration, limit, period) {
    let _result = 0
    if (period < delay) {
        _result = 0;
    }
    else {
        _result = Math.max(Math.min(((limit * 2) / (1 + Math.exp(-(-Math.log((limit * 2) / ((limit * 2) - 1) - 1) / (((delay + (duration - 1.2)) * 2.5))) * (period - delay))) / 2 - (duration - 1)) * 2 - (limit / 2), limit), 0);
    }
    return _result;
}

function compoundingRamp(delay, duration, limit, period) {
    let _result = 0;
    if (period < delay) {

    }
    else {
        _result = Math.max(Math.min((limit * 2) / (1 + Math.exp(-(-Math.log((limit * 2) / ((limit * 2) - 1) - 1) / ((2 * duration + 1) * 1.1 - (duration))) * ((period) - (delay) - ((duration) - 1)))) - 1, (limit)), 0);
    }
    return _result;
}

function calculateMarketplaceRamp() {
    let _marketplaceRampFy1_Q1 = (result_transactibilityRamp[0] * (input_transactabilityAssumption.attr(key_intValue) / 100));
    let _marketplaceRampFy1_Q2 = (result_transactibilityRamp[1] * (input_transactabilityAssumption.attr(key_intValue) / 100));
    let _marketplaceRampFy1_Q3 = (result_transactibilityRamp[2] * (input_transactabilityAssumption.attr(key_intValue) / 100));
    let _marketplaceRampFy1_Q4 = (result_transactibilityRamp[3] * (input_transactabilityAssumption.attr(key_intValue) / 100));
    let _marketplaceRampFy2_Q1 = (result_transactibilityRamp[4] * (input_transactabilityAssumption.attr(key_intValue) / 100));
    let _marketplaceRampFy2_Q2 = (result_transactibilityRamp[5] * (input_transactabilityAssumption.attr(key_intValue) / 100));
    let _marketplaceRampFy2_Q3 = (result_transactibilityRamp[6] * (input_transactabilityAssumption.attr(key_intValue) / 100));
    let _marketplaceRampFy2_Q4 = (result_transactibilityRamp[7] * (input_transactabilityAssumption.attr(key_intValue) / 100));
    /* Save raw values */
    result_marketplaceRampFy1_Q1.attr(key_intValue, _marketplaceRampFy1_Q1);
    result_marketplaceRampFy1_Q2.attr(key_intValue, _marketplaceRampFy1_Q2);
    result_marketplaceRampFy1_Q3.attr(key_intValue, _marketplaceRampFy1_Q3);
    result_marketplaceRampFy1_Q4.attr(key_intValue, _marketplaceRampFy1_Q4);
    result_marketplaceRampFy2_Q1.attr(key_intValue, _marketplaceRampFy2_Q1);
    result_marketplaceRampFy2_Q2.attr(key_intValue, _marketplaceRampFy2_Q2);
    result_marketplaceRampFy2_Q3.attr(key_intValue, _marketplaceRampFy2_Q3);
    result_marketplaceRampFy2_Q4.attr(key_intValue, _marketplaceRampFy2_Q4);
    /* Show results */
    result_marketplaceRampFy1_Q1.text(formatPercentage(_marketplaceRampFy1_Q1));
    result_marketplaceRampFy1_Q2.text(formatPercentage(_marketplaceRampFy1_Q2));
    result_marketplaceRampFy1_Q3.text(formatPercentage(_marketplaceRampFy1_Q3));
    result_marketplaceRampFy1_Q4.text(formatPercentage(_marketplaceRampFy1_Q4));
    result_marketplaceRampFy2_Q1.text(formatPercentage(_marketplaceRampFy2_Q1));
    result_marketplaceRampFy2_Q2.text(formatPercentage(_marketplaceRampFy2_Q2));
    result_marketplaceRampFy2_Q3.text(formatPercentage(_marketplaceRampFy2_Q3));
    result_marketplaceRampFy2_Q4.text(formatPercentage(_marketplaceRampFy2_Q4));
}

function calculateReferralTarget() {
    let _referralTargetFy1_Q1 = result_baselineOpportunityFy1_Q1.attr(key_intValue) * (result_marketplaceRampFy1_Q1.attr(key_intValue) / 100);
    let _referralTargetFy1_Q2 = result_baselineOpportunityFy1_Q2.attr(key_intValue) * (result_marketplaceRampFy1_Q2.attr(key_intValue) / 100);
    let _referralTargetFy1_Q3 = result_baselineOpportunityFy1_Q3.attr(key_intValue) * (result_marketplaceRampFy1_Q3.attr(key_intValue) / 100);
    let _referralTargetFy1_Q4 = result_baselineOpportunityFy1_Q4.attr(key_intValue) * (result_marketplaceRampFy1_Q4.attr(key_intValue) / 100);
    let _referralTargetFy2_Q1 = result_baselineOpportunityFy2_Q1.attr(key_intValue) * (result_marketplaceRampFy2_Q1.attr(key_intValue) / 100);
    let _referralTargetFy2_Q2 = result_baselineOpportunityFy2_Q2.attr(key_intValue) * (result_marketplaceRampFy2_Q2.attr(key_intValue) / 100);
    let _referralTargetFy2_Q3 = result_baselineOpportunityFy2_Q3.attr(key_intValue) * (result_marketplaceRampFy2_Q3.attr(key_intValue) / 100);
    let _referralTargetFy2_Q4 = result_baselineOpportunityFy2_Q4.attr(key_intValue) * (result_marketplaceRampFy2_Q4.attr(key_intValue) / 100);
    let _referralTargetTotal = _referralTargetFy1_Q1 + _referralTargetFy1_Q2 + _referralTargetFy1_Q3 + _referralTargetFy1_Q4 + _referralTargetFy2_Q1 + _referralTargetFy2_Q2 + _referralTargetFy2_Q3 + _referralTargetFy2_Q4;
    /* Save raw values */
    result_referralTargetFy1_Q1.attr(key_intValue, _referralTargetFy1_Q1);
    result_referralTargetFy1_Q2.attr(key_intValue, _referralTargetFy1_Q2);
    result_referralTargetFy1_Q3.attr(key_intValue, _referralTargetFy1_Q3);
    result_referralTargetFy1_Q4.attr(key_intValue, _referralTargetFy1_Q4);
    result_referralTargetFy2_Q1.attr(key_intValue, _referralTargetFy2_Q1);
    result_referralTargetFy2_Q2.attr(key_intValue, _referralTargetFy2_Q2);
    result_referralTargetFy2_Q3.attr(key_intValue, _referralTargetFy2_Q3);
    result_referralTargetFy2_Q4.attr(key_intValue, _referralTargetFy2_Q4);
    result_referralTargetTotal.attr(key_intValue, _referralTargetTotal);
    /* Show results */
    result_referralTargetFy1_Q1.text(formatNumber(_referralTargetFy1_Q1));
    result_referralTargetFy1_Q2.text(formatNumber(_referralTargetFy1_Q2));
    result_referralTargetFy1_Q3.text(formatNumber(_referralTargetFy1_Q3));
    result_referralTargetFy1_Q4.text(formatNumber(_referralTargetFy1_Q4));
    result_referralTargetFy2_Q1.text(formatNumber(_referralTargetFy2_Q1));
    result_referralTargetFy2_Q2.text(formatNumber(_referralTargetFy2_Q2));
    result_referralTargetFy2_Q3.text(formatNumber(_referralTargetFy2_Q3));
    result_referralTargetFy2_Q4.text(formatNumber(_referralTargetFy2_Q4));
    result_referralTargetTotal.text(formatNumber(_referralTargetTotal));
}

function calculateReferralProjection() {
    /* To keep things simpler we are not dividing the percentage by 100 to then divide the result by 100 again.
    So we are multiplying and then dividing everything by 10,000 */
    let _referralProjectionFy1_Q1 = (result_reciprocityRamp[0] * input_reciprocityAssumption.attr(key_intValue)) / 10000 * result_referralTargetFy1_Q1.attr(key_intValue);
    let _referralProjectionFy1_Q2 = (result_reciprocityRamp[1] * input_reciprocityAssumption.attr(key_intValue)) / 10000 * result_referralTargetFy1_Q2.attr(key_intValue);
    let _referralProjectionFy1_Q3 = (result_reciprocityRamp[2] * input_reciprocityAssumption.attr(key_intValue)) / 10000 * result_referralTargetFy1_Q3.attr(key_intValue);
    let _referralProjectionFy1_Q4 = (result_reciprocityRamp[3] * input_reciprocityAssumption.attr(key_intValue)) / 10000 * result_referralTargetFy1_Q4.attr(key_intValue);
    let _referralProjectionFy2_Q1 = (result_reciprocityRamp[4] * input_reciprocityAssumption.attr(key_intValue)) / 10000 * result_referralTargetFy2_Q1.attr(key_intValue);
    let _referralProjectionFy2_Q2 = (result_reciprocityRamp[5] * input_reciprocityAssumption.attr(key_intValue)) / 10000 * result_referralTargetFy2_Q2.attr(key_intValue);
    let _referralProjectionFy2_Q3 = (result_reciprocityRamp[6] * input_reciprocityAssumption.attr(key_intValue)) / 10000 * result_referralTargetFy2_Q3.attr(key_intValue);
    let _referralProjectionFy2_Q4 = (result_reciprocityRamp[7] * input_reciprocityAssumption.attr(key_intValue)) / 10000 * result_referralTargetFy2_Q4.attr(key_intValue);
    let _referralProjectionTotal = _referralProjectionFy1_Q1 + _referralProjectionFy1_Q2 + _referralProjectionFy1_Q3 + _referralProjectionFy1_Q4 + _referralProjectionFy2_Q1 + _referralProjectionFy2_Q2 + _referralProjectionFy2_Q3 + _referralProjectionFy2_Q4;
    /* Save raw values */
    result_referralProjectionFy1_Q1.attr(key_intValue, _referralProjectionFy1_Q1);
    result_referralProjectionFy1_Q2.attr(key_intValue, _referralProjectionFy1_Q2);
    result_referralProjectionFy1_Q3.attr(key_intValue, _referralProjectionFy1_Q3);
    result_referralProjectionFy1_Q4.attr(key_intValue, _referralProjectionFy1_Q4);
    result_referralProjectionFy2_Q1.attr(key_intValue, _referralProjectionFy2_Q1);
    result_referralProjectionFy2_Q2.attr(key_intValue, _referralProjectionFy2_Q2);
    result_referralProjectionFy2_Q3.attr(key_intValue, _referralProjectionFy2_Q3);
    result_referralProjectionFy2_Q4.attr(key_intValue, _referralProjectionFy2_Q4);
    result_referralProjectionTotal.attr(key_intValue, _referralProjectionTotal);
    /* Show results */
    result_referralProjectionFy1_Q1.text(formatNumber(_referralProjectionFy1_Q1));
    result_referralProjectionFy1_Q2.text(formatNumber(_referralProjectionFy1_Q2));
    result_referralProjectionFy1_Q3.text(formatNumber(_referralProjectionFy1_Q3));
    result_referralProjectionFy1_Q4.text(formatNumber(_referralProjectionFy1_Q4));
    result_referralProjectionFy2_Q1.text(formatNumber(_referralProjectionFy2_Q1));
    result_referralProjectionFy2_Q2.text(formatNumber(_referralProjectionFy2_Q2));
    result_referralProjectionFy2_Q3.text(formatNumber(_referralProjectionFy2_Q3));
    result_referralProjectionFy2_Q4.text(formatNumber(_referralProjectionFy2_Q4));
    result_referralProjectionTotal.text(formatNumber(_referralProjectionTotal));
}

function calculatePipelineProjection() {
    let _pipelineProjectionFy1_Q1 = pipelineProjectionFormula(result_referralTargetFy1_Q1.attr(key_intValue), result_referralProjectionFy1_Q1.attr(key_intValue));
    let _pipelineProjectionFy1_Q2 = pipelineProjectionFormula(result_referralTargetFy1_Q2.attr(key_intValue), result_referralProjectionFy1_Q2.attr(key_intValue));
    let _pipelineProjectionFy1_Q3 = pipelineProjectionFormula(result_referralTargetFy1_Q3.attr(key_intValue), result_referralProjectionFy1_Q3.attr(key_intValue));
    let _pipelineProjectionFy1_Q4 = pipelineProjectionFormula(result_referralTargetFy1_Q4.attr(key_intValue), result_referralProjectionFy1_Q4.attr(key_intValue));
    let _pipelineProjectionFy2_Q1 = pipelineProjectionFormula(result_referralTargetFy2_Q1.attr(key_intValue), result_referralProjectionFy2_Q1.attr(key_intValue));
    let _pipelineProjectionFy2_Q2 = pipelineProjectionFormula(result_referralTargetFy2_Q2.attr(key_intValue), result_referralProjectionFy2_Q2.attr(key_intValue));
    let _pipelineProjectionFy2_Q3 = pipelineProjectionFormula(result_referralTargetFy2_Q3.attr(key_intValue), result_referralProjectionFy2_Q3.attr(key_intValue));
    let _pipelineProjectionFy2_Q4 = pipelineProjectionFormula(result_referralTargetFy2_Q4.attr(key_intValue), result_referralProjectionFy2_Q4.attr(key_intValue));
    let _pipelineProjectionTotal = _pipelineProjectionFy1_Q1 + _pipelineProjectionFy1_Q2 + _pipelineProjectionFy1_Q3 + _pipelineProjectionFy1_Q4 + _pipelineProjectionFy2_Q1 + _pipelineProjectionFy2_Q2 + _pipelineProjectionFy2_Q3 + _pipelineProjectionFy2_Q4;
    /* Save raw values */
    result_pipelineProjectionFy1_Q1.attr(key_intValue, _pipelineProjectionFy1_Q1);
    result_pipelineProjectionFy1_Q2.attr(key_intValue, _pipelineProjectionFy1_Q2);
    result_pipelineProjectionFy1_Q3.attr(key_intValue, _pipelineProjectionFy1_Q3);
    result_pipelineProjectionFy1_Q4.attr(key_intValue, _pipelineProjectionFy1_Q4);
    result_pipelineProjectionFy2_Q1.attr(key_intValue, _pipelineProjectionFy2_Q1);
    result_pipelineProjectionFy2_Q2.attr(key_intValue, _pipelineProjectionFy2_Q2);
    result_pipelineProjectionFy2_Q3.attr(key_intValue, _pipelineProjectionFy2_Q3);
    result_pipelineProjectionFy2_Q4.attr(key_intValue, _pipelineProjectionFy2_Q4);
    result_pipelineProjectionTotal.attr(key_intValue, _pipelineProjectionTotal);
    /* Show results */
    result_pipelineProjectionFy1_Q1.text(formatCurrency(_pipelineProjectionFy1_Q1));
    result_pipelineProjectionFy1_Q2.text(formatCurrency(_pipelineProjectionFy1_Q2));
    result_pipelineProjectionFy1_Q3.text(formatCurrency(_pipelineProjectionFy1_Q3));
    result_pipelineProjectionFy1_Q4.text(formatCurrency(_pipelineProjectionFy1_Q4));
    result_pipelineProjectionFy2_Q1.text(formatCurrency(_pipelineProjectionFy2_Q1));
    result_pipelineProjectionFy2_Q2.text(formatCurrency(_pipelineProjectionFy2_Q2));
    result_pipelineProjectionFy2_Q3.text(formatCurrency(_pipelineProjectionFy2_Q3));
    result_pipelineProjectionFy2_Q4.text(formatCurrency(_pipelineProjectionFy2_Q4));
    result_pipelineProjectionTotal.text(formatCurrency(_pipelineProjectionTotal));
}

function pipelineProjectionFormula(referralTarget, referralProjection) {
    referralTarget = parseFloat(referralTarget);
    referralProjection = parseFloat(referralProjection);
    let _aspAssumption = parseFloat(input_aspAssumption.attr(key_intValue) / 100);
    let _baselineAverageSellingPrice = parseFloat(input_baselineAvgSellingPrice.attr(key_intValue));
    let _result = ((referralTarget + referralProjection) * (1 + _aspAssumption) * _baselineAverageSellingPrice) - ((referralTarget + referralProjection) * _baselineAverageSellingPrice) + (referralProjection * _baselineAverageSellingPrice * (1 + _aspAssumption));
    return _result;
}

function calculateRevenueImpact() {
    let _revenueImpactFy1_Q1 = revenueImpactFormula(result_referralTargetFy1_Q1.attr(key_intValue), result_referralProjectionFy1_Q1.attr(key_intValue));
    let _revenueImpactFy1_Q2 = revenueImpactFormula(result_referralTargetFy1_Q2.attr(key_intValue), result_referralProjectionFy1_Q2.attr(key_intValue));
    let _revenueImpactFy1_Q3 = revenueImpactFormula(result_referralTargetFy1_Q3.attr(key_intValue), result_referralProjectionFy1_Q3.attr(key_intValue));
    let _revenueImpactFy1_Q4 = revenueImpactFormula(result_referralTargetFy1_Q4.attr(key_intValue), result_referralProjectionFy1_Q4.attr(key_intValue));
    let _revenueImpactFy2_Q1 = revenueImpactFormula(result_referralTargetFy2_Q1.attr(key_intValue), result_referralProjectionFy2_Q1.attr(key_intValue));
    let _revenueImpactFy2_Q2 = revenueImpactFormula(result_referralTargetFy2_Q2.attr(key_intValue), result_referralProjectionFy2_Q2.attr(key_intValue));
    let _revenueImpactFy2_Q3 = revenueImpactFormula(result_referralTargetFy2_Q3.attr(key_intValue), result_referralProjectionFy2_Q3.attr(key_intValue));
    let _revenueImpactFy2_Q4 = revenueImpactFormula(result_referralTargetFy2_Q4.attr(key_intValue), result_referralProjectionFy2_Q4.attr(key_intValue));
    let _revenueImpactTotal = _revenueImpactFy1_Q1 + _revenueImpactFy1_Q2 + _revenueImpactFy1_Q3 + _revenueImpactFy1_Q4 + _revenueImpactFy2_Q1 + _revenueImpactFy2_Q2 + _revenueImpactFy2_Q3 + _revenueImpactFy2_Q4;
    /* Save raw values */
    result_revenueImpactFy1_Q1.attr(key_intValue, _revenueImpactFy1_Q1);
    result_revenueImpactFy1_Q2.attr(key_intValue, _revenueImpactFy1_Q2);
    result_revenueImpactFy1_Q3.attr(key_intValue, _revenueImpactFy1_Q3);
    result_revenueImpactFy1_Q4.attr(key_intValue, _revenueImpactFy1_Q4);
    result_revenueImpactFy2_Q1.attr(key_intValue, _revenueImpactFy2_Q1);
    result_revenueImpactFy2_Q2.attr(key_intValue, _revenueImpactFy2_Q2);
    result_revenueImpactFy2_Q3.attr(key_intValue, _revenueImpactFy2_Q3);
    result_revenueImpactFy2_Q4.attr(key_intValue, _revenueImpactFy2_Q4);
    result_revenueImpactTotal.attr(key_intValue, _revenueImpactTotal);
    /* Show results */
    result_revenueImpactFy1_Q1.text(formatCurrency(_revenueImpactFy1_Q1));
    result_revenueImpactFy1_Q2.text(formatCurrency(_revenueImpactFy1_Q2));
    result_revenueImpactFy1_Q3.text(formatCurrency(_revenueImpactFy1_Q3));
    result_revenueImpactFy1_Q4.text(formatCurrency(_revenueImpactFy1_Q4));
    result_revenueImpactFy2_Q1.text(formatCurrency(_revenueImpactFy2_Q1));
    result_revenueImpactFy2_Q2.text(formatCurrency(_revenueImpactFy2_Q2));
    result_revenueImpactFy2_Q3.text(formatCurrency(_revenueImpactFy2_Q3));
    result_revenueImpactFy2_Q4.text(formatCurrency(_revenueImpactFy2_Q4));
    result_revenueImpactTotal.text(formatCurrency(_revenueImpactTotal));
}

function revenueImpactFormula(referralTarget, referralProjection) {
    referralTarget = parseFloat(referralTarget);
    referralProjection = parseFloat(referralProjection);
    let _avgSellingPrice = parseFloat(input_baselineAvgSellingPrice.attr(key_intValue));
    let _winRate = parseFloat(input_winRateAssumption.attr(key_intValue) / 100);
    let _aspAssumption = parseFloat(input_aspAssumption.attr(key_intValue) / 100);
    let _baseWinRate = parseFloat(input_baselineBaseWinRate.attr(key_intValue) / 100);
    let _result = referralTarget * _avgSellingPrice * (1 + _winRate) * (1 + _aspAssumption) * _baseWinRate - (referralTarget * _avgSellingPrice * _baseWinRate) + (referralProjection * _avgSellingPrice * _baseWinRate * (1 + _winRate) * (1 + _aspAssumption));
    return _result;
}

function calculateProjectedRevenue() {
    let _projectedRevenueFy1_Q1 = parseFloat(result_baselineRevenueFy1_Q1.attr(key_intValue)) + parseFloat(result_revenueImpactFy1_Q1.attr(key_intValue));
    let _projectedRevenueFy1_Q2 = projectedRevenueFormula(result_baselineRevenueFy1_Q2.attr(key_intValue), result_revenueImpactFy1_Q2.attr(key_intValue), result_referralProjectionFy1_Q2.attr(key_intValue));
    let _projectedRevenueFy1_Q3 = projectedRevenueFormula(result_baselineRevenueFy1_Q3.attr(key_intValue), result_revenueImpactFy1_Q3.attr(key_intValue), result_referralProjectionFy1_Q3.attr(key_intValue));
    let _projectedRevenueFy1_Q4 = projectedRevenueFormula(result_baselineRevenueFy1_Q4.attr(key_intValue), result_revenueImpactFy1_Q4.attr(key_intValue), result_referralProjectionFy1_Q4.attr(key_intValue));
    let _projectedRevenueFy2_Q1 = projectedRevenueFormula(result_baselineRevenueFy2_Q1.attr(key_intValue), result_revenueImpactFy2_Q1.attr(key_intValue), result_referralProjectionFy2_Q1.attr(key_intValue));
    let _projectedRevenueFy2_Q2 = projectedRevenueFormula(result_baselineRevenueFy2_Q2.attr(key_intValue), result_revenueImpactFy2_Q2.attr(key_intValue), result_referralProjectionFy2_Q2.attr(key_intValue));
    let _projectedRevenueFy2_Q3 = projectedRevenueFormula(result_baselineRevenueFy2_Q3.attr(key_intValue), result_revenueImpactFy2_Q3.attr(key_intValue), result_referralProjectionFy2_Q3.attr(key_intValue));
    let _projectedRevenueFy2_Q4 = projectedRevenueFormula(result_baselineRevenueFy2_Q4.attr(key_intValue), result_revenueImpactFy2_Q4.attr(key_intValue), result_referralProjectionFy2_Q4.attr(key_intValue));
    let _projectedRevenueTotal = _projectedRevenueFy1_Q1 + _projectedRevenueFy1_Q2 + _projectedRevenueFy1_Q3 + _projectedRevenueFy1_Q4 + _projectedRevenueFy2_Q1 + _projectedRevenueFy2_Q2 + _projectedRevenueFy2_Q3 + _projectedRevenueFy2_Q4;
    /* Save raw values */
    result_projectedRevenueFy1_Q1.attr(key_intValue, _projectedRevenueFy1_Q1);
    result_projectedRevenueFy1_Q2.attr(key_intValue, _projectedRevenueFy1_Q2);
    result_projectedRevenueFy1_Q3.attr(key_intValue, _projectedRevenueFy1_Q3);
    result_projectedRevenueFy1_Q4.attr(key_intValue, _projectedRevenueFy1_Q4);
    result_projectedRevenueFy2_Q1.attr(key_intValue, _projectedRevenueFy2_Q1);
    result_projectedRevenueFy2_Q2.attr(key_intValue, _projectedRevenueFy2_Q2);
    result_projectedRevenueFy2_Q3.attr(key_intValue, _projectedRevenueFy2_Q3);
    result_projectedRevenueFy2_Q4.attr(key_intValue, _projectedRevenueFy2_Q4);
    result_projectedRevenueTotal.attr(key_intValue, _projectedRevenueTotal);
    /* Show results */
    result_projectedRevenueFy1_Q1.text(formatCurrency(_projectedRevenueFy1_Q1));
    result_projectedRevenueFy1_Q2.text(formatCurrency(_projectedRevenueFy1_Q2));
    result_projectedRevenueFy1_Q3.text(formatCurrency(_projectedRevenueFy1_Q3));
    result_projectedRevenueFy1_Q4.text(formatCurrency(_projectedRevenueFy1_Q4));
    result_projectedRevenueFy2_Q1.text(formatCurrency(_projectedRevenueFy2_Q1));
    result_projectedRevenueFy2_Q2.text(formatCurrency(_projectedRevenueFy2_Q2));
    result_projectedRevenueFy2_Q3.text(formatCurrency(_projectedRevenueFy2_Q3));
    result_projectedRevenueFy2_Q4.text(formatCurrency(_projectedRevenueFy2_Q4));
    result_projectedRevenueTotal.text(formatCurrency(_projectedRevenueTotal));
}

function projectedRevenueFormula(baselineRevenue, revenueImpact, referralProjection) {
    baselineRevenue = parseFloat(baselineRevenue);
    revenueImpact = parseFloat(revenueImpact);
    referralProjection = parseFloat(referralProjection);
    let _avgSellingPrice = parseFloat(input_baselineAvgSellingPrice.attr(key_intValue));
    let _winRate = parseFloat(input_winRateAssumption.attr(key_intValue) / 100);
    let _aspAssumption = parseFloat(input_aspAssumption.attr(key_intValue) / 100);
    let _result = baselineRevenue + revenueImpact + referralProjection * _avgSellingPrice * _winRate * _aspAssumption;
    return _result;
}

function runCalculations() {
    /* Run calculations */
    calculateCloudSalesAssumptions();
    calculateTableBaselinePipeline();
    calculateTableBaselineOpportunities();
    calculateBaselineRevenue();
    calculateTransactibilityRamp();
    calculateReciprocityRamp();
    calculateMarketplaceRamp();
    calculateReferralTarget();
    calculateReferralProjection();
    calculatePipelineProjection();
    calculateRevenueImpact();
    calculateProjectedRevenue();
}

function initConfig() {
    /* Transactability */
    input_transactabilityAssumption.val(20);
    input_transactabilityQuarters.val(4);
    input_transactabilityRamp.val("linear");
    /* ASP % + Assumption / Target */
    input_aspAssumption.val(10);
    /* Win Rate % + Assumption */
    input_winRateAssumption.val(12);
    /* Reciprocity */
    input_reciprocityAssumption.val(25);
    input_reciprocityQuartersBefore.val(2);
    input_reciprocityQuarters.val(4);
    input_reciprocityRamp.val("linear");
    /* Baselines */
    input_baselineAnnualRevenue.val(1000000);
    input_baselineAvgSellingPrice.val(60000);
    input_baselineBaseWinRate.val(20);
    input_baselineEstAnnualGrowth.val(25);
    input_baselineQ1.val(21);
    input_baselineQ2.val(23);
    input_baselineQ3.val(25);
    /* Force a blur on all inputs */
    $("input").trigger("blur");
    runCalculations();
    isInitialized = true;
}

/* Do a first run */
initConfig();

function createCharts() {
    chart_PipelineImpact = new Chart("chartPipelineImpact", {
        data: {
            datasets: [{
                type: "line",
                label: "Incoming Oppotunity Referral Projection",
                data: chartData_ReferralProjection,
                borderColor: '#8c1af5',
                backgroundColor: '#ffffff',
                yAxisID: "y1"
            }, {
                type: "line",
                label: "Outgoing Opp Referral Target",
                data: chartData_ReferralTarget,
                borderColor: '#eba944',
                backgroundColor: '#ffffff',
                yAxisID: "y1"
            }, {
                type: "bar",
                label: "Pipeline Increase Projection",
                data: chartData_PipelineProjection,
                borderColor: '#61bce5',
                backgroundColor: '#61bce5',
                yAxisID: "y"
            }, {
                type: "bar",
                label: "Baseline Target: Pipeline ($)",
                data: chartData_BaselinePipeline,
                borderColor: '#b7b7b7',
                backgroundColor: '#b7b7b7',
                yAxisID: "y"
            }],
            labels: ["Q1", "Q2", "Q3", "Q4", "Q1", "Q2", "Q3", "Q4"],
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    type: "linear",
                    display: true,
                    position: "left"
                },
                y1: {
                    type: "linear",
                    display: true,
                    position: "right"
                }
            }
        }
    });

    chart_RevenueImpact = new Chart("chartRevenueImpact", {
        data: {
            datasets: [{
                type: "line",
                label: "Baseline Plan: Revenue",
                data: chartData_BaselineRevenue,
                borderColor: '#b7b7b7',
                backgroundColor: '#ffffff',
                yAxisID: "y"
            }, {
                type: "line",
                label: "Projected Revenue Impact",
                data: chartData_RevenueImpact,
                borderColor: '#81bf5c',
                backgroundColor: '#ffffff',
                below: 'rgb(0, 0, 255)',
                yAxisID: "y"
            }],
            labels: ["Q1", "Q2", "Q3", "Q4", "Q1", "Q2", "Q3", "Q4"],
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    type: "linear",
                    display: true,
                    position: "left"
                }
            }
        }
    });
}

function updateCharts() {
    chartData_ReferralProjection[0] = formatNumber(result_referralProjectionFy1_Q1.attr(key_intValue));
    chartData_ReferralProjection[1] = formatNumber(result_referralProjectionFy1_Q2.attr(key_intValue));
    chartData_ReferralProjection[2] = formatNumber(result_referralProjectionFy1_Q3.attr(key_intValue));
    chartData_ReferralProjection[3] = formatNumber(result_referralProjectionFy1_Q4.attr(key_intValue));
    chartData_ReferralProjection[4] = formatNumber(result_referralProjectionFy2_Q1.attr(key_intValue));
    chartData_ReferralProjection[5] = formatNumber(result_referralProjectionFy2_Q2.attr(key_intValue));
    chartData_ReferralProjection[6] = formatNumber(result_referralProjectionFy2_Q3.attr(key_intValue));
    chartData_ReferralProjection[7] = formatNumber(result_referralProjectionFy2_Q4.attr(key_intValue));

    chartData_ReferralTarget[0] = formatNumber(result_referralTargetFy1_Q1.attr(key_intValue));
    chartData_ReferralTarget[1] = formatNumber(result_referralTargetFy1_Q2.attr(key_intValue));
    chartData_ReferralTarget[2] = formatNumber(result_referralTargetFy1_Q3.attr(key_intValue));
    chartData_ReferralTarget[3] = formatNumber(result_referralTargetFy1_Q4.attr(key_intValue));
    chartData_ReferralTarget[4] = formatNumber(result_referralTargetFy2_Q1.attr(key_intValue));
    chartData_ReferralTarget[5] = formatNumber(result_referralTargetFy2_Q2.attr(key_intValue));
    chartData_ReferralTarget[6] = formatNumber(result_referralTargetFy2_Q3.attr(key_intValue));
    chartData_ReferralTarget[7] = formatNumber(result_referralTargetFy2_Q4.attr(key_intValue));

    chartData_PipelineProjection[0] = result_pipelineProjectionFy1_Q1.attr(key_intValue);
    chartData_PipelineProjection[1] = result_pipelineProjectionFy1_Q2.attr(key_intValue);
    chartData_PipelineProjection[2] = result_pipelineProjectionFy1_Q3.attr(key_intValue);
    chartData_PipelineProjection[3] = result_pipelineProjectionFy1_Q4.attr(key_intValue);
    chartData_PipelineProjection[4] = result_pipelineProjectionFy2_Q1.attr(key_intValue);
    chartData_PipelineProjection[5] = result_pipelineProjectionFy2_Q2.attr(key_intValue);
    chartData_PipelineProjection[6] = result_pipelineProjectionFy2_Q3.attr(key_intValue);
    chartData_PipelineProjection[7] = result_pipelineProjectionFy2_Q4.attr(key_intValue);

    chartData_BaselinePipeline[0] = result_baselinePipelineFy1_Q1.attr(key_intValue);
    chartData_BaselinePipeline[1] = result_baselinePipelineFy1_Q2.attr(key_intValue);
    chartData_BaselinePipeline[2] = result_baselinePipelineFy1_Q3.attr(key_intValue);
    chartData_BaselinePipeline[3] = result_baselinePipelineFy1_Q4.attr(key_intValue);
    chartData_BaselinePipeline[4] = result_baselinePipelineFy2_Q1.attr(key_intValue);
    chartData_BaselinePipeline[5] = result_baselinePipelineFy2_Q2.attr(key_intValue);
    chartData_BaselinePipeline[6] = result_baselinePipelineFy2_Q3.attr(key_intValue);
    chartData_BaselinePipeline[7] = result_baselinePipelineFy2_Q4.attr(key_intValue);

    chartData_RevenueImpact[0] = result_revenueImpactFy1_Q1.attr(key_intValue);
    chartData_RevenueImpact[1] = result_revenueImpactFy1_Q2.attr(key_intValue);
    chartData_RevenueImpact[2] = result_revenueImpactFy1_Q3.attr(key_intValue);
    chartData_RevenueImpact[3] = result_revenueImpactFy1_Q4.attr(key_intValue);
    chartData_RevenueImpact[4] = result_revenueImpactFy2_Q1.attr(key_intValue);
    chartData_RevenueImpact[5] = result_revenueImpactFy2_Q2.attr(key_intValue);
    chartData_RevenueImpact[6] = result_revenueImpactFy2_Q3.attr(key_intValue);
    chartData_RevenueImpact[7] = result_revenueImpactFy2_Q4.attr(key_intValue);

    chartData_BaselineRevenue[0] = result_baselineRevenueFy1_Q1.attr(key_intValue);
    chartData_BaselineRevenue[1] = result_baselineRevenueFy1_Q2.attr(key_intValue);
    chartData_BaselineRevenue[2] = result_baselineRevenueFy1_Q3.attr(key_intValue);
    chartData_BaselineRevenue[3] = result_baselineRevenueFy1_Q4.attr(key_intValue);
    chartData_BaselineRevenue[4] = result_baselineRevenueFy2_Q1.attr(key_intValue);
    chartData_BaselineRevenue[5] = result_baselineRevenueFy2_Q2.attr(key_intValue);
    chartData_BaselineRevenue[6] = result_baselineRevenueFy2_Q3.attr(key_intValue);
    chartData_BaselineRevenue[7] = result_baselineRevenueFy2_Q4.attr(key_intValue);

    chart_PipelineImpact.update();
    chart_RevenueImpact.update();
}