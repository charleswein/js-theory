interface Employee {
  id: number,
  name: string
}

abstract class Department {
  constructor(public name: string,
              public readonly id?: number,
              protected employees: Employee[] = []) {

  }

  static fiscalYear = 2021

  static createEmployee(name: string) {
    return {
      name: name
    }
  }


  abstract describe(this: Department): void

  addEmployee(employee: Employee) {
    this.employees.push(employee)

    return this
  }

  printEmployeeInformation(index: number) {
    console.log(`Employee length: ${this.employees.length}, 
    Employee name: ${this.employees[index]}`)
  }
}

class ITDepartment extends Department {
  constructor(id: number, public admins: string[]) {
    super("IT", id);
  }

  describe() {
    console.log(this.name + 'description')
  }
}

class AccountingDepartment extends Department{
  public lastReport?: string

  constructor(id: number, private reports: string[]) {
    super("Accounting", id);
  }

  get recentReport () {
    if(this.lastReport) {
      return this.lastReport
    }
    throw new Error('No report found.');
  }

  set recentReport(value: string) {
    if(!value) {
      throw new Error('Something went wrong!')
    }
    this.addReport(value)
  }

  describe() {
    console.log(this.name + 'description')
  }

  addReport(report: string) {
    this.reports.push(report)
    this.lastReport = this.reports[this.reports.length - 1]
  }

  printReports() {
    console.log(this.reports)
  }
}

console.log(Department.createEmployee('Max'));
console.log(Department.fiscalYear);
const IT = new ITDepartment(1, ['Max'])

const accounting = new AccountingDepartment(1, ["My first report"])


