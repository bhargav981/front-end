import _ from 'lodash';
import metricsKeyMapping from 'config/metrics';

const compareOnId = (a, b) => {
    if (a.id < b.id) {
        return -1;
    }
    else if (a.id > b.id) {
        return 1;
    }
    return 0;
}

const compareOnIdReverse = (a, b) => {
    if (a.id > b.id) {
        return -1;
    }
    else if (a.id < b.id) {
        return 1;
    }
    return 0;
}

const compareOnTimeStamp = (a, b) => {
    if (a.timeStamp < b.timeStamp) {
        return 1;
    }
    else if (a.timeStamp > b.timeStamp) {
        return -1;
    }
    return 0;
}

const compareOnTimeStampReverse = (a, b) => {
    if (a.timeStamp < b.timeStamp) {
        return -1;
    }
    else if (a.timeStamp > b.timeStamp) {
        return 1;
    }
    return 0;
}

const checkIfPresent = (value) => {
    if (value === undefined || value === null || value === "") {
        return false;
    }
    return true;
}


const calculateAverageScore = (list, id) => {
    let sum = 0;
    if (list === null) {
        return 0;
    }
    list.map((eachItem) => {
        if (checkIfPresent(eachItem[id])) {
            sum += eachItem[id];
        }
        return 1;
    });
    if (list.length === 0) {
        return 0;
    }
    return Math.round((sum / list.length) * 10) / 10;
}

const getArrowType = (value) => {
    if (!checkIfPresent(value)) {
        return 'NO_ARROW';
    }
    if (value === 0) {
        return 'NO_ARROW';
    } else if (value > 0) {
        return 'UP_ARROW';
    } else {
        return 'DOWN_ARROW';
    }
}

const roundValue = (value, digits = 2) => {
    let factor = 1;
    if (digits === 1) {
        factor = 10;
    } else if (digits === 2) {
        factor = 100;
    } else if (digits === 3) {
        factor = 1000;
    }
    return Math.round(value * factor) / factor;
}

const getUserName = (userState) => {
    if (checkIfPresent(userState.firstName)) {
        return userState.firstName;
    } else if (checkIfPresent(userState.email)) {
        return userState.email;
    }
    return ''
}

const getSalutationBasedOnTime = () => {
    const today = new Date();
    const curHr = today.getHours()

    if (curHr < 12) {
        return 'label_good_morning';
    } else if (curHr < 16) {
        return 'label_good_afternoon';
    } else {
        return 'label_good_evening';
    }
}

const validateEmail = (mail) => {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,})+$/.test(mail)) {
        return true;
    }
    return false;
}

const addItemToArray = (myList, item) => {
    let flag = false;
    myList.map((eachItem) => {
        if (eachItem === item) {
            flag = true
        }
        return 1;
    });
    if (flag === false) {
        myList.push(item);
    }
    return myList;
}

const removeItemFromArray = (myList, item) => {
    return myList.filter((eachItem) => {
        return (eachItem !== item)
    })
}

const getIndexOfValueInArray = (inputArray, key, value) => {
    return _.findIndex(
        inputArray,
        inputArrayItem => inputArrayItem[key] === value
    );
}

const mergeArraysOfObjects = (array1, array2, key) => {
    const outputArray = array1;

    array2.map((arrayElement) => {
        const indexOfValue = getIndexOfValueInArray(
            outputArray, key, arrayElement[key]
        );

        if (indexOfValue === -1) {
            outputArray.push(arrayElement);
        }
        else {
            outputArray[indexOfValue] = {
                ...outputArray[indexOfValue],
                ...arrayElement
            };
        }
        return 1;
    });

    return outputArray;
}

const getUserMetricsForMetricsKey = (metricsList, userMetricsList, metricsKey) => {
    const metrics = metricsList.filter(
        eachMetrics => eachMetrics.key === metricsKeyMapping[metricsKey]
    )[0];

    let metricsId = -1;

    if (metrics) {
        metricsId = metrics.metricsId;
    }

    return userMetricsList.filter(
        eachUserMetrics => eachUserMetrics.metricsId === metricsId
    )[0];
}

const roundOfMetricsValuesAndDiff = (userMetricsList = []) => {
    return userMetricsList.map(userMetric => ({
        ...userMetric,
        value: Math.round(userMetric.value * 10) / 10,
        diff: Math.round(userMetric.diff * 10) / 10
    }));
}

const roundOfKeysInArray = (inputArray = [], keys = []) => {
    return inputArray.map(arrayElement => {
        const updatedElement = arrayElement;
        keys.forEach(key => {
            if (updatedElement[key]) {
                updatedElement[key] = Math.round(updatedElement[key] * 10) / 10
            }
        });
        return updatedElement;
    });
}

export {
    compareOnId,
    compareOnIdReverse,
    checkIfPresent,
    calculateAverageScore,
    getArrowType,
    compareOnTimeStamp,
    compareOnTimeStampReverse,
    roundValue,
    getUserName,
    getSalutationBasedOnTime,
    validateEmail,
    addItemToArray,
    removeItemFromArray,
    mergeArraysOfObjects,
    getUserMetricsForMetricsKey,
    roundOfMetricsValuesAndDiff,
    roundOfKeysInArray
};