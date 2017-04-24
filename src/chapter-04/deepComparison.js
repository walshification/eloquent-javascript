function deepEqual(a, b) {
  if(isObjectNotNull(a) && isObjectNotNull(b)) {
    aProperties = Object.getOwnPropertyNames(a);
    for(var i = 0; i < aProperties.length; i++) {
      if(a[aProperties[i]] != b[aProperties[i]]) {
        return false;
      };
    };
    return true;
  } else {
    return a === b;
  };
}

function isObjectNotNull(value) {
  return typeof value === 'object' && value != null;
}
