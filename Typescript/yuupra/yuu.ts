interface AddressFormat {
    zip:string;
    prefecture:string;
    city:string;
}

class TowerAddress implements AddressFormat {
    public zip;
    public prefecture;
    public city;
}

class Address implements AddressFormat {
    readonly addresses: any;
    public zip;
    public prefecture;
    public city;

    public constructor(private _zip: string) {
        this.addresses =
        {
            '070-1100': {
                'prefecture': '北海道',
                'city': '赤平市'
            },
            '038-0000': {
                'prefecture': '青森県',
                'city': '青森市'
            }
        };
    }
    get zip(): string {
        return this._zip;
    }

    set zip(value:string) {
        this._zip = value;
    }

    public getAddress(): string {
        let here = this.addresses[this.zip];
        return `${here.prefecture} ${here.city}`;
    }
}

let myaddress = new Address('079-1100');
//myaddress.zip = '111-1111';

console.log(myaddress.zip);
console.log(myaddress.getAddress());

console.log(myaddress.addresses);