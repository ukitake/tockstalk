declare global {
	namespace Cypress {
		interface Chainable {
			waitUntil<T>(fn: () => T, options?: { delay?: number, timeout?: number }): Cypress.Chainable<T>
		}
	}

	// declare _cf_chl_opt.chlApiSitekey on window
	interface Window {
		_cf_chl_opt: {
			chlApiSitekey: string
		}
	}
}

export { }