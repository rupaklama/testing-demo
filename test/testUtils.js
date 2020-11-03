// global configurations for all our tests
// helper function that we can import into all of our test files 

// data-test-attribute is an attribute syntax - [type="text"]) 
// which is one of the valid CSS enzyme selector to find html elements to render
// with Find selector 

// find method/selector returns back an array which contains every elements/instances that matches
// the selector - .find(selector)
// although we only care about only one element

// using data-test-attribute on the component's html elements to be more specific 
// using data-test-attribute to easy to find html elements & to render it
// using expect statement to throw an error, attribute syntax ([href="foo"]
export const findByTestAttribute = (wrapper, value) => { // takes wrapper & value
  return wrapper.find(`[data-test="${value}"]`) // attrib/value
}
