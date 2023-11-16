function hexToRgb (hex) {
    hex = hex.replace(/^#/, '');
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r, g, b];
}

function rgbToHex (rgb) {
    return `#${(1 << 24 | (rgb[0] << 16) | (rgb[1] << 8) | rgb[2]).toString(16).slice(1)}`;
}

export function lightenHexColor (hex, percent) {
    percent = Math.min(100, Math.max(0, percent));

    const rgb = hexToRgb(hex);

    rgb[0] = Math.min(255, rgb[0] + (percent / 100) * (255 - rgb[0]));
    rgb[1] = Math.min(255, rgb[1] + (percent / 100) * (255 - rgb[1]));
    rgb[2] = Math.min(255, rgb[2] + (percent / 100) * (255 - rgb[2]));

    return rgbToHex(rgb);
}
