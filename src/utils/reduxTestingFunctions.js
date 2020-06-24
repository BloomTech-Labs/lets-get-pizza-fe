// This function should take any component & an id
export const findElementById = (component, id) => {
  /*    FOR USE IN TESTING REDUX RENDERER   */
  // convert component to JSON so its easily managed with JavaScript
  const mother = component.toJSON();

  // Declare a variable to store current 'level' of looping
  // as we want to be able to loop as many times as the writer
  // has nested elements. The incoming component will always be a single
  // element, so its children must be nested in an array as if
  // we were accessing it from a parent.
  let currentLevel = [mother.children];

  // store the final item
  const filteredElement = [];

  // This function will dig into the arrays at the current level of nesting
  // and set the current level to that of its children.
  const repeatingLoop = () => {
    const updateLevel = [];
    currentLevel.forEach((arr) => {
      arr.forEach((object) => {
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
    currentLevel.forEach((arr) => {
      arr.forEach((object) => {
        if (object.props && object.props.id === id) {
          filteredElement.push(object);
        }
      });
    });
  };

  // This function will check to see if all children arrays are empty
  // in order to push an object with an error message so that the while
  // loop does not run forever if there is no id matching the id
  // recieved from args.
  const checkForStoppingPoint = () => {
    let combinedArr = 0;
    currentLevel.forEach((arr) => {
      if (arr.length !== 0) {
        combinedArr++;
      }
    });
    if (combinedArr === 0) {
      filteredElement.push({
        error: "no matching id found in the supplied component",
      });
    }
  };

  // Check to see if initial component object contains the desired id from args.
  if (mother.props.id === id) {
    return { ...mother.props, type: mother.type, children: mother.children };
  } else {
    // Otherwise run the functions to check if there are children,
    // if the current component contains the correct id, or if
    // the code needs to run at the next level of children.
    do {
      checkForStoppingPoint();
      lookForId();
      repeatingLoop();
      // do these functions until desired condition is met.
    } while (filteredElement.length === 0);
    return {
      ...filteredElement[0].props,
      type: filteredElement[0].type,
      children: filteredElement[0].children,
    };
  }
};

// When testing to see if a document contains text from props
// and I want to check that the data passed through correctly
// at least once, this function will find the first instance
export const findFirstProp = (textString, find, findAll) => {
  const regex = new RegExp(textString, "i");
  const array = findAll(regex);

  if (array.length <= 1) {
    return find(regex);
  } else {
    return array[0];
  }
};

/*    FOR USE IN TESTING REDUX ACTION CREATORS    */

// compares if items in an array are equal to each other
// requires an array of results & an array of expected
//      order of expectation array matters
// optional parameter of a single item not to be expected
export const compareExpectedCalls = (
  resultsArr,
  expectedArr,
  unexpectedItem
) => {
  resultsArr.forEach((result, idx) => {
    if (unexpectedItem) {
      expect(result).not.toEqual(unexpectedItem);
    }
    expect(result).toEqual(expectedArr[idx]);
  });
  expectedArr.forEach((expectation, idx) => {
    expect(expectation).toEqual(resultsArr[idx]);
  });
};

export const spreadCalls = (arrayOfArrays) => {
  let newArray = [];
  arrayOfArrays.forEach((array) => (newArray = [...newArray, ...array]));
    return newArray;
  };

export const compareExpectedState = (
  typeArray,
  initialState,
  payload,
  expectedState,
  reducer,
  failType
) => {
  // Map over given typeArray and return an array of action objects
  const actionsArray = typeArray.map((type) => ({ type, payload }));

  // Here we use .forEach() to run our test for each action in the array
  actionsArray.forEach((action) => {
    // Pass the initialState and action into the reducer
    // and set returnedState to the returned state from the reducer
    const returnedState = reducer(initialState, action);

    if (failType) {
      const failedState = reducer(initialState, { type: failType, payload });

      expect(failedState).not.toStrictEqual(expectedState);
    }

    expect(returnedState).toStrictEqual(expectedState);
    expect(returnedState).not.toStrictEqual(initialState);
    expect(returnedState).toBeDefined();
  });
};
