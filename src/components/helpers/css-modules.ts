export const concatStyles = styles => styles.reduce((target, style={}) => {
    Object.entries(style).forEach(item => {
        const [className, targetClassName] = item;
        if (!target[className]) {
            target[className] = targetClassName;
        }
        else {
            target[className] += ' ' + targetClassName;
        }
    });
    return target;
}, {});
