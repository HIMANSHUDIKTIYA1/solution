const mymodule = (ranges, threshold) => {
    if ( ranges.length === 0) {
        return [];
    }


    ranges.sort((a, b) => a[0] - b[0]);

    const merged = [ranges[0]];

    for (let i = 1; i < ranges.length; i++) {
        const current = ranges[i];
        const lastMerged = merged[merged.length - 1];


        if (current[0] <= lastMerged[1] + threshold) {
        
            lastMerged[1] = Math.max(lastMerged[1], current[1]);
        } else {
           
            merged.push(current);
        }
    }

    return merged;
}

module.exports = mymodule;