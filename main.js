$(document).ready(function () {


    function calculateLoanApproval() {
        var salary = parseFloat($("#salary").val());
        var creditScore = parseFloat($("#credit-score").val());
        var months = parseFloat($("#months").val());
        
        if (approveOrDeny(salary, creditScore, months)) {
            outputMessage("Approved");
        } else {
            outputMessage("Denied");
        }
    }

    function approveOrDeny (salary, creditScore, months) {
        if ( salary >= 40000 ) {
            if ( creditScore >= 600 ) {
                return true;
            } else {
                if (months > 12 ) {
                    return true;
                } else {
                    return false;
                }
            }
        } else {
            if ( creditScore >= 600 ) {
                if (months > 12 ) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    }

    function outputMessage(message) {

        $("#approval-message").text(message);
    }

    function validate() {
        var errorMessage = "Must Be Numeric"
        var salary = parseFloat($("#salary").val());
        var creditScore = parseFloat($("#credit-score").val());
        var months = parseFloat($("#months").val());


        var salaryCheck = false;
        var creditScoreCheck = false;
        var monthsCheck = false;

        if (typeof salary === "number" && !isNaN(salary)) {
            if ( salary < 1000000000 ) {
                salaryCheck = true;
                $("#salary-error").text('');
            } else {
                $("#salary-error").text("Salary Too High");
            }
            
        } else {
            $("#salary-error").text(errorMessage);
        }
        
        if (typeof creditScore === "number" && !isNaN(creditScore)) {
            if ( creditScore <= 850 && creditScore > 300 ) {
                creditScoreCheck = true;
                $("#credit-score-error").text('');
            } else {
                $("#credit-score-error").text('Not In Range');
            }

        } else {
            $("#credit-score-error").text(errorMessage);
        }

        if (typeof months === "number" && !isNaN(months)) {
            if ( months < 1200 ) {
                monthsCheck = true;
                $("#months-error").text('');
            } else {
                $("#months-error").text('100+ Years?');
            }
        } else {
            $("#months-error").text(errorMessage);
        }

        return salaryCheck && creditScoreCheck && monthsCheck;
    }

    $(document).on('keypress',function(e) {
        if(e.key === "Enter") {
            var pass = validate();
            if (pass) {
                calculateLoanApproval();
            }
        }
    });

    $("#calculate").click(function (e) {
        e.preventDefault();
        var pass = validate();
        if (pass) {
            calculateLoanApproval();
        }
    })

});