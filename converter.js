const createConverter = (fromUnit, toUnit) => {
    const conversions = {
        "lbToKg": lb => lb * 0.453592,
        "kgToLb": kg => kg * 2.20462,
        "milesToKm": miles => miles * 1.60934,
        "kmToMiles": km => km * 0.621371,
        "cToF": c => (c * 9/5) + 32,
        "fToC": f => (f - 32) * 5/9,
    };

    const conversionKey = `${fromUnit}To${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}`;
    
    if (!conversions[conversionKey]) {
        throw new Error(`Conversion from ${fromUnit} to ${toUnit} is not supported.`);
    }

    return (values) => {
        if (Array.isArray(values)) {
            return values.map(conversions[conversionKey]);
        } else {
            return conversions[conversionKey](values);
        }
    };
};
