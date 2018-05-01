export class Details {
    private email: string;
    private name: Name;
    private birthdate: Birthdate;
    private address: Address;
    private mobile: Mobile;
    private languageIndex: number;
    private descriptions: (string[])[];

    constructor(
        newEmail: string,
        newName: Name,
        newDate: Birthdate,
        newAddress: Address,
        newMobile: Mobile) {
            this.email=newEmail;
            this.name=newName;
            this.birthdate=newDate;
            this.address=newAddress;
            this.mobile=newMobile;
            this.languageIndex=0;
            this.descriptions = [
                ["Pełne imię: ","Full name: "],
                ["E-mail: ","E-mail: "],
                ["Adres zamieszkania: ","Address: "],
                ["Data urodzenia: ","Date of birth: "],
                ["Numer telefonu: ","Mobile number: "],
            ]
    }

    public getEmail() {
        return this.email;
    }

    public getName() {
        return  this.name.firstName+" "+this.name.lastName;
    }

    public getBirthdate() {
        return  this.birthdate.birthdate.toLocaleDateString();
    }

    public getAddress() {
        return  this.address.fullAddress[this.languageIndex];
    }

    public getMobile() {
        return  this.mobile.mobileFull;
    }

    public changeLanguage() {
        this.languageIndex=(this.languageIndex-1)^2;
    }

    public getDescription(index: number) {
        return this.descriptions[index][this.languageIndex];
    }
  }

export class Name {
    firstName: string;
    lastName: string;
    constructor(first: string, last: string) {
        this.firstName=first;
        this.lastName=last;
    } 
}

export class Birthdate {
    birthdate: Date;
    constructor(date: Date) {
        this.birthdate=date;
    } 
}

export class Address {
    countryNames: string[];
    cityName: string;
    postalCode: string;
    streetName: string;
    houseNumber: string;
    apartamentNumber: string;
    fullAddress: string[];
    constructor(
        country: string[], city: string, postal: string, 
        street: string, house: string, apartament: string) {
            this.countryNames=country;
            this.cityName=city;
            this.postalCode=postal;
            this.streetName=street;
            this.houseNumber=house;
            this.apartamentNumber=apartament;
            this.fullAddress = [country[0]+", "+city+" ("+postal+"), "+street+" "+house,
                                 country[1]+", "+city+" ("+postal+"), "+street+" "+house];
            if (apartament!="") this.fullAddress[0]+="/"+apartament;
            if (apartament!="") this.fullAddress[1]+="/"+apartament;
    }
}

export class Mobile {
    mobileNumber: number;
    mobilePrefix: string;
    mobileFull: string;
    constructor(number: number, prefix: string) {
        this.mobileNumber=number;
        this.mobilePrefix=prefix;
        this.mobileFull=prefix+" "+number.toString().substr(0,3)+" "
                    +number.toString().substr(3,3)+" "
                    +number.toString().substr(6,3);
    }
}