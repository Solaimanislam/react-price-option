import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Basic",
            "price": "$30/month",
            "features": [
                "Access to cardio equipment",
                "Access to weightlifting area",
                "Locker room access",
                "24/7 gym access",
                "Free WiFi",
                "Fitness assessment"
            ]
        },
        {
            "id": 2,
            "name": "Standard",
            "price": "$50/month",
            "features": [
                "All Basic features",
                "Group fitness classes",
                "Access to sauna",
                "Access to functional training area",
                "Nutritional guidance"
            ]
        },
        {
            "id": 3,
            "name": "Premium",
            "price": "$80/month",
            "features": [
                "All Standard features",
                "Access to swimming pool",
                "Personal training session per month",
                "Towel service",
                "Priority booking for classes"
            ]
        }
    ]


    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Price in the town</h2>
            <div className="grid lg:grid-cols-3 gap-6">
                {
                    priceOptions.map(option => <PriceOption option={option} key={option.id}></PriceOption>)
                }
            </div>

        </div>
    );
};

export default PriceOptions;