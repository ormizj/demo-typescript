/* TYPE */
type ApiRequest = 'a' | 'b' | 'c' | 'd' | 'e';

type ApiResponse = {
	a: { data: 97 };
	b: { data: 98 };
	c: { data: 99 };
	d: { data: 100 };
	e: { data: 101 };
};

// bind request to response
type RequestToResponse<T extends ApiRequest> = ApiResponse[T];

/* FUNCTIONALITY */
const fetchRequest = <T extends ApiRequest>(
	request: T,
	callback: (response: RequestToResponse<T>) => void
) => {
	/* API LOGIC */
	// outside of the project scope
	const data = {
		data: request.charCodeAt(0),
	} as RequestToResponse<T>;
	/* API LOGIC */

	callback(data);
};

fetchRequest('a', (res) => {
	res; // res: { data: 97 };
});

fetchRequest('e', (res) => {
	res; // res: { data: 101 };
});
