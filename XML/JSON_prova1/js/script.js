window.onload = function () {
    //Es01
    alert("Inizo esecuzione codice");
    let firstPerson = {name: "Mario", surname: "Rossi"};
    alert("1° esercizio");
    alert(firstPerson.name + " " + firstPerson.surname);
    //es02
    let secondPerson = {};
    secondPerson.name = "Giovanni";
    secondPerson.surname = "Bianchi";
    alert("2° esercizio");
    alert(secondPerson.name + " " + secondPerson.surname);
    //es03
    let thirdPerson = new Object();
    thirdPerson.name = "Roberto";
    thirdPerson.surname = "Verdi";
    alert("3° esercizio");
    alert(thirdPerson.name + " " + thirdPerson.surname);
    //es04
    let number = new Object(10);
    let expression = new Object(3 * 2);
    let string = new Object("test");
    let fourthPerson = new Object({name: "Giuseppe", surname: "Blu"});
    alert("4° esercizio");
    alert(number + expression);
    alert(string);
    alert(fourthPerson.name + fourthPerson.surname);
    //es05
    let fifthPerson = {
        name: "Roberto",
        surname: "Rossini",
        address: {
            street: "Via Mazzini",
            number: "20",
            CAP: "12100",
            city: "Cuneo"
        }
    }
    alert("5° esercizio");
    alert(fifthPerson.name + " " + fifthPerson.surname);
    alert(fifthPerson.address.street + fifthPerson.address.number + fifthPerson.address.CAP + fifthPerson.address.city);
    //es06
    let sixthPerson = {
        name: "Rossano",
        surname: "Bianchini",
        address: {
            street: "Via Italia",
            number: "10",
            CAP: "12045",
            city: "Fossano"
        }
    }
    alert("6° esercizio");
    alert(sixthPerson["surname"] + " " + sixthPerson["name"]);
    alert(sixthPerson["address"]["street"] + " " + sixthPerson["address"]["number"] + ", " + sixthPerson["address"]["CAP"] + ", " + sixthPerson["address"]["city"] + ".");
    //es07
    let seventhPerson = {
        name: "Maria",
        surname: "Verdini",
        address: {
            street: "Via Tutti",
            number: "5",
            CAP: "12014",
            city: "Torino"
        },
        namesurname: displayNameSurname,
        streetNumber: function () {
            return this.address.street + " " + this.address.number;
        }
    }
}