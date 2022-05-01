export const handleNonMatchedForNames = val => {
    return val.charAt(0) === ' '
      ? val.replace(' ', '')
      : val.replace(/[^\sa-zñáéíóú]/gi, '');
};