const employee = {
    name: "Michoel",
    streetAddress: "1111 University Blvd",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = {...employee, [key] : value};
    return newObj;
};

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object;
};
function deleteFromEmployeeByKey(object, key) {
    const newObj = {...object};
    delete newObj[key];
    return newObj;
};

function destructivelyDeleteFromEmployeeByKey(object, key, value) {
    object[key] = value;
    return object;
};
