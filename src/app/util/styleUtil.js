const setHue = function (primary, value){
	primary.h = primary.h + value;
	return primary;
}

const setSaturation = function (primary, value){
	primary.s = primary.s + value;
	return primary;
}

const setBrightness = function (primary, value){
	primary.l = primary.l + value;
	return primary;
}

const deriveColor = (primaryColorObj, h = -2, s = 1, l = -2) => {
    setHue(primaryColorObj, h);
    setSaturation(primaryColorObj, s);
    setBrightness(primaryColorObj, l);
    return primaryColorObj;
}

function componentToHex(c) {
    var hex = Math.round(c).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(rgbObj) {
    return "#" + componentToHex(rgbObj.r) + componentToHex(rgbObj.g) + componentToHex(rgbObj.b);
}

const hexToRgb = (hex) => {
    if(hex === undefined) {
        return;
    }
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length === 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        // return "rgba("+[(c>>16)&255, (c>>8)&255, c&255].join(",")+","+opacity+")";
        return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",")})`;
    }
}

const hexToRgbA = (hex, opacity = 1) => {
    if(hex === undefined) {
        return;
    }
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length === 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        // return "rgba("+[(c>>16)&255, (c>>8)&255, c&255].join(",")+","+opacity+")";
        return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",")},${opacity})`;
    }
}

const getCurrentEntityPalette = (entityPalettes, id) => {

    var currentEntityPalette = {
        "primaryColor": "#7b7bf6",
        "secondaryColor": "#7aedfc",
        "solidColor": "#e2ebff"
    };

    entityPalettes.map((eachEntityPalette) => {
        if(eachEntityPalette.id === id) {
            currentEntityPalette = eachEntityPalette.palette;
        }
        return 1;
    });
    return currentEntityPalette;
}

export {
    rgbToHex,
    hexToRgb,
    hexToRgbA,
    deriveColor,
    getCurrentEntityPalette
};