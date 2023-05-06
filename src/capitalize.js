const str = 'hello'
const capitalize = (str) => {
    const first = str[0].toUpperCase();
    const second = str.slice(1);
    return `${first}${second}`;
}

export { capitalize };