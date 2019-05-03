export default (subject, prop) => {
    if (!!Array.isArray(subject)) {
        if (typeof prop === 'string') {
            return subject.indexOf(prop) >= 0
        }
        else if (!!Array.isArray(prop)) {
            return prop.map(p => subject.indexOf(p) >= 0)
        }
        else {
            console.log('Error: argument must be of type string or array')
        }
    }
    else if (typeof subject === 'object') {
        if (typeof prop === 'string') {
            return subject.hasOwnProperty(prop)
        }
        else if (!!Array.isArray(prop)) {
            return prop.map(p => subject.hasOwnProperty(p))
        }
        else {
            console.log('Error: argument must be of type string or array')
        }
    }
    else {
        console.log('Error: method must be called on array or object')
    }
}