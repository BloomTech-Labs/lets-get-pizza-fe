// This function should take any component & an id
export const findElementById = (component, id) => {
    // convert component to JSON so its easily managed with JavaScript
    const allVals = component.toJSON();

    // Declare a variable to store current 'level' of looping
    // as we want to be able to loop as many times as the writer
    // has nested elements. The incoming component will always be a single
    // element, so its children must be nested in an array as if 
    // we were accessing it from a parent.
    let currentLevel = [allVals.children];

    // store the final item
    const filteredElement = [];

    // This function will dig into the arrays at the current level of nesting
    // and set the current level to that of its children.
    const repeatingLoop = () => {
        const updateLevel = [];
        currentLevel.forEach(arr => {
            arr.forEach(object => {
                if (object.children) {
                    updateLevel.push(object.children);
                }
            });
        });
        currentLevel = updateLevel;
    };

    // This function will loop through all arrays of children at the current level
    // and will evaluate to see if any elements contain the given id from args.
    const lookForId = () => {
        currentLevel.forEach(arr => {
            arr.forEach(object => {
                if (object.props && object.props.id === id) {
                    filteredElement.push(object)
                }
            });
        });
    };

    // This function will check to see if all children arrays are empty
    // in order to push an object with an error message so that the while
    // loop does not run forever if there is no id matching the id
    // recieved from args.
    const checkForStoppingPoint = () => {
        const combinedArr = [];
        currentLevel.forEach(arr => {
            arr.forEach(item => combinedArr.push(item))
        })
        if (combinedArr.length === 0) {
            filteredElement.push({ error: "no matching id found in the supplied component" })
        }
    };

    // Check to see if initial component object contains the desired id from args.
    if (allVals.props.id === id) {
        return { ...allVals.props, type: allVals.type, children: allVals.children };

    } else {
        // Otherwise run the functions to check if there are children,
        // if the current component contains the correct id, or if
        // the code needs to run at the next level of children.
        do {
            checkForStoppingPoint();
            lookForId();
            repeatingLoop();
            // do these functions until desired condition is met.
        } while (filteredElement.length === 0)
        // return filteredElement[0];
        return { ...filteredElement[0].props, type: filteredElement[0].type, children: filteredElement[0].children }
    };
};