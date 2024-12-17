import { JSDOM } from "jsdom";
import { LocalStorage } from "node-localstorage";

// Setup jsdom
const { window } = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
global.document = window.document;
global.window = window;

// Setup localStorage
global.localStorage = new LocalStorage('./scratch');