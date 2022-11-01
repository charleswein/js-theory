var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
    }
    return Department;
}());
var educationalDepartment = new Department('Educational');
var accountingDepartment = new Department('Accounting');
console.log(educationalDepartment, accountingDepartment);
