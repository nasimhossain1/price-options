import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {"id":1,"name":"Basic Access","price":1500,"duration":"1 Month","features":["Gym floor access","Cardio equipment","Locker room access","Off-peak hours only"]},
        {"id":2,"name":"Standard Membership","price":2500,"duration":"1 Month","features":["Full gym access","Cardio & strength equipment","Locker room & shower","Anytime access","Free fitness assessment"]},
        {"id":3,"name":"Premium Membership","price":4000,"duration":"1 Month","features":["Unlimited gym access","All equipment access","Group classes","Personal trainer consultation","Locker & shower","Anytime access"]},
        {"id":4,"name":"Student Plan","price":1800,"duration":"1 Month","features":["Full gym access","Cardio & strength equipment","Locker room","Student ID required","Morning & afternoon access"]},
        {"id":5,"name":"Couple Plan","price":6500,"duration":"1 Month","features":["Access for 2 members","Full gym access","Group classes","Locker & shower","Anytime access"]},
        {"id":6,"name":"Annual Gold Plan","price":3600,"duration":"12 Months","features":["Unlimited gym access","All group classes","2 personal training sessions","Diet consultation","Locker & shower","Priority support"]}
    ];

    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the town</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    priceOptions.map(option => (
                        <PriceOption
                            key={option.id}
                            option={option}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default PriceOptions;
